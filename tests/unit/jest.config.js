// @ts-check

const {dirname} = require('path');
const rootDir = dirname(require.resolve('../../package.json'));

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    rootDir,
    testMatch: ['<rootDir>/tests/unit/**/*.tests.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {'^.+\\.ts(x?)$': 'ts-jest'},
    globals: {
        'ts-jest': {tsconfig: '<rootDir>/tests/unit/tsconfig.json'},
        __MV3__: false,
        __DEBUG__: false,
        __TEST__: true,
    },
    setupFilesAfterEnv: ['jest-extended/all'],
};

module.exports = config;
