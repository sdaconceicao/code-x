import React from 'react';
import PropTypes from 'prop-types';
import { useSlate } from 'slate-react';
import { Button } from '@code-x/button';
import {
  isMarkActive, toggleMark
} from './utils.js';

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      kind="secondary"
      display="inline"
      title={format}
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {icon}
    </Button>
  );
};

MarkButton.propTypes = {
  format: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default MarkButton;
