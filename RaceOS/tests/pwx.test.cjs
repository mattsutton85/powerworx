// Tests run in Node, using a VM as a lightweight SimHub $prop mock.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const bundle = fs.readFileSync(path.resolve(__dirname, '..', 'dist', 'PWX-V2.js'), 'utf8');

function simulator(properties) {
    const context = {
        $prop: function (name) { return properties[name]; }
    };
    vm.createContext(context);
    vm.runInContext(bundle, context, { filename: 'PWX-V2.js' });
    return context;
}

test('defines a PWX namespace and expected version', function () {
    const sim = simulator({});
    assert.equal(sim.PWX.version, '2.0.0');
});

test('converts speed using the supplied SimHub property', function () {
    const sim = simulator({ 'DataCorePlugin.GameData.NewData.SpeedKmh': 100 });
    assert.equal(sim.PWX.telemetry.speedMph(), 62.137100000000004);
    assert.equal(sim.PWX.format.speed(sim.PWX.telemetry.speedMph()), '62');
});

test('handles unavailable telemetry without inventing zero', function () {
    const sim = simulator({});
    assert.equal(sim.PWX.telemetry.speedMph(), null);
    assert.equal(sim.PWX.format.speed(null), '---');
});

test('rejects invalid numeric telemetry', function () {
    const sim = simulator({ 'DataCorePlugin.GameData.NewData.SpeedKmh': 'not available' });
    assert.equal(sim.PWX.telemetry.speedMph(), null);
});
