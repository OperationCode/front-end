/* eslint-disable unicorn/prevent-abbreviations */
// Webpack is unable to use export default

interface SVGOPlugin {
  name: string;
  params?: Record<string, any>;
}

interface SVGOConfig {
  plugins: SVGOPlugin[];
  floatPrecision: number;
}

const svgoConfig: SVGOConfig = {
  plugins: [
    { name: 'cleanupIDs', params: { minify: true } },
    { name: 'cleanupListOfValues' },
    { name: 'convertColors' },
    { name: 'convertStyleToAttrs' },
    { name: 'convertTransform' },
    { name: 'mergePaths' },
    { name: 'minifyStyles' },
    { name: 'moveElemsAttrsToGroup' },
    { name: 'removeAttrs', params: { /* exceptions */ attrs: 'fill-rule' } },
    { name: 'removeComments' },
    { name: 'removeDesc', params: { removeAny: true } },
    { name: 'removeDimensions' },
    { name: 'removeDoctype' },
    { name: 'removeEditorsNSData' },
    { name: 'removeEmptyAttrs' },
    { name: 'removeEmptyContainers' },
    { name: 'removeEmptyText' },
    { name: 'removeNonInheritableGroupAttrs' },
    { name: 'removeTitle' },
    { name: 'removeUnknownsAndDefaults' },
    { name: 'removeUnusedNS' },
    { name: 'removeUselessDefs' },
    { name: 'removeUselessStrokeAndFill' },
    { name: 'removeXMLProcInst' },
    { name: 'sortAttrs' },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            'aria-hidden': true,
          },
        ],
      },
    },
  ],
  floatPrecision: 3,
};

// Imported only in Webpack (requires CommonJS imports)
module.exports = svgoConfig;
