const fs = require('node:fs');
const path = require('node:path');
const acorn = require('acorn');

const root = path.resolve(__dirname, '..');

const src = path.join(root, 'src');
const dist = path.join(root, 'dist');

const manifest = JSON.parse(
    fs.readFileSync(
        path.join(root, 'build.manifest.json'),
        'utf8'
    )
);

// ---------------------------------------
// Helpers
// ---------------------------------------

function validateES5(source, filename) {
    try {
        acorn.parse(source, {
            ecmaVersion: 5,
            sourceType: 'script'
        });
    } catch (error) {
        throw new Error(
            `ES5 validation failed in ${filename}: ${error.message}`
        );
    }
}

function readSource(relative) {
    const source = fs.readFileSync(
        path.join(root, relative),
        'utf8'
    ).replace(/^\uFEFF/, '');

    const comments = [];

    // Let Acorn identify actual JavaScript comments
    acorn.parse(source, {
        ecmaVersion: 5,
        sourceType: 'script',
        onComment: (block, text, start, end) => {
            comments.push({ start, end });
        }
    });

    let output = source;

    // Work backwards to preserve character offsets
    for (let i = comments.length - 1; i >= 0; i--) {
        const { start, end } = comments[i];

        // Preserve line breaks and token separation
        const newlines = (
            source.slice(start, end).match(/\r\n|\r|\n/g) || []
        ).join('');

        output =
            output.slice(0, start) +
            ' ' + newlines +
            output.slice(end);
    }

    return output.trim();
}

// ---------------------------------------
// 1. Global core (manifest order)
// ---------------------------------------

if (!Array.isArray(manifest) || manifest.length === 0) {
    throw new Error(
        'Build manifest must contain an ordered list of core files.'
    );
}

const coreFiles = [];
const seen = new Set();

for (const relative of manifest) {
    if (
        typeof relative !== 'string' ||
        !/^src\/global\/core\/[A-Za-z0-9_.-]+\.js$/.test(relative)
    ) {
        throw new Error(`Invalid core file: ${String(relative)}`);
    }

    if (seen.has(relative)) {
        throw new Error(`Duplicate core file: ${relative}`);
    }

    seen.add(relative);
    coreFiles.push(relative);
}

// ---------------------------------------
// Add the formatter

coreFiles.push( 'src/global/format/PWX.format.js' );

// ---------------------------------------
// 2. Global data (auto-discovered)
// ---------------------------------------

const dataDir = path.join(src, 'global', 'data');

const dataFiles = fs.readdirSync(dataDir, {
    withFileTypes: true
})
    .filter(entry =>
        entry.isFile() &&
        /^PWX\.data\.[A-Za-z0-9_-]+\.js$/.test(entry.name)
    )
    .map(entry => `src/global/data/${entry.name}`)
    .sort();

// ---------------------------------------
// 3. Build global PWX bundle
// ---------------------------------------

const files = [...coreFiles, ...dataFiles];

const sections = [
    '/* GENERATED FILE - DO NOT EDIT */',
    '/* PWX RaceOS V2 | SimHub ES5 compliant */'
];

for (const relative of files) {
    const source = readSource(relative);

    sections.push(
        `\n;/* ===== ${relative} ===== */\n${source}\n`
    );
}

const output = sections.join('\n') + '\n';

validateES5(output, 'PWX-V2.js');

const globalDestination = path.join(
    dist, 'global', 'PWX-V2.js'
);

fs.mkdirSync(path.dirname(globalDestination), {
    recursive: true
});

fs.writeFileSync(globalDestination, output, 'utf8');

// ---------------------------------------
// 4. Copy system files recursively
// ---------------------------------------

const systemsSource = path.join(src, 'systems');
const systemsDestination = path.join(dist, 'systems');

let systemFileCount = 0;

function copyDirectory(source, destination) {
    fs.mkdirSync(destination, { recursive: true });

    const entries = fs.readdirSync(source, {
        withFileTypes: true
    }).sort((a, b) => a.name.localeCompare(b.name));

    for (const entry of entries) {
        const sourcePath = path.join(source, entry.name);
        const destinationPath = path.join(destination, entry.name);

        if (entry.isDirectory()) {
            copyDirectory(sourcePath, destinationPath);
        } else if (entry.isFile()) {

            // Validate system JavaScript too
            if (entry.name.endsWith('.js')) {
                const content = fs.readFileSync(sourcePath, 'utf8');
                validateES5(content, sourcePath);
            }

            fs.copyFileSync(sourcePath, destinationPath);
            systemFileCount++;
        } else {
            throw new Error(
                `Unsupported system entry: ${sourcePath}`
            );
        }
    }
}

if (fs.existsSync(systemsSource)) {
    copyDirectory(systemsSource, systemsDestination);
}

// ---------------------------------------
// 5. Summary
// ---------------------------------------

console.log('');
console.log('PWX RaceOS V2 - Build complete');
console.log('--------------------------------');
console.log(`Core modules: ${coreFiles.length}`);
console.log(`Data modules: ${dataFiles.length}`);
console.log(`System files: ${systemFileCount}`);
console.log('ES5 validation: passed');
console.log('');
console.log('Output: dist/');
