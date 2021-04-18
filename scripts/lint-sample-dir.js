const { execSync } = require('child_process');
const path = require('path');

const run = (cmd) => execSync(cmd, {
  stdio: [process.stdin, process.stdout, process.stderr],
  cwd: path.resolve(__dirname, '../sample'),
});

const filenames = process.argv.slice(2);
run(`npx prettier --write ${filenames.join(' ')}`);
run(`npx eslint --max-warnings=0 ${filenames.join(' ')}`);
