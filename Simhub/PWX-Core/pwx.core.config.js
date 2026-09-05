var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.core.config = pwx.core.config || {}

pwx.core.config = {
    car: {
        id: 'DataCorePlugin.GameData.CarID',
        class: 'DataCorePlugin.GameData.CarClass',
        model: 'DataCorePlugin.GameData.CarModel',
        brake: {
            bias: 'DataCorePlugin.GameData.BrakeBias',
            abs: {
                active: 'DataCorePlugin.GameRawData.Telemetry.BrakeABSactive',
                setting: 'DataCorePlugin.GameRawData.Telemetry.dcABS'
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
            }
        },
        tc: {
            active: 'TODO',
            setting: 'DataCorePlugin.GameData.TCLevel'
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
            type: 'DataCorePlugin.GameRawData.SessionData.CarSetup.Tires.TireType.TireType',
            temperature: {
                fl: {
                    left: 'DataCorePlugin.GameRawData.Telemetry.LFtempCL',
                    center: 'DataCorePlugin.GameRawData.Telemetry.LFtempCM',
                    right: 'DataCorePlugin.GameRawData.Telemetry.LFtempCR',
                },
                fr: {
                    left: 'DataCorePlugin.GameRawData.Telemetry.RFtempCL',
                    center: 'DataCorePlugin.GameRawData.Telemetry.RFtempCM',
                    right: 'DataCorePlugin.GameRawData.Telemetry.RFtempCR',
                },
                rl: {
                    left: 'DataCorePlugin.GameRawData.Telemetry.LRtempCL',
                    center: 'DataCorePlugin.GameRawData.Telemetry.LRtempCM',
                    right: 'DataCorePlugin.GameRawData.Telemetry.LRtempCR',
                },
                rr: {
                    left: 'DataCorePlugin.GameRawData.Telemetry.RRtempCL',
                    center: 'DataCorePlugin.GameRawData.Telemetry.RRtempCM',
                    right: 'DataCorePlugin.GameRawData.Telemetry.RRtempCR',
                }
            }
        }
    },
    circuit: {
        id: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackID',
        name: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackDisplayName',
        length: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackLength',
        corners: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackNumTurns',
        pit: {
            limit: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.TrackPitSpeedLimit'
        }
    },
    driver: {
        name: 'DataCorePlugin.GameData.PlayerName'
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
            last: 'DataCorePlugin.GameRawData.Telemetry.LapDeltaToSessionLastLap',
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
        in: 'DataCorePlugin.GameData.IsInPit',
    },
    theme: {
        colour: {
            red: {
                hex: '#ff000d',
                r: '',
                g: '',
                b: ''
            },
            yellow: {
                hex: '#ffda00',
                r: '',
                g: '',
                b: ''
            },
            orange: {
                hex: '#ff6700',
                r: '',
                g: '',
                b: ''
            },
            green: {
                hex: '#6cfc17',
                r: '',
                g: '',
                b: ''
            },
            purple: {
                hex: '#d300ff',
                r: '',
                g: '',
                b: ''
            },
            white: {
                hex: '#ffffff',
                r: '',
                g: '',
                b: ''
            },
            transparent: {
                hex: 'Transparent',
                r: '',
                g: '',
                b: ''
            }
        }
    },
    blink: {
        slow: 500,
        warning: 250,
        critical: 150
    },
    assumption: {
        gt4class: {
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
        tcrclass: {
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