import { Editor, Transforms, Element as SlateElement, Text } from 'slate';
import { jsx } from 'slate-hyperscript';

export const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code'
};
export const LIST_TYPES = ['ul', 'ol'];
export const ELEMENT_TAGS = {
  A: (el) => ({ type: 'link', url: el.getAttribute('href') }),
  BLOCKQUOTE: () => ({ type: 'quote' }),
  H1: () => ({ type: 'h1' }),
  H2: () => ({ type: 'h2' }),
  H3: () => ({ type: 'h3' }),
  H4: () => ({ type: 'h4' }),
  H5: () => ({ type: 'h5' }),
  H6: () => ({ type: 'h6' }),
  IMG: (el) => ({ type: 'image', url: el.getAttribute('src') }),
  LI: () => ({ type: 'li' }),
  OL: () => ({ type: 'ol' }),
  UL: () => ({ type: 'ul' }),
  P: () => ({ type: 'p' }),
  PRE: () => ({ type: 'code' })
};
export const TEXT_TAGS = {
  CODE: () => ({ code: true }),
  DEL: () => ({ strikethrough: true }),
  EM: () => ({ italic: true }),
  I: () => ({ italic: true }),
  S: () => ({ strikethrough: true }),
  STRONG: () => ({ bold: true }),
  U: () => ({ underline: true })
};

export const deserialize = (el) => {
  if (el.nodeType === 3) {
    return el.textContent;
  }
  if (el.nodeType !== 1) {
    return null;
  }
  if (el.nodeName === 'BR') {
    return '\n';
  }

  const { nodeName } = el;
  let parent = el;

  if (nodeName === 'PRE' && el.childNodes[0]?.nodeName === 'CODE') {
    parent = el.childNodes[0];
  }
  let children = Array.from(parent.childNodes).map(deserialize).flat();

  if (children.length === 0) {
    children = [{ text: '' }];
  }

  if (el.nodeName === 'BODY') {
    return jsx('fragment', {}, children);
  }

  if (ELEMENT_TAGS[nodeName]) {
    const attrs = ELEMENT_TAGS[nodeName](el);
    return jsx('element', attrs, children);
  }

  if (TEXT_TAGS[nodeName]) {
    const attrs = TEXT_TAGS[nodeName](el);
    return children.map((child) => jsx('text', attrs, child));
  }

  return children;
};

export const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export const isBlockActive = (editor, format) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format
    })
  );

  return !!match;
};

export const serialize = (node) => {
  if (Text.isText(node)) {
    let string = node.text;
    if (node.bold) {
      string = `<strong>${string}</strong>`;
    }
    if (node.italic) {
      string = `<em>${string}</em>`;
    }
    if (node.underline) {
      string = `<u>${string}</u>`;
    }
    if (node.strikethrough) {
      string = `<del>${string}</del>`;
    }
    if (node.code) {
      string = `<code>${string}</code>`;
    }
    return string;
  }

  const children = node.children?.map((n) => serialize(n)).join('');
  switch (node.type) {
    case 'quote':
      return `<blockquote><p>${children}</p></blockquote>`;
    case 'p':
    case 'ul':
    case 'ol':
    case 'li':
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return `<${node.type}>${children}</${node.type}>`;
    case 'link':
      return `<a href="${node.url}">${children}</a>`;
    case 'align-left':
    case 'align-right':
    case 'align-center':
    case 'align-justify': {
      return `<p style="text-align: ${node.type.split('-')[1]}">${children}</p>`;
    }
    default:
      return children;
  }
};

export const getPlainText = (html) => html.replace(/(<([^>]+)>)/gi, '');

export const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && LIST_TYPES.includes(n.type),
    split: true
  });
  const newProperties = {
    type: isActive ? 'paragraph' : isList ? 'li' : format
  };
  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

export const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};
