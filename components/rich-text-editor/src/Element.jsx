import React from 'react';
import PropTypes from 'prop-types';

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>;
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>;
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>;
    case 'heading-three':
      return <h3 {...attributes}>{children}</h3>;
    case 'heading-four':
      return <h4 {...attributes}>{children}</h4>;
    case 'heading-five':
      return <h5 {...attributes}>{children}</h5>;
    case 'heading-six':
      return <h6 {...attributes}>{children}</h6>;
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>;
    case 'align-left':
      return <p {...attributes} style={{ 'text-align': 'left' }}>{children}</p>;
    case 'align-center':
      return <p {...attributes} style={{ 'text-align': 'center' }}>{children}</p>;
    case 'align-right':
      return <p {...attributes} style={{ 'text-align': 'right' }}>{children}</p>;
    case 'align-justify':
      return <p {...attributes} style={{ 'text-align': 'justify' }}>{children}</p>;
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
