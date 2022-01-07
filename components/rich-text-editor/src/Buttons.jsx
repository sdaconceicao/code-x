import React from 'react';
import BlockButton from './BlockButton';
import MarkButton from './MarkButton';
import theme from './theme/default'; // TODO read this with ThemeProvider

export default {
  bold: <MarkButton format="bold" icon={theme.icons.bold()} key="bold" />,
  italic: <MarkButton format="italic" icon={theme.icons.italic()} key="italic" />,
  underline: <MarkButton format="underline" icon={theme.icons.underline()} key="underline" />,
  strikethrough: (
    <MarkButton format="strikethrough" icon={theme.icons.strikethrough()} key="strikethrough" />
  ),
  code: <MarkButton format="code" icon={theme.icons.code()} key="code" />,
  ol: <BlockButton format="ol" icon={theme.icons.ol()} key="ol" />,
  ul: <BlockButton format="ul" icon={theme.icons.ul()} key="ul" />,
  quote: <BlockButton format="block-quote" icon={theme.icons.quote()} key="quote" />,
  alignLeft: <BlockButton format="align-left" icon={theme.icons.alignLeft()} key="al" />,
  alignCenter: <BlockButton format="align-center" icon={theme.icons.alignCenter()} key="ac" />,
  alignRight: <BlockButton format="align-right" icon={theme.icons.alignRight()} key="ar" />,
  alignJustify: <BlockButton format="align-justify" icon={theme.icons.alignJustify()} key="aj" />
};
