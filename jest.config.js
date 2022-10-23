/** @type {import('ts-jest').JestConfigWithTsJest} */
const jestConfig = {
    testEnvironment: 'node',
    verbose: true,
    preset: 'ts-jest/presets/default-esm',
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.json',
                useESM: true,
            },
        ],
    },
    moduleNameMapper: {
        '@lirbus/*': '<rootDir>/lib/$1',
    },
};

export default jestConfig;
