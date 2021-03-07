// https://github.com/okonet/lint-staged
module.exports = {
  'src/**/*.{ts,tsx}': ['prettier --write', 'eslint --max-warnings=0'],
  'sample/src/**/*.{ts,tsx}': ['prettier --write', 'node scripts/eslint-sample-dir.js'],
}
