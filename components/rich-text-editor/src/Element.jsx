/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'h1':
      return <h1 {...attributes}>{children}</h1>;
    case 'h2':
      return <h2 {...attributes}>{children}</h2>;
    case 'h3':
      return <h3 {...attributes}>{children}</h3>;
    case 'h4':
      return <h4 {...attributes}>{children}</h4>;
    case 'h5':
      return <h5 {...attributes}>{children}</h5>;
    case 'h6':
      return <h6 {...attributes}>{children}</h6>;
    case 'li':
      return <li {...attributes}>{children}</li>;
    case 'ul':
      return <ul {...attributes}>{children}</ul>;
    case 'ol':
      return <ol {...attributes}>{children}</ol>;
    case 'align-left':
      return (
        <p {...attributes} style={{ 'text-align': 'left' }}>
          {children}
        </p>
      );
    case 'align-center':
      return (
        <p {...attributes} style={{ 'text-align': 'center' }}>
          {children}
        </p>
      );
    case 'align-right':
      return (
        <p {...attributes} style={{ 'text-align': 'right' }}>
          {children}
        </p>
      );
    case 'align-justify':
      return (
        <p {...attributes} style={{ 'text-align': 'justify' }}>
          {children}
        </p>
      );
    case 'link':
      return (
        <a href={element.url} {...attributes}>
          {children}
        </a>
      );
    case 'image':
      // eslint-disable-next-line jsx-a11y/alt-text
      return <img {...attributes} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

Element.propTypes = {
  attributes: PropTypes.oneOfType([PropTypes.object]),
  element: PropTypes.shape({
    type: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

Element.defaultProps = {
  attributes: undefined
};

export default Element;
