var pwx = pwx || {}
pwx.config = pwx.config || {}

pwx.config = {
    car: {
        id: '',
        class: '',
        model: 'DataCorePlugin.GameData.CarModel',
        brake: {
            bias: '',
            abs: {
                fitted: '',
                active: '',
                setting: ''
            }
        },
        engine: {
            rpm: 'DataCorePlugin.GameData.Rpms',
            speed: {
                kmh: 'DataCorePlugin.GameData.Speed',
                mph: 'DataCorePlugin.GameData.Speed',
            },
            map: '',
            tc: {
                fitted: '',
                active: '',
                setting: ''
            }
        },
        gearbox: {
            gear: 'DataCorePlugin.GameData.Gear'
        }
    },
    circuit: {
        id: '',
        name: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackDisplayName',
        length: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackLength',
        corners: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackNumTurns',
        pit: {
            limit: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackPitSpeedLimit'
        }
    },
    driver: {
        id: '',
        name: 'DataCorePlugin.GameData.PlayerName',
        iRating: '',
        position: 'DataCorePlugin.GameRawData.Telemetry.PlayerCarPosition',
        incidents: 'DataCorePlugin.GameRawData.SessionData.DriverInfo.DriverIncidentCount'
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
    },
    lap: {
        number: 'DataCorePlugin.GameRawData.Telemetry.Lap',
        time: {
            best: 'DataCorePlugin.GameRawData.Telemetry.LapBestLapTime',
            last: 'DataCorePlugin.GameRawData.Telemetry.LapLastLapTime',
            allTime: ''
        },
        delta: {
            best: 'DataCorePlugin.GameRawData.Telemetry.LapDeltaToBestLap',
            last: 'DataCorePlugin.GameRawData.Telemetry.LapLastLapTime',
            allTime: ''
        }
    },
    opponent: {
        id: '',
        name: 'PersistantTrackerPlugin.Driver{X}_{Y}_Name',
        iRating: 'PersistantTrackerPlugin.Driver{X}_{Y}_IRating',
        position: 'PersistantTrackerPlugin.Driver{X}_{Y}_Position',
        gap: 'PersistantTrackerPlugin.Driver{X}_{Y}_Gap',
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
    }
}

function _pwxProp(prop, x, y, z) {
    if (x !== null && x !== undefined) {
        prop = prop.split('{X}').join(String(x));
    }
    if (y !== null && y !== undefined) {
        prop = prop.split('{Y}').join(String(y));
    }
    if (z !== null && z !== undefined) {
        prop = prop.split('{Z}').join(String(z));
    }
    return $prop(prop);

}