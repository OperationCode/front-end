/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unicorn/prevent-abbreviations */

const { get } = require('lodash');

// helper func which targets possible react components
const hasDeclaration = (singleNode, propTypeNode) => {
  if (!singleNode.type.match(/[Function|Variable|Class|Export(Named|Default)]Declaration/)) {
    return false;
  }

  const isDefaultOrNamedExport =
    get(singleNode, 'declaration.id.name') === propTypeNode.name ||
    get(singleNode, 'declaration.id.name.declarations[0].id.name') === propTypeNode.name;

  if (isDefaultOrNamedExport) return true;

  const isVariableOrFunctionStatement =
    get(singleNode, 'id.name') === propTypeNode.name ||
    get(singleNode, 'declaration[0].id.name') === propTypeNode.name;

  if (isVariableOrFunctionStatement) return true;
  return false;
};

module.exports = {
  rules: {
    'proptype-definition-above-fn': {
      create(context) {
        return {
          AssignmentExpression(node) {
            const propTypeNode = get(node, 'left.object');
            const compareValue = get(propTypeNode, 'start');
            const propName = get(node, 'left.property.name');

            if (['propTypes', 'defaultProps'].includes(propName)) {
              const body = get(node, 'parent.parent.body', []);
              const targetNode = body.find(element => hasDeclaration(element, propTypeNode));

              if (targetNode && targetNode.end < compareValue) {
                return context.report(
                  node,
                  node.loc,
                  'PropTypes/defaultProps definitions should exist above component declaration.',
                );
              }
            }
            return null;
          },
        };
      },
    },
  },
};
