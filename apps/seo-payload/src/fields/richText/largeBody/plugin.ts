import { RichTextCustomElement } from 'payload/dist/fields/config/types';

const withLargeBody: NonNullable<RichTextCustomElement['plugins']>[number] = (
  incomingEditor
) => {
  const editor = incomingEditor;
  
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { shouldBreakOutOnEnter } = editor;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  editor.shouldBreakOutOnEnter = (element) =>
    element.type === 'large-body' ? true : shouldBreakOutOnEnter(element);

  return editor;
};

export default withLargeBody;
