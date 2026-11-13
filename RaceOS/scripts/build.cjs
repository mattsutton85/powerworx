
 // Build-time Node.js code. NOT included in the SimHub bundle.
const fs = require('node:fs');
const path = require('node:path');
const acorn = require('acorn');

const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(
    fs.readFileSync(
        path.join(root, 'build.manifest.json'),
        'utf8'
    )
);

const dataDir = path.join(root, 'src', 'data');
const destination = path.join(root, 'dist', 'PWX-V2.js');

// Validate core manifest
if (!Array.isArray(manifest) || manifest.length === 0) {
    throw new Error(
        'build.manifest.json must contain an ordered list of core files.'
    );
}

// Phase 1: Core files in manifest order
const coreFiles = manifest.map(relative => {
    if (
        typeof relative !== 'string' ||
        !/^src\/core\/[A-Za-z0-9_/-]+\.js$/.test(relative)
    ) {
        throw new Error(`Invalid core source: ${String(relative)}`);
    }

    return relative;
});

// Phase 2: Discover data files automatically
const dataFiles = fs.readdirSync(dataDir, {
    withFileTypes: true
})
    .filter(entry =>
        entry.isFile() &&
        /^PWX\.data\..+\.js$/.test(entry.name)
    )
    .map(entry => `src/data/${entry.name}`)
    .sort();

// Core always comes before data
const files = [...coreFiles, ...dataFiles];

const seen = new Set();
const sections = [
    '/* GENERATED FILE - DO NOT EDIT. */',
    '/* PWX Rig OS V2 | SimHub ECMAScript 5.1 */'
];

for (const relative of files) {
    if (seen.has(relative)) {
        throw new Error(`Duplicate source: ${relative}`);
    }

    seen.add(relative);

    const filename = path.join(root, relative);

    const source = fs.readFileSync(filename, 'utf8')
        .replace(/^\uFEFF/, '')
        .trim();

    sections.push(
        `\n/* ===== ${relative} ===== */\n${source}\n;`
    );
}

const output = sections.join('\n') + '\n';

// Validate SimHub ES5 compatibility
try {
    acorn.parse(output, {
        ecmaVersion: 5,
        sourceType: 'script'
    });
} catch (error) {
    throw new Error(
        `SimHub ES5 compatibility check failed: ${error.message}`
    );
}

fs.mkdirSync(path.dirname(destination), {
    recursive: true
});

fs.writeFileSync(destination, output, 'utf8');

console.log(`Built ${path.relative(root, destination)}`);
console.log(`  Core modules: ${coreFiles.length}`);
console.log(`  Data modules: ${dataFiles.length}`);
console.log(`  Total: ${files.length} (ES5 validated)`);
