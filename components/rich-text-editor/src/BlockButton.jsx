import React from 'react';
import PropTypes from 'prop-types';
import { useSlate } from 'slate-react';
import { Button } from '@code-x/button';
import { isBlockActive, toggleBlock } from './utils.js';

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      kind="secondary"
      display="inline"
      title={format}
      active={isBlockActive(editor, format)}
      onMouseDown={(e) => {
        e.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {icon}
    </Button>
  );
};

BlockButton.propTypes = {
  format: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default BlockButton;
