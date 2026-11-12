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