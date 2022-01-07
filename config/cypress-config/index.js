module.exports = {
  // The following rules are not relevant to component testing so they're disabled
  componentRuleExclusions: {
    rules: [
      {
        id: 'html-has-lang',
        enabled: false
      },
      {
        id: 'landmark-one-main',
        enabled: false
      },
      {
        id: 'page-has-heading-one',
        enabled: false
      },
      {
        id: 'region',
        enabled: false
      }
    ]
  }
};
