// Build-time Node.js code. This file is NOT included in the SimHub bundle.
const fs = require('node:fs');
const path = require('node:path');
const acorn = require('acorn');

const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'build.manifest.json'), 'utf8'));
const destination = path.join(root, 'dist', 'PWX-V2.js');

if (!Array.isArray(manifest) || manifest.length === 0) {
    throw new Error('build.manifest.json must contain an ordered list of source files.');
}

const seen = new Set();
const sections = [
    '/* GENERATED FILE - DO NOT EDIT. Edit src/ and run npm run build. */',
    '/* PWX Rig OS V2 | SimHub ECMAScript 5.1 */'
];

for (const relative of manifest) {
    if (typeof relative !== 'string' || !/^src\/[A-Za-z0-9_/-]+\.js$/.test(relative)) {
        throw new Error(`Invalid source manifest entry: ${String(relative)}`);
    }
    if (seen.has(relative)) {
        throw new Error(`Duplicate manifest entry: ${relative}`);
    }
    seen.add(relative);
    const filename = path.join(root, relative);
    const source = fs.readFileSync(filename, 'utf8').replace(/^\uFEFF/, '').trim();
    sections.push(`\n/* ===== ${relative} ===== */\n${source}\n`);
}

const output = sections.join('\n') + '\n';

// This actually enforces ES5 grammar; node --check by itself does NOT.
try {
    acorn.parse(output, { ecmaVersion: 5, sourceType: 'script' });
} catch (error) {
    throw new Error(`SimHub ES5 compatibility check failed: ${error.message}`);
}

fs.mkdirSync(path.dirname(destination), { recursive: true });
fs.writeFileSync(destination, output, 'utf8');
console.log(`Built ${path.relative(root, destination)} (${manifest.length} modules, ES5 validated)`);
