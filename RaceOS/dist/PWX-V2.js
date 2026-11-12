/* GENERATED FILE - DO NOT EDIT. Edit src/ and run npm run build. */
/* PWX Rig OS V2 | SimHub ECMAScript 5.1 */

/* ===== src/00-core.js ===== */
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


/* ===== src/10-telemetry.js ===== */
/*
 * Raw and normalized telemetry accessors.
 * Depends on PWX.core from 00-core.js.
 */
PWX.telemetry.speedMph = function () {
    var kmh = PWX.core.number('DataCorePlugin.GameData.NewData.SpeedKmh');
    return kmh === null ? null : kmh * 0.621371;
};


/* ===== src/20-session.js ===== */
/*
 * Session information: practice, qualifying, race, transitions.
 * TODO: Choose and verify SimHub/iRacing properties before implementing.
 * Keep functions stateless unless they receive explicit inputs.
 */


/* ===== src/30-flags.js ===== */
/*
 * Flag interpretation and display priority.
 * TODO: Capture live raw flag properties and define tested masks/precedence.
 * Do not assume our old V1 bitmasks still reflect the telemetry source.
 */


/* ===== src/40-timing.js ===== */
/*
 * On-track relatives, standings, lap and gap information.
 * TODO: Distinguish iRacing F3 relative, on-track gap, position gap.
 * Avoid introducing smoothing until the raw source has been verified.
 */


/* ===== src/50-fuel.js ===== */
/*
 * Fuel consumption and forecasts.
 * TODO: Design pure calculations that accept inputs when possible.
 */


/* ===== src/60-weather.js ===== */
/*
 * Rain risk, track conditions and future weather context.
 * TODO: Inspect available iRacing/SimHub data before implementation.
 */


/* ===== src/90-format.js ===== */
/*
 * Presentation-only helpers. No telemetry reads in this file.
 */
PWX.format.speed = function (speedMph) {
    if (speedMph === null || speedMph === undefined ||
            speedMph === '' || !isFinite(Number(speedMph))) {
        return '---';
    }
    return String(Math.round(Number(speedMph)));
};

