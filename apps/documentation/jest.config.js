module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.jsx', '!src/**/*.styles.js', '!src/index.js'],
  moduleDirectories: ['node_modules'],
  rootDir: '../../components',
  testMatch: ["<rootDir>/**/*.unit.jsx"],
  modulePathIgnorePatterns: ['dist'],
  testEnvironment: "jsdom"
};
