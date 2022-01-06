import React from 'react';
import BlockButton from './BlockButton';
import MarkButton from './MarkButton';
import theme from './theme/default'; // TODO read this with ThemeProvider

export default {
  bold: <MarkButton format="bold" icon={theme.icons.bold()} />,
  italic: <MarkButton format="italic" icon={theme.icons.italic()} />,
  underline: <MarkButton format="underline" icon={theme.icons.underline()} />,
  strikethrough: <MarkButton format="strikethrough" icon={theme.icons.strikethrough()} />,
  code: <MarkButton format="code" icon={theme.icons.code()} />,
  ol: <BlockButton format="numbered-list" icon={theme.icons.ol()} />,
  ul: <BlockButton format="bulleted-list" icon={theme.icons.ul()} />,
  quote: <BlockButton format="block-quote" icon={theme.icons.quote()} />,
  alignLeft: <BlockButton format="align-left" icon={theme.icons.alignLeft()} />,
  alignCenter: <BlockButton format="align-center" icon={theme.icons.alignCenter()} />,
  alignRight: <BlockButton format="align-right" icon={theme.icons.alignRight()} />,
  alignJustify: <BlockButton format="align-justify" icon={theme.icons.alignJustify()} />
};
