/*
SimHub / iRacing telemetry mapping
*/

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
            shift: {
                first: 'DataCorePlugin.GameRawData.Telemetry.PlayerCarSLFirstRPM',
                last:  'DataCorePlugin.GameRawData.Telemetry.PlayerCarSLLastRPM',
                point: 'DataCorePlugin.GameRawData.Telemetry.PlayerCarSLShiftRPM',
                blink: 'DataCorePlugin.GameRawData.Telemetry.PlayerCarSLBlinkRPM'
            }
        },
        limiter: 'DataCorePlugin.GameData.PitLimiterOn',
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
            speedKmh: 'DataCorePlugin.GameData.PitLimiterSpeed'
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
    },
    session: {
        lap: {
            number: 'DataCorePlugin.GameRawData.Telemetry.Lap',
            limit: 'DataCorePlugin.GameRawData.Telemetry.SessionLapsTotal',
            time: {
                best: 'DataCorePlugin.GameRawData.Telemetry.LapBestLapTime',
                last: 'DataCorePlugin.GameRawData.Telemetry.LapLastLapTime',
            },
            delta: {
                best: 'DataCorePlugin.GameRawData.Telemetry.LapDeltaToBestLap',
                last: 'DataCorePlugin.GameRawData.Telemetry.LapDeltaToSessionLastLap'
            }
        },
        time: {
           remaining: 'DataCorePlugin.GameRawData.Telemetry.SessionTimeRemain',
        }
    }
}