/*
 * PWX Rig OS V2 - core
 * Runtime: SimHub Jint / ECMAScript 5.1
 * This is the ONLY source file that initializes the namespace.
 */
var PWX = {
    version: '2.0.0',
    core: {},
    telemetry: {},
    session: {},
    flags: {},
    timing: {},
    fuel: {},
    weather: {},
    format: {}
};

// Read properties at call time, not when the extension file is loaded.
PWX.core.read = function (propertyName) {
    var value = $prop(propertyName);
    return value == null ? null : value;
};

// Guard against unavailable, blank or non-numeric telemetry.
// This is deliberately simple; game-specific coercion can be added later.
PWX.core.number = function (propertyName) {
    var value = PWX.core.read(propertyName);
    if (value === null || value === '') {
        return null;
    }
    var number = Number(value);
    return isFinite(number) ? number : null;
};
