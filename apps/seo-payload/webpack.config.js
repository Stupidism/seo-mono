module.exports = (config, context) => {
  return {
    ...config,
    entry: {
      ...config.entry,
      config: './apps/seo-payload/payload.config.ts',
    },
    output: {
      ...config.output,
      filename: '[name].js',
    },
  };
};
