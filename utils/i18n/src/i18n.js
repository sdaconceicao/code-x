class I18n {
  constructor() {
    this.messages = {};
    this.locale = 'en';
  }

  /**
   * Add messages for a locale
   * @param {*} messages
   * @param {*} locale
   */
  setMessages = (messages) => {
    this.messages = { ...this.messages, ...messages };
  };

  /**
   * Set locale to use
   * @param {*} locale
   */
  setLocale = (locale) => {
    this.locale = locale;
  };

  /**
   * Get localized parameterized string
   * @param {*} key
   * @param {*} values
   * @returns
   */
  getMessage = (key, values) => this.generateString(this.findTemplate(key), values);

  /**
   * Find template string in messages object based on key
   * @param {*} key
   * @returns
   */
  findTemplate = (key) => {
    const keyDepth = key.split('.');
    let template;
    keyDepth.map((value) => {
      template = template ? template[value] : this.messages[value];
    });
    return template;
  };

  /**
   * Generate paramaterized string from template and values
   * @param {*} template
   * @param {*} values
   * @returns
   */
  generateString = (template, values) => {
    if (!template || template.indexOf('{') === -1 || !values) {
      return template;
    }
    let result = template;

    Object.keys(values).map((value) => {
      result = result.replace(`{${value}}`, values[value]);
    });

    return result;
  };
}
const instance = new I18n();
export default instance;
