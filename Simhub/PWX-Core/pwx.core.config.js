var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.core.config = pwx.core.config || {}

pwx.core.config = {
    car: {
        id: '',
        class: '',
        model: 'DataCorePlugin.GameData.CarModel',
        brake: {
            bias: 'DataCorePlugin.GameData.BrakeBias',
            abs: {
                fitted: 'TODO',
                active: 'TODO',
                setting: 'TODO'
            }
        },
        engine: {
            rpm: {
                current: 'DataCorePlugin.GameData.Rpms',
                idle: 'DataCorePlugin.GameRawData.SessionData.DriverInfo.DriverCarIdleRPM',
                max: 'DataCorePlugin.GameData.CarSettings_MaxRPM',
                redline: 'GameData.CarSettings_RedlineRPM'
            },
            rpmIdle: 'DataCorePlugin.GameRawData.SessionData.DriverInfo.DriverCarIdleRPM',
            speed: {
                kmh: 'DataCorePlugin.GameData.SpeedKmh',
                mph: 'DataCorePlugin.GameData.SpeedMph',
            },
            map: 'TODO'
        },
        tc: {
            fitted: 'TODO',
            active: 'TODO',
            setting: 'TODO'
        },
        gearbox: {
            gear: 'DataCorePlugin.GameData.Gear',
            shift: {
                first: 'DataCorePlugin.GameRawData.Telemetry.PlayerCarSLFirstRPM',
                point: 'DataCorePlugin.GameRawData.Telemetry.PlayerCarSLShiftRPM',
                last: 'DataCorePlugin.GameRawData.Telemetry.PlayerCarSLLastRPM',
                blink: 'DataCorePlugin.GameRawData.Telemetry.PlayerCarSLBlinkRPM'
            }
        },
        tyre: {
            compound: 'TODO',
            temperature: {
                frontLeft: 'DataCorePlugin.GameData.TyreTemperatureFrontLeft',
                frontRight: 'DataCorePlugin.GameData.TyreTemperatureFrontRight',
                rearLeft: 'DataCorePlugin.GameData.TyreTemperatureRearLeft',
                rearRight: 'DataCorePlugin.GameData.TyreTemperatureRearRight'
            }
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
        iRating: ''
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
            allTime: 'TODO'
        },
        delta: {
            best: 'DataCorePlugin.GameRawData.Telemetry.LapDeltaToBestLap',
            last: 'DataCorePlugin.GameRawData.Telemetry.LapLastLapTime',
            allTime: 'TODO'
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
        position: 'DataCorePlugin.GameRawData.Telemetry.PlayerCarPosition',
        incident: {
            count: 'DataCorePlugin.GameRawData.SessionData.DriverInfo.DriverIncidentCount',
            limit: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.WeekendOptions.IncidentLimit'
        },
        lap: {
            limit: 'DataCorePlugin.GameRawData.Telemetry.SessionLapsTotal'
        },
        time: {
            remaining: 'DataCorePlugin.GameRawData.Telemetry.SessionTimeRemain',
        }
    },
    pit: {
        limiter: 'DataCorePlugin.GameData.PitLimiterOn',
        inPit: 'DataCorePlugin.GameData.IsInPit',
    },
    theme: {
        colour: {
            red: '#ff000d',
            yellow: '#ffda00',
            orange: '#ff6700',
            green: '#6cfc17',
            purple: '#d300ff',
            transparent: 'Transparent'
        }
    },
    assumption: {
        gt4: {
            tyre: {
                dry:{
                    temperature: {
                        warm: 50,
                        ready: 65,
                        hot: 96,
                        overheat: 105
                    }
                }
            }
        },
        tcr: {
            tyre: {
                dry:{
                    temperature: {
                        warm: 45,
                        ready: 60,
                        hot: 91,
                        overheat: 100
                    }
                }
            }
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