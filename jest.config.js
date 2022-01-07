module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/**/*.{js,jsx}', '!<rootDir>/**/documentation/**/*.{js,jsx}'],
  moduleDirectories: ['node_modules'],
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/*.unit.{js,jsx}'],
  modulePathIgnorePatterns: ['dist'],
  testEnvironment: 'jsdom'
};
