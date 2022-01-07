import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from '@code-x/button';
import Buttons from './Buttons';
import useStyles from './Toolbar.styles';

const Toolbar = ({ options }) => {
  const classes = useStyles();
  return (
    <div className={classes.toolbar}>
      {options?.map((group) => (
        <ButtonGroup className={classes.controlGroup} key={group.toString()}>
          {group.map((item) => (typeof item === 'string' ? Buttons[item] : item))}
        </ButtonGroup>
      ))}
    </div>
  );
};

Toolbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node]))
  )
};

Toolbar.defaultProps = {
  options: undefined
};

export default Toolbar;
