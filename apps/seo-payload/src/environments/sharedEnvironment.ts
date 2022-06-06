export const sharedEnvironment = {
  payload: {
    configPath: 'dist/apps/seo-payload/payload.config.js',
    secretKey: process.env.PAYLOAD_SECRET_KEY || 'default-secret-key',
  },
};
