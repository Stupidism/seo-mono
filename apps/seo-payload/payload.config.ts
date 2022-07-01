import { buildConfig } from 'payload/config';

import { TestDrafts } from './src/collections/TestDrafts';

export default buildConfig({
  collections: [TestDrafts],
  // By default, Payload will boot up normally
  // and you will be provided with a base `User` collection.
  // But, here is where you define how you'd like Payload to work!
});
