import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transformIgnorePatterns: [
    '/node_modules/',
    '\\.(jpg|jpeg|png|gif|svg)$'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': "<rootDir>/fileMock.js"
  }
}

export default jestConfig