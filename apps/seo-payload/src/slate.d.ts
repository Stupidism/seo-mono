import { Location } from 'slate';

declare module 'slate' {
  export interface BaseEditor {
    blurSelection?: Location;
  }

  export interface BaseElement {
    type?: string;
  }
}
