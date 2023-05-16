module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.js$': [
            'babel-jest',
            {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-modules-commonjs'],
            },
        ],
    }
}
