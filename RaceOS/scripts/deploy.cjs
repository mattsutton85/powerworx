// Copies the built bundle into the selected SimHub JavascriptExtensions folder.
// Deliberately requires an explicit path, so we don't guess the installation.
const fs = require('node:fs');
const path = require('node:path');

const source = path.resolve(__dirname, '..', 'dist', 'PWX-V2.js');
const targetDir = process.argv[2] || process.env.SIMHUB_EXTENSIONS;

if (!targetDir) {
    throw new Error('Specify the SimHub JavascriptExtensions folder as an argument or SIMHUB_EXTENSIONS.');
}
if (!fs.existsSync(source)) {
    throw new Error('Missing dist/PWX-V2.js. Run npm run build first.');
}
if (!fs.existsSync(targetDir) || !fs.statSync(targetDir).isDirectory()) {
    throw new Error(`Target folder does not exist: ${targetDir}`);
}

const destination = path.join(targetDir, 'PWX-V2.js');
fs.copyFileSync(source, destination);
console.log(`Deployed: ${destination}`);
