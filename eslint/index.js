module.exports = {
  rules: {
    'proptype-definition': {
      create(context) {
        return {
          AssignmentExpression(node) {
            // helper func which targets possible react components
            const findDeclaration = singleNode => {
              if (
                singleNode.type.match(/[Function|Variable|Class|Export(Named|Default)]Declaration/)
              ) {
                // deal with default or named export
                if (singleNode.declaration) {
                  const { declarations } = singleNode.declaration;
                  if (
                    (declarations && declarations[0].id.name === propertyTypeNode.name) ||
                    singleNode.declaration.id.name === propertyTypeNode.name
                  ) {
                    return true;
                  }
                  // deal with variable declaration or function statement
                } else if (
                  (singleNode.id && singleNode.id.name === propertyTypeNode.name) ||
                  (singleNode.declarations &&
                    singleNode.declarations[0].id.name === propertyTypeNode.name)
                ) {
                  return true;
                }
              }
              return false;
            };
            // PropType node
            const propertyTypeNode = node.left.object;
            // start loc of PropType node
            const compareValue = propertyTypeNode.start;
            if (node.left.property.name === 'propTypes') {
              // find the component the proptype declaration was intended for
              // Had to implement it this way otherwise eslint would error
              const targetNode =
                node.parent.parent &&
                node.parent.parent.body &&
                node.parent.parent.body.find(element => findDeclaration(element));
              if (targetNode && targetNode.end < compareValue) {
                return context.report(
                  node,
                  node.loc,
                  'PropTypes definitions should exist above component declaration.',
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
