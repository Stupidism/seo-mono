import { RichTextElement } from 'payload/dist/fields/config/types';
import Button from './Button';
import Element from './Element';
import withLargeBody from './plugin';

export default {
  name: 'large-body',
  Button,
  Element,
  plugins: [withLargeBody],
} as RichTextElement;
