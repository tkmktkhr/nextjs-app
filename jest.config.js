/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const customJestConfig = {
  collectCoverageFrom: ['**/*.{js,ts,jsx,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  modulePaths: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  rootDir: './',
  roots: ['<rootDir>/src'],
  setupFiles: ['dotenv/config'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['node_modules/', 'coverage/', '.next/'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};

module.exports = createJestConfig(customJestConfig);
