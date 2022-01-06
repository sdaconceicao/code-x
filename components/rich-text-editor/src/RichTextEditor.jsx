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
import { withFormElement } from '@code-x/form-element';
import Toolbar from './Toolbar';
import Element from './Element';
import Leaf from './Leaf';
import { deserialize, toggleMark, HOTKEYS } from './utils.js';
import useStyles from './RichTextEditor.styles';

export const RichTextEditorComponent = ({
  name, value, placeholder, onChange, options, label
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
      <Toolbar options={options} />
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
  /** List of controls for editor */
  options: PropTypes.arrayOf(PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  )),
  placeholder: PropTypes.string,
  value: PropTypes.string
};

RichTextEditorComponent.defaultProps = {
  label: '',
  onChange: () => {},
  options: [
    ['bold', 'italic', 'underline', 'strikethrough', 'code'],
    ['ol', 'ul'],
    ['alignLeft', 'alignCenter', 'alignRight', 'alignJustify']
  ],
  placeholder: '',
  value: undefined
};

const RichTextEditorFormElement = withFormElement(RichTextEditorComponent);
RichTextEditorFormElement.displayName = 'RichTextEditor';

export default RichTextEditorFormElement;
