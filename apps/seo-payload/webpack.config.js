const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('css-minimizer-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = (config, context) => {
  return {
    ...config,
    entry: {
      ...config.entry,
      'payload.config': './apps/seo-payload/payload.config.ts',
    },
    output: {
      ...config.output,
      filename: '[name].js',
    },
    optimization: {
      minimizer: [
        new TerserJSPlugin({
          extractComments: false,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(sa|sc|c)ss$/,
          sideEffects: true,
          use: [
            MiniCSSExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['postcss-preset-env'],
                },
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      ...config.plugins,
      new MiniCSSExtractPlugin({
        filename: 'styles.css',
        ignoreOrder: true,
      }),
    ],
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'payload-scss-overrides':
          'node_modules/payload/dist/admin/scss/overrides.scss',
      },
    },
  };
};
