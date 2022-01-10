/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const Leaf = ({ attributes, children, leaf }) => {
  let wrappedChild = children;
  if (leaf.bold) {
    wrappedChild = <strong>{wrappedChild}</strong>;
  }

  if (leaf.code) {
    wrappedChild = <code>{wrappedChild}</code>;
  }

  if (leaf.italic) {
    wrappedChild = <em>{wrappedChild}</em>;
  }

  if (leaf.underline) {
    wrappedChild = <u>{wrappedChild}</u>;
  }

  if (leaf.strikethrough) {
    wrappedChild = <del>{wrappedChild}</del>;
  }

  return <span {...attributes}>{wrappedChild}</span>;
};

Leaf.propTypes = {
  attributes: PropTypes.oneOfType([PropTypes.object]),
  leaf: PropTypes.shape({
    bold: PropTypes.bool,
    code: PropTypes.bool,
    italic: PropTypes.bool,
    strikethrough: PropTypes.bool,
    underline: PropTypes.bool
  }).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

Leaf.defaultProps = {
  attributes: undefined
};

export default Leaf;
