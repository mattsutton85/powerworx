/*
 * Centralised SimHub properties
 */

PWX.props = {
    circuit: {
        pit: {
          limit: {
              kmh: 'DataCorePlugin.GameData.PitLimiterSpeed'
          }
        }
    },
    incident: {
        count: 'DataCorePlugin.GameRawData.Telemetry.PlayerCarMyIncidentCount',
        limit: 'DataCorePlugin.GameRawData.SessionData.WeekendInfo.WeekendOptions.IncidentLimit'
    engine: {
        rpm: {
            value: 'DataCorePlugin.GameData.Rpms',
            redline: 'DataCorePlugin.GameData.CarSettings_CurrentGearRedLineRPM',
            percentage: 'DataCorePlugin.GameData.CarSettings_CurrentDisplayedRPMPercent
        },
        speed: {
            kmh: DataCorePlugin.GameData.SpeedKmh',
        },
        gearbox: {
            gear: 'DataCorePlugin.GameData.NewData.Gear'
        }
    },
}
