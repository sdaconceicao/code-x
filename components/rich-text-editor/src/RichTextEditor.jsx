import React, { useCallback, useMemo, useEffect, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import isHotkey from 'is-hotkey';
import { Editable, withReact, Slate } from 'slate-react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { withFormElement } from '@code-x/form-element';
import { required as requiredValidator, doValidate } from '@code-x/validators';
import Toolbar from './Toolbar';
import Element from './Element';
import Leaf from './Leaf';
import { deserialize, getPlainText, serialize, toggleMark, HOTKEYS } from './utils.js';
import useStyles from './RichTextEditor.styles';

export const RichTextEditorComponent = ({
  className,
  errors,
  innerRef,
  name,
  onChange,
  options,
  label,
  placeholder,
  required,
  value
}) => {
  const document = new DOMParser().parseFromString(value, 'text/html');
  const [localValue, setLocalValue] = useState(deserialize(document.body));
  const [localErrors, setLocalErrors] = useState(errors);
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const classes = useStyles({ errors: localErrors });
  const handleChange = (val) => {
    setLocalValue(val);
    onChange({ name, value: val });
  };

  const validate = () => {
    const serializedValue = serialize({ children: localValue });
    const response = doValidate(
      {
        name: label || name,
        value: getPlainText(serializedValue), // Check plaintext to avoid false pos from empty p
        required
      },
      [requiredValidator]
    );
    setLocalErrors(response.errors);
    return {
      ...response,
      value: serializedValue
    };
  };

  useEffect(() => {
    setLocalErrors(errors);
  }, [errors]);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useImperativeHandle(innerRef, () => ({
    doValidate: validate
  }));

  return (
    <div className={`${classes.rte} ${className}`} ref={innerRef}>
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
          onKeyDown={(event) => {
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
    </div>
  );
};

RichTextEditorComponent.propTypes = {
  /** Classname to override default element styling */
  className: PropTypes.string,
  /** Errors array from form validation */
  errors: PropTypes.instanceOf(Array),
  /** Ref for input */
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.shape({}) })
  ]),
  /** Label for element */
  label: PropTypes.string,
  /** Name for element */
  name: PropTypes.string.isRequired,
  /** Callback for change event */
  onChange: PropTypes.func,
  /** List of controls for editor */
  options: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node]))
  ),
  /** Placeholder text to display if value is empty */
  placeholder: PropTypes.string,
  /** Is element required */
  required: PropTypes.bool,
  /** Value of element */
  value: PropTypes.string
};

RichTextEditorComponent.defaultProps = {
  className: '',
  errors: undefined,
  innerRef: undefined,
  label: '',
  onChange: () => {},
  options: [
    ['bold', 'italic', 'underline', 'strikethrough', 'code'],
    ['ol', 'ul'],
    ['alignLeft', 'alignCenter', 'alignRight', 'alignJustify']
  ],
  placeholder: '',
  required: false,
  value: undefined
};

const RichTextEditorFormElement = withFormElement(RichTextEditorComponent);
RichTextEditorFormElement.displayName = 'RichTextEditor';

export default RichTextEditorFormElement;
