const path = require('path')

module.exports = {
    verbose: true,
    setupFilesAfterEnv: [ './jest.setup.js' ],
    roots: ["<rootDir>/src/__tests__/"],
    moduleFileExtensions: ['js', 'json', 'vue'],
    moduleNameMapper: {
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
        "\\.(css|less)$": "<rootDir>/mocks/fileMock.js",
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