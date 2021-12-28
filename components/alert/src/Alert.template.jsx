import React from 'react';
import { Alert as AlertCompontent } from './index';

export default {
  component: AlertCompontent
};

export const Alert = (args) => (
  <AlertCompontent {...args} />
);
