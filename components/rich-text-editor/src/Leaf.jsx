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

  return <span {...attributes}>{wrappedChild}</span>;
};

Leaf.propTypes = {
  attributes: PropTypes.objectOf(PropTypes.string),
  leaf: PropTypes.objectOf({
    bold: PropTypes.bool,
    code: PropTypes.bool,
    italic: PropTypes.bool,
    underline: PropTypes.bool
  }).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

Leaf.defaultProps = {
  attributes: undefined
};

export default Leaf;
