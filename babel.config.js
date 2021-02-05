module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          debug: false,
          useBuiltIns: false,
        },
      ],
      '@babel/preset-react',
      '@babel/typescript',
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      [
        '@babel/plugin-transform-runtime',
        {
          absoluteRuntime: false,
          corejs: false,
          helpers: true,
          regenerator: true,
          useESModules: false,
          version: '7.0.0-beta.0',
        },
      ],
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true,
        },
      ],
      '@babel/plugin-transform-async-to-generator',
      '@babel/proposal-object-rest-spread',
      [
        'babel-plugin-inline-import',
        {
          extensions: ['.svg'],
        },
      ],
    ],
    env: {
      production: {
        presets: ['react-optimize'],
      },
    },
  }
}
