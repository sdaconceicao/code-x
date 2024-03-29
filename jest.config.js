module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/**/*.{js,jsx}',
    '!<rootDir>/**/documentation/**/*.{js,jsx}',
    '!<rootDir>/docs/**/*.{js,jsx}'
  ],
  moduleDirectories: ['node_modules'],
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/*.unit.test.{js,jsx}'],
  modulePathIgnorePatterns: ['dist'],
  testEnvironment: 'jsdom'
};
