// https://github.com/okonet/lint-staged
module.exports = {
  'src/**/*.{ts,tsx}': ['prettier --write', 'eslint --max-warnings=0'],
  '../sample/src/**/*.{ts,tsx}': ['node ../scripts/lint-sample-dir.js'],
}
