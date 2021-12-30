import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './Toolbar.styles';

const Toolbar = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.toolbar}>{children}</div>
  );
};

Toolbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Toolbar;
