/* GENERATED FILE - DO NOT EDIT */
/* PWX RaceOS V2 | SimHub ES5 compliant */

;/* ===== src/global/core/PWX.core.js ===== */
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
            gearbox: {},
            throttle: {}
        },
        circuit: {
            pit: {}
        },
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


;/* ===== src/global/core/PWX.core.props.js ===== */
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
                percentage: 'DataCorePlugin.GameData.CarSettings_CurrentDisplayedRPMPercent',
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
            tc: {
                setting: 'DataCorePlugin.GameData.TCLevel',
            }
        },
        brake: {
            bias: 'DataCorePlugin.GameData.BrakeBias',
            percentage: 'DataCorePlugin.GameData.Brake',
        },
        gearbox: {
            gear: 'DataCorePlugin.GameData.Gear',
        },
        throttle: {
            percentage: 'DataCorePlugin.GameData.Throttle',
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


;/* ===== src/global/core/PWX.core.parse.js ===== */
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


;/* ===== src/global/format/PWX.format.js ===== */
PWX.format.number = function(value, decimals, placeholder) {
    decimals = decimals == null ? 0 : decimals;
    placeholder = placeholder == null ? '---' : placeholder;
    var number = PWX.parse.number(value);
    if (number === null) {
        return placeholder;
    }
    return number.toFixed(decimals);
};

 



PWX.format.time = function(value, placeholder) {
    placeholder = placeholder == null ? '--:--' : placeholder;
    var seconds = PWX.parse.number(value);
    if (seconds === null || seconds < 0) {
        return placeholder;
    }
    seconds = Math.floor(seconds);
    var h = Math.floor(seconds / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = seconds % 60;
    var pad = function(n) {
        return n < 10 ? '0' + n : String(n);
    };
    if (h > 0) {
        return h + ':' + pad(m) + ':' + pad(s);
    }
    return m + ':' + pad(s);
};

 


PWX.format.delta = function(value, decimals, placeholder) {
    decimals = decimals == null ? 3 : decimals;
    placeholder = placeholder == null ? '---' : placeholder;
    var number = PWX.parse.number(value);
    if (number === null) {
        return placeholder;
    }
    var absolute = Math.abs(number).toFixed(decimals);
    if (Number(absolute) === 0) {
        return absolute;
    }
    return (number > 0 ? '+' : '-') + absolute;
};


;/* ===== src/global/data/PWX.data.car.js ===== */
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
    var speed = _PWXCore.parse.number( _PWXCore.props.car.speedKmh )
    return speed === null ? null : speed * 0.621371;
}

PWX.data.car.engine.rpm.current = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.current )
}

PWX.data.car.engine.rpm.percent = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.percentage )
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

PWX.data.car.engine.oil.temperature = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.oil.temperature )
}

PWX.data.car.engine.oil.pressure = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.oil.pressure )
}

PWX.data.car.engine.water.temperature = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.water.temperature )
}

PWX.data.car.fuel.remaining.litres = function (){
    return _PWXCore.parse.number( _PWXCore.props.car.fuel.remaining.litres )
}

PWX.data.car.fuel.remaining.laps = function (){
    return _PWXCore.parse.number( _PWXCore.props.car.fuel.remaining.laps )
}

PWX.data.car.assists.abs.setting = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.assists.abs.setting )
}

PWX.data.car.assists.tc.setting = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.assists.tc.setting )
}

PWX.data.car.brake.bias = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.brake.bias )
}

PWX.data.car.brake.percentage = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.brake.percentage )
}

PWX.data.car.gearbox.gear = function(){
    return _PWXCore.parse.string( _PWXCore.props.car.gearbox.gear )
}

PWX.data.car.throttle.percentage = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.throttle.percentage )
}


;/* ===== src/global/data/PWX.data.circuit.js ===== */
PWX.data.circuit.id = function () {
    return _PWXCore.parse.string( _PWXCore.props.circuit.id )
}

PWX.data.circuit.name = function () {
    return _PWXCore.parse.string( _PWXCore.props.circuit.name )
}

PWX.data.circuit.length = function () {
    return _PWXCore.parse.string( _PWXCore.props.circuit.length )
}

PWX.data.circuit.corners = function () {
    return _PWXCore.parse.string( _PWXCore.props.circuit.corners )
}

PWX.data.circuit.pit.speed.kmh = function () {
    return _PWXCore.parse.number( _PWXCore.props.circuit.pit.speedKmh )
}

PWX.data.circuit.pit.speed.mph = function () {
    var speed = _PWXCore.parse.number( _PWXCore.props.circuit.pit.speedKmh )
    return speed === null ? null : speed * 0.621371;
}


;/* ===== src/global/data/PWX.data.driver.js ===== */



;/* ===== src/global/data/PWX.data.session.js ===== */


