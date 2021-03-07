const child_process = require('child_process');
const run = (cmd) => child_process.execSync(cmd, {cwd: 'sample', stdio: [process.stdin, process.stdout, process.stderr]});

const filenames = process.argv.slice(2);
run(`npx eslint --resolve-plugins-relative-to=. --max-warnings=0 ${filenames.join(' ')}`);
