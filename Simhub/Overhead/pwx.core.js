/*
Simhub data props
 */
const props = {
    car: {
        model: 'DataCorePlugin.GameData.CarModel'
    },
    circuit: {
        name: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackDisplayName',
        layout: {
            name: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackDisplayShortName',
            length: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackLength',
            corners: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackNumTurns'
        },
        pit: {
            limit: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackPitSpeedLimit'
        }
    },
    session: {
        name: 'DataCorePlugin.GameData.SessionTypeName',
        number: 'DataCorePlugin.GameRawData.Telemetry.SessionNum',
        incident: {
            count: 'DataCorePlugin.GameRawData.SessionData.DriverInfo.DriverIncidentCount',
            limit: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.WeekendOptions.IncidentLimit'
        },
        lap: {
            number: 'DataCorePlugin.GameRawData.Telemetry.Lap',
            limit: 'DataCorePlugin.GameRawData.Telemetry.SessionLapsTotal'
        },
        time: {
            remaining: 'DataCorePlugin.GameRawData.Telemetry.SessionTimeRemain',
        }
    },
    telemetry: {
        lap: {
            best: {
                time: 'DataCorePlugin.GameRawData.Telemetry.LapBestLapTime',
                delta: 'DataCorePlugin.GameRawData.Telemetry.LapDeltaToBestLap'
            },
            last: {
                time: 'DataCorePlugin.GameRawData.Telemetry.LapLastLapTime',
                delta: 'DataCorePlugin.GameRawData.Telemetry.LapDeltaToLastLap'
            }
        },
        position: 'DataCorePlugin.GameRawData.Telemetry.PlayerCarPosition'
    }
}

/*
Theme colours
 */
const theme = {
    background: {
        base: '#000000',
        warning: '#f7d00f',
        danger: '#f43111',
        purple: '#000000'
    },
    label: {
        base: '#bababa',
        warning: '#000000',
        danger: '#ffffff',
        purple: '#bababa'
    },
    value: {
        base: '#ffffff',
        warning: '#000000',
        danger: '#ffffff',
        purple: 'Purple'
    }
}

/*
Car data
*/

function pwxDataCarModel(){
    return _pwxString($prop(props.car.model))
}

/*
Circuit data
*/
function pwxDataCircuitName(){
    return _pwxString($prop(props.circuit.name))
}

/*
Session bools
 */
function pwxBoolSessionIsPractice(){
    return ($prop(props.session.name) === 'Practice')
}
function pwxBoolessionIsQualifying(){
    return ($prop(props.session.name) === 'Lone Qualify')
}
function pwxBoolSessionIsRace(){
    return ($prop(props.session.name) === 'Race')
}

/*
Session data
 */
function pwxDataSessionName(){
    return _pwxString($prop(props.session.name))
}
function pwxDataSessionIncidentCount(){
    return _pwxNumber($prop(props.session.incident.count))
}
function pwxDataSessionIncidentLimit(){
    return _pwxNumber($prop(props.session.incident.limit))
}
function pwxDataSessionLapNumber(){
    const num = $prop(props.session.lap.number)
    if( num !== 0 )
        return _pwxNumber(num)
    return '-'
}
function pwxDataSessionLapLimit(){
    return _pwxNumber($prop(props.session.lap.limit))
}
function pwxDataSessionLapRemaining(){
    return _pwxNumber(pwxDataSessionLapLimit() - pwxDataSessionLapNumber(), '-')
}
function pwxDataSessionTimeRemaining(){
    return _pwxTime($prop(props.session.time.remaining), 'SESSION')
}

/*
Telemetry data
 */

// Current position
function pwxDataTelemetryPosition(){
    const pos = $prop(props.telemetry.position)
    if( pos !== 0 )
        return _pwxNumber(pos, '-')
    return '-'
}

// Best sesstion lap time
function pwxDataTelemetryLapBestTime(){
    return _pwxTime($prop(props.telemetry.lap.best.time), 'LAP')
}

// Best session lap time delta
function pwxDataTelemetryLapBestDelta(){
    return _pwxTime($prop(props.telemetry.lap.best.delta), 'DELTA')
}

// Last session lap time
function pwxDataTelemetryLapLastTime(){
    return _pwxTime($prop(props.telemetry.lap.last.time), 'LAP')
}

// Last session lap time delta
function pwxDataTelemetryLapLastDelta(){
    return _pwxTime($prop(props.telemetry.lap.best.delta), 'DELTA')
}

/*
Contextual colour
 */
function pwxUiContextualColour( element, state ) {
    return _pwxUiColour( theme, element, state );
}

function pwxUiIncidentCount( element ){
    const limit = pwxDataSessionIncidentLimit()
    const current = pwxDataSessionIncidentCount()
    const thresholds = {
        warning: 1,
        danger: (!limit || isNaN(limit) || limit === 0) ? 10 : Math.round( limit * 0.75 )
    }
    if( current >= thresholds.warning && current <= thresholds.danger ){
        return _pwxUiColour( theme, element, 'warning' )
    }else if( current >= thresholds.danger){
        return _pwxUiColour( theme, element, 'danger' )
    }
    return _pwxUiColour( theme, element, 'base' )
}