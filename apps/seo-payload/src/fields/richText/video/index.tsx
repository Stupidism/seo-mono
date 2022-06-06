import { RichTextElement } from 'payload/dist/fields/config/types';

import plugin from './plugin';
import Element from './Element';
import Button from './Button';

export default {
  name: 'video',
  Button,
  Element,
  plugins: [plugin],
} as RichTextElement;
