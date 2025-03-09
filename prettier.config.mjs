/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  arrowParens: 'always',
  endOfLine: 'lf',
  printWidth: 80,
  bracketSpacing: true,
  bracketSameLine: false,
  overrides: [
    {
      files: 'nothing-file.tsx',
      options: {
        printWidth: 200,
      },
    },
    {
      files: '*.tsx',
      options: {
        parser: 'babel-ts',
      },
    },
  ],
}

export default config
