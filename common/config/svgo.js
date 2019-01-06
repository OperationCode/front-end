// Webpack is unable to use export default
const svgoConfig = {
  plugins: [
    { cleanupIDs: true, params: { minify: true } },
    { cleanupListOfValues: true },
    { convertColors: true },
    { convertStyleToAttrs: true },
    { convertTransform: true },
    { mergePaths: true },
    { minifyStyles: true },
    { moveElemesAttrsToGroup: true },
    { removeAttrs: true, params: { /* exceptions */ attrs: 'fill-rule' } },
    { removeComments: true },
    { removeDesc: true, params: { removeAny: true } },
    { removeDimensions: true },
    { removeDoctype: true },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: true },
    { removeEmptyContainers: true },
    { removeEmptyText: true },
    { removeNonInheritableGroupAttrs: true },
    { removeTitle: false },
    { removeUnknownsAndDefaults: true },
    { removeUnusedNS: true },
    { removeUselessDefs: true },
    { removeUselessStrokeAndFill: true },
    { removeXMLProcInst: true },
    { sortAttrs: true },
<<<<<<< HEAD
=======
    {
      addAttributesToSVGElement: {
        attribute: 'aria-hidden="true"',
      },
    },
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  ],
  floatPrecision: 3,
};

// Imported only in Webpack (requires CommonJS imports)
module.exports = svgoConfig;
