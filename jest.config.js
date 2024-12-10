module.exports = {
  "preset": "ts-jest/presets/default-esm",
  roots: ['./test', './src'],
  globals: {
    'ts-jest': {
      tsconfig: './src/tsconfig.json',
      "useESM": true
    },
  },
};
