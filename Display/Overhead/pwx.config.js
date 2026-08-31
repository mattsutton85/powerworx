var pwx = pwx || {}
pwx.config = pwx.config || {}

pwx.config.data = {
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
        yellowWaving: 'DataCorePlugin.GameRawData.Telemetry.SessionFlagsDetails.IsyellowWaving',
    },
    theme: {
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
        purple: '#ff03f9',
        yellow: '#f7d00f',
        green: '#6cfc17',
    }
}

function _pwxProp( prop ){
    return $prop( prop )
}