const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('webpack-merge');

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        { pattern: config.grep ? config.grep : 'tests/**/**/*.spec.js', type: 'module' },
      ],

      esm: {
        nodeResolve: true,
      },
    }),
  );
  return config;
}