import { sharedEnvironment } from './sharedEnvironment';

export const environment = {
  production: false,
  deployEnv: 'dev',
  port: 9106,
  payload: {
    ...sharedEnvironment.payload,
    mongoUrl: 'mongodb://localhost/seo-payload1',
    publicServerUrl: 'http://localhost:9106',
  },
};
