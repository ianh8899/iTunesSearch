module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/../'],
    transform: {
        '^.+\\.js?$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};
