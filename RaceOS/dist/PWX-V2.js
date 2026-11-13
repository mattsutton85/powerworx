/* GENERATED FILE - DO NOT EDIT. Edit src/ and run npm run build. */
/* PWX Rig OS V2 | SimHub ECMAScript 5.1 */

/* ===== src/core/PWX.core.js ===== */
var PWX = {
    data: {
        car: {
            speed: {},
            engine: {
                rpm: {
                    current: {}
                },
                oil: {},
                water: {}
            },
            brake: {},
            assists: {},
            fuel: {
                remaining: {}
            },
        },
        circuit: {},
        driver: {},
        session: {}
    },
    format: {}
}

var _PWXCore = {
    parse: {}
}

_PWXCore.read = function( property ){
    var value = $prop( property );
    return value == null ? null : value;
}


/* ===== src/core/PWX.core.props.js ===== */
_PWXCore.props = {
    car: {
        id: 'DataCorePlugin.GameData.CarID',
        class: 'DataCorePlugin.GameData.CarClass',
        model: 'DataCorePlugin.GameData.CarModel',
        speedKmh: 'DataCorePlugin.GameData.SpeedKmh',
        engine: {
            rpm: {
                current: 'DataCorePlugin.GameData.Rpms',
                idle: 'DataCorePlugin.GameRawData.SessionData.DriverInfo.DriverCarIdleRPM',
                max: 'DataCorePlugin.GameData.CarSettings_MaxRPM',
                redline: 'DataCorePlugin.GameData.CarSettings_CurrentGearRedLineRPM',
                percent: 'DataCorePlugin.GameData.CarSettings_CurrentDisplayedRPMPercent',
            },
            oil: {
                temperature: 'DataCorePlugin.GameData.OilTemperature',
                pressure: 'DataCorePlugin.GameData.OilPressure',
            },
            water: {
                temperature: 'DataCorePlugin.GameData.WaterTemperature',
            },

        },
        fuel: {
            remaining: {
                litres: 'DataCorePlugin.GameData.Fuel',
                laps: 'DataCorePlugin.Computed.Fuel_RemainingLaps',
            },
            pressure: 'DataCorePlugin.GameRawData.Telemetry.FuelPress',
        },
        assists: {
            abs: {
                setting: 'DataCorePlugin.GameData.ABSLevel',
            },
            tractionControl: {
                setting: 'DataCorePlugin.GameData.TCLevel',
            }
        },
        brake: {
            bias: 'DataCorePlugin.GameData.BrakeBias',
            percent: 'DataCorePlugin.GameData.Brake',
        },
        gearbox: {
            gear: 'DataCorePlugin.GameData.Gear',
        },
        throttle: {
            percent: 'DataCorePlugin.GameData.Throttle',
        }
    },
    circuit: {
        id: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackID',
        name: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackDisplayName',
        length: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackLength',
        corners: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackNumTurns',
        pit: {
            speedKmh: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackPitSpeedLimit'
        }
    },
    driver: {
        name: 'DataCorePlugin.GameData.PlayerName'
    },
    incident: {
        count: 'DataCorePlugin.GameRawData.Telemetry.PlayerCarMyIncidentCount',
        limit: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.WeekendOptions.IncidentLimit'
    },
    flag: {
        black: 'DataCorePlugin.GameRawData.Telemetry.SessionFlagsDetails.IsBlack',
        blue: 'DataCorePlugin.GameRawData.Telemetry.SessionFlagsDetails.Isblue',
        caution: 'DataCorePlugin.GameRawData.Telemetry.SessionFlagsDetails.Iscaution',
        cautionWaving: 'DataCorePlugin.GameRawData.Telemetry.SessionFlagsDetails.IscautionWaving',
        checkered: 'DataCorePlugin.GameRawData.Telemetry.SessionFlagsDetails.Ischeckered',
        crossed: 'DataCorePlugin.GameRawData.Telemetry.SessionFlagsDetails.Iscrossed',
        debris: 'DataCorePlugin.GameRawData.Telemetry.SessionFlagsDetails.Isdebris',
        disqualify: 'DataCorePlugin.GameRawData.Telemetry.SessionFlagsDetails.Isdisqualify',
        lapToGreen: 'DataCorePlugin.GameRawData.Telemetry.SessionFlagsDetails.IsoneLapToGreen',
        red: 'DataCorePlugin.GameRawData.Telemetry.SessionFlagsDetails.Isred',
        repair: 'DataCorePlugin.GameRawData.Telemetry.SessionFlagsDetails.Isrepair',
        white: 'DataCorePlugin.GameRawData.Telemetry.SessionFlagsDetails.Iswhite',
        yellow: 'DataCorePlugin.GameRawData.Telemetry.SessionFlagsDetails.IsYellow',
        yellowWaving: 'DataCorePlugin.GameRawData.Telemetry.SessionFlagsDetails.IsyellowWaving'
    }
}


/* ===== src/core/PWX.core.parse.js ===== */
/*
Simple data parser
 */

_PWXCore.parse.number = function( property ){
    var value = _PWXCore.read( property );
    if (value === null || value === '') {
        return null;
    }
    var number = Number(value);
    return isFinite(number) ? number : null;
}

_PWXCore.parse.string = function( property ){
    return String( _PWXCore.read( property ) )
}


/* ===== src/data/PWX.data.car.js ===== */
/*
Raw car telemetry
 */

PWX.data.car.id = function () {
    return _PWXCore.parse.string( _PWXCore.props.car.id )
}

PWX.data.car.model = function(){
    return _PWXCore.parse.string( _PWXCore.props.car.model )
}

PWX.data.car.class = function(){
    return _PWXCore.parse.string( _PWXCore.props.car.class )
}

PWX.data.car.speed.kph = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.speedKmh )
}

PWX.data.car.speed.mph = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.speedKmh ) === null ? null : value * 0.621371;
}

PWX.data.car.engine.rpm.current.value = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.current )
}

PWX.data.car.engine.rpm.current.percent = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.percent )
}

PWX.data.car.engine.rpm.idle = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.idle )
}

PWX.data.car.engine.rpm.max = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.max )
}

PWX.data.car.engine.rpm.redline = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.redline )
}


/* ===== src/data/PWX.data.circuit.js ===== */



/* ===== src/data/PWX.data.driver.js ===== */



/* ===== src/data/PWX.data.session.js ===== */


