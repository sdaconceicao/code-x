import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import { FormattedMessage } from 'react-intl'
import useStyles from './Label.styles';

const Label = ({
  required, children, optional, htmlFor, inline
}) => {
  const theme = useTheme();
  const classes = useStyles({ inline, ...theme });
  return (
    <label htmlFor={htmlFor} className={classes.label}>
      <span className={classes.content}>{children}</span>
      {required && <span className={classes.required}>*</span>}
      {optional && <span className={classes.optional}>
        <FormattedMessage id="optional" />
      </span>}
    </label>
  );
};

Label.propTypes = {
  required: PropTypes.bool,
  children: PropTypes.string.isRequired,
  optional: PropTypes.bool,
  inline: PropTypes.bool,
  htmlFor: PropTypes.string
};

Label.defaultProps = {
  required: false,
  optional: false,
  inline: false,
  htmlFor: undefined
};

export default Label;
