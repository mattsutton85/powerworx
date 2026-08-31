var pwx = pwx || {}
pwx.data = pwx.data || {}

pwx.data.car = pwx.data.car || {}
pwx.data.circuit = pwx.data.circuit || {}
pwx.data.session = pwx.data.session || {}
pwx.data.session.lap = pwx.data.session.lap || {}
pwx.data.session.incident = pwx.data.session.incident || {}
pwx.data.session.time = pwx.data.session.time || {}
pwx.data.telemetry = pwx.data.telemetry || {}
pwx.data.telemetry.lap = pwx.data.telemetry.lap || {};
pwx.data.telemetry.lap.best = pwx.data.telemetry.lap.best || {};
pwx.data.telemetry.lap.last = pwx.data.telemetry.lap.last || {};

const dataProps = {
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
                delta: 'DataCorePlugin.GameRawData.Telemetry.LapDeltaToSessionLastlLap'
            }
        },
        position: 'DataCorePlugin.GameRawData.Telemetry.PlayerCarPosition'
    }
}

/** CAR DATA **/
pwx.data.car.model = function(){
    return _pwxString( _pwxProp( pwx.config.data.car.model ) )
}

/** CIRCUIT DATA **/
pwx.data.circuit.name = function(){
    return _pwxString( _pwxProp( pwx.config.data.circuit.name ) )
}

/** SESSION DATA **/
pwx.data.session.name = function(){
    return _pwxString( _pwxProp( pwx.config.data.session.name ) )
}
pwx.data.session.number = function(){
    return _pwxNumber( _pwxProp( pwx.config.data.session.number ) )
}
pwx.data.session.isPractice = function(){
    return ( [ 'Practice' ].includes( _pwxProp( pwx.config.data.session.name ) ) )
}
pwx.data.session.isQualifying = function(){
    return ( [ 'Lone Qualify' ].includes( _pwxProp( pwx.config.data.session.name ) ) )
}
pwx.data.session.isRace = function(){
    return ( [ 'Race' ].includes( _pwxProp( pwx.config.data.session.name ) ) )
}
pwx.data.session.incident.count = function(){
    return _pwxNumber( _pwxProp( pwx.config.data.session.incident.count ) )
}
pwx.data.session.incident.limit = function(){
    return _pwxNumber( _pwxProp( pwx.config.data.incident.limit ) )
}
pwx.data.session.lap.number = function(){
    const lap = _pwxProp( pwx.config.data.session.lap.number )
    if( lap <= 0 )
        return '-'
    return _pwxNumber( _pwxProp( pwx.config.data.session.lap.number ) )
}
pwx.data.session.time.remaining = function(){
    return _pwxProp( pwx.config.data.session.time.remaining)
}

/** TELEMETRY DATA **/
pwx.data.telemetry.position = function(){
    const pos = _pwxProp( pwx.config.data.telemetry.position )
    if( pos <= 0 )
        return '-'
    return _pwxNumber( pos )
}
pwx.data.telemetry.lap.last.time = function(){
    return _pwxProp( pwx.config.data.telemetry.lap.last.time)
}
pwx.data.telemetry.lap.last.delta = function(){
    return _pwxProp( pwx.config.data.telemetry.lap.last.delta)
}
pwx.data.telemetry.lap.best.time = function(){
    return _pwxProp( pwx.config.data.telemetry.lap.best.time)
}
pwx.data.telemetry.lap.best.delta = function(){
    return _pwxProp( pwx.config.data.telemetry.lap.best.delta)
}