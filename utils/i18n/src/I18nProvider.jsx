import React from 'react';
import PropTypes from 'prop-types';
import I18nContext from './I18nContext';
import i18n from './i18n';

const I18nProvider = ({ children, messages, locale }) => {
  i18n.setLocale(locale);
  i18n.setMessages(messages);
  return (
    <I18nContext.Provider value={{ i18n }} key={locale}>
      {children}
    </I18nContext.Provider>
  );
};

I18nProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  messages: PropTypes.shape({}).isRequired,
  /** Locale string to use */
  locale: PropTypes.string.isRequired
};

export default I18nProvider;
