/** SimHub properties **/
const props = {
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
            limit: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.WeekendOptions.IncidentLimit'
        },
        lap: {
            limit: 'DataCorePlugin.GameRawData.Telemetry.SessionLapsTotal'
        },
        time: {
            remaining: 'DataCorePlugin.GameRawData.Telemetry.SessionTimeRemain',
        }
    },
    telemetry: {
        incident: {
            count: 'DataCorePlugin.GameRawData.Telemetry.PlayerCarMyIncidentCount'
        },
        lap: {
            number: 'DataCorePlugin.GameRawData.Telemetry.Lap',
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

/**
** Session data functions
**/

// Return the current session number (0 - x)
function pwxSessionNumber(){
    return _pwxInt($prop(props.session.number))
}

// Return the current session name (PRACTICE,TEST,QUALIFY,FORMATION_LAP,RACE,ATTACK)
function pwxSessionName(){
    return _pwxString($prop(props.session.name))
}

/** 
** Session helpers 
**/

// Boolean if session is testing
function pwxSessionIsTesting(){
    return (pwxSessionName() == 'TEST')
}

// Boolean if session is practice
function pwxSessionIsPractice(){
    return (pwxSessionName() == 'PRACTICE')
}

// Boolean if session is qualifying
function pwxSessionIsQualifying(){
    return (pwxSessionName() == 'QUALIFY')
}

// Boolean if session is formation lap
function pwxSessionIsFormation(){
    return (pwxSessionName() == 'FORMATION_LAP')
}

// Boolean if session is race
function pwxSessionIsRace(){
    return (pwxSessionName() == 'RACE')
}

// Boolean if session is time attack
function pwxSessionIsTimeAttack(){
    return (pwxSessionName() == 'ATTACK')
}