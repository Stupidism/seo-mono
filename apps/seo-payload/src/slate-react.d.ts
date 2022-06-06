import { ReactEditor } from 'slate-react';

declare module 'slate-react' {
  export declare const useSlate: () => ReactEditor;
}
