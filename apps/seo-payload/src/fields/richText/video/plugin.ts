import { RichTextCustomElement } from 'payload/dist/fields/config/types';

// This is commented out because of ts error and not used.
const withVideo: NonNullable<RichTextCustomElement['plugins']>[number] = (
  incomingEditor
) => {
  const editor = incomingEditor;
  const { isVoid } = editor;

  editor.isVoid = (element) =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.type === 'video' ? true : isVoid(element);

  return editor;
};

export default withVideo;
