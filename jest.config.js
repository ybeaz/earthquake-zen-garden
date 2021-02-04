// jest.config.js
// const {defaults} = require('jest-config');

const jestConfig = {
  verbose: true,
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: [
    '**/?(*.)+(spec|test).[jt]s?(x)',
    '**/__tests__/*.js?(x)',
    '**/__tests__/*.js?(x)',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  resolver: null,
}

module.exports = jestConfig
