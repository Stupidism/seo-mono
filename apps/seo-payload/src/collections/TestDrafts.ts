import { CollectionConfig } from 'payload/types';

export const TestDrafts: CollectionConfig = {
  slug: 'test-drafts',
  admin: {
    useAsTitle: 'name',
  },
  versions: {
  },
  // auth enabled collections get email and other fields for secure authentication in addition to the fields you add
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
};
