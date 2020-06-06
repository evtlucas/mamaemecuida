const path = require('path')

module.exports = {
    verbose: true,
    roots: ["<rootDir>/src/__tests__/"],
    moduleFileExtensions: ['js', 'json', 'vue'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    transformIgnorePatterns: ["/node_modules/"],
    snapshotSerializers: [
        "<rootDir>/node_modules/jest-serializer-vue"
    ],
    modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
    testPathIgnorePatterns: [
        '/build/',
        '/config/',
        '/data/',
        '/dist/',
        '/node_modules/',
        '/test/',
        '/vendor/'
    ]
}