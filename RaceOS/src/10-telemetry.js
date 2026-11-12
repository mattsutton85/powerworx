/*
 * Raw and normalized telemetry accessors.
 * Depends on PWX.core from 00-core.js.
 */
PWX.telemetry.speedMph = function () {
    var kmh = PWX.core.number( PWX.props.engine.speed.kmh );
    return kmh === null ? null : kmh * 0.621371;
};

PWX.telemetry.gear = function () {
    return PWX.core.read( PWX.props.engine.gearbox.gear )
}
