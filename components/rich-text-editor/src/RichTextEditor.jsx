import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import isHotkey from 'is-hotkey';
import {
  Editable, withReact, Slate
} from 'slate-react';
import {
  createEditor
} from 'slate';
import { withHistory } from 'slate-history';
import { ButtonGroup } from '@code-x/button';
import { withFormElement } from '@code-x/form-element';
import Toolbar from './Toolbar';
import Element from './Element';
import Leaf from './Leaf';
import { deserialize, toggleMark } from './utils.js';
import BlockButton from './BlockButton';
import MarkButton from './MarkButton';
import useStyles from './RichTextEditor.styles';
import theme from './theme/default'; // TODO read this with ThemeProvider

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code'
};

export const RichTextEditorComponent = ({
  name, value, placeholder, onChange, label
}) => {
  const document = new DOMParser().parseFromString(value, 'text/html');
  const [localValue, setLocalValue] = useState(deserialize(document.body));
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const classes = useStyles();
  const handleChange = val => {
    setLocalValue(val);
    onChange({ name, value: val });
  };
  return (
    <Slate editor={editor} value={localValue} onChange={handleChange}>
      <Toolbar>
        <ButtonGroup className={classes.controlGroup}>
          <MarkButton format="bold" icon={theme.icons.bold()} />
          <MarkButton format="italic" icon={theme.icons.italic()} />
          <MarkButton format="underline" icon={theme.icons.underline()} />
          <MarkButton format="strikethrough" icon={theme.icons.strikethrough()} />
          <MarkButton format="code" icon={theme.icons.code()} />
        </ButtonGroup>
        <ButtonGroup className={classes.controlGroup}>
          <BlockButton format="numbered-list" icon={theme.icons.ol()} />
          <BlockButton format="bulleted-list" icon={theme.icons.ul()} />
          <BlockButton format="block-quote" icon={theme.icons.quote()} />
        </ButtonGroup>
        <ButtonGroup className={classes.controlGroup}>
          <BlockButton format="align-left" icon={theme.icons.alignLeft()} />
          <BlockButton format="align-center" icon={theme.icons.alignCenter()} />
          <BlockButton format="align-right" icon={theme.icons.alignRight()} />
          <BlockButton format="align-justify" icon={theme.icons.alignJustify()} />
        </ButtonGroup>
      </Toolbar>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder={placeholder}
        title={label}
        spellCheck
        className={classes.content}
        autoFocus
        onKeyDown={event => {
          // eslint-disable-next-line no-restricted-syntax
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event)) {
              event.preventDefault();
              const mark = HOTKEYS[hotkey];
              toggleMark(editor, mark);
            }
          }
        }}
      />
    </Slate>
  );
};

RichTextEditorComponent.propTypes = {
  /** Label for element */
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

RichTextEditorComponent.defaultProps = {
  label: '',
  onChange: () => {},
  placeholder: '',
  value: undefined
};

const RichTextEditorFormElement = withFormElement(RichTextEditorComponent);
RichTextEditorFormElement.displayName = 'RichTextEditor';

export default RichTextEditorFormElement;
