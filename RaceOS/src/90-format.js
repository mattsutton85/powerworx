/*
 * Presentation-only helpers. No telemetry reads in this file.
 */
PWX.format.engine.speed = function (speedMph) {
    return PWXNumber( speedMph, '---' )
};

PWX.format.engine.rpm = function (rpm) {
    return PWXNumber( rpm, '----' )
};

/*
* Utility functions
 */
function PWXNumber( number, fallback, decimals = 0 ) {
    if ( number === null || number === undefined ||
        number === '' || !isFinite(Number(number))) {
        return fallback;
    }
    return String(Math.round(Number(number)).toFixed(decimals));
}