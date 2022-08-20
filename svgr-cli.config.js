module.exports = {
  expandProps: 'end',
  typescript: true,
  prettier: false,
  dimensions: true,
  replaceAttrValues: {
    '#000': 'currentColor',
  },
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeUnknownsAndDefaults: false,
            removeViewBox: false,
          },
        },
      },
      { name: 'removeXMLNS', params: { removeXMLNS: true } },
    ],
  },
  svgProps: {
    width: '{size}',
    height: '{size}',
    color: '{color}',
    ref: '{ref}',
  },
};
