import { sharedEnvironment } from './sharedEnvironment';

export const environment = {
  production: true,
  deployEnv: 'prod',
  payload: {
    ...sharedEnvironment.payload,
    mongoUrl: 'mongodb://localhost/seo-payload',
    publicServerUrl: 'http://localhost:3333',
  },
};
