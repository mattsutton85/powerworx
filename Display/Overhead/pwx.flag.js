var pwx = pwx || {}
pwx.flag = pwx.flag || {}

var flagProps = {
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
}

pwx.flag.state = function(){

    const states = {
        black: $prop( flagProps.black ),
        blue: $prop( flagProps.blue ),
        caution: $prop( flagProps.caution ),
        cautionWaving: $prop( flagProps.cautionWaving ),
        checkered: $prop( flagProps.checkered ),
        crossed: $prop( flagProps.crossed ),
        debris: $prop( flagProps.debris ),
        disqualify: $prop( flagProps.disqualify),
        lapToGreen: $prop( flagProps.lapToGreen ),
        red: $prop( flagProps.red),
        repair: $prop( flagProps.repair ),
        white: $prop( flagProps.white),
        yellow: $prop( flagProps.yellow),
        yellowWaving: $prop( flagProps.yellowWaving ),
    }

    if( states.red ){
        return 'RED'
    }
    if( states.caution || states.cautionWaving || states.yellow || states.yellowWaving ){
        return 'YELLOW'
    }
    if( states.debris ){
        return 'DEBRIS'
    }
    if( states.blue ){
        return 'BLUE'
    }
    if( states.repair ){
        return 'MEATBALL'
    }
    if( states.lapToGreen ){
        return 'FORMATION'
    }
    if( states.white ){
        return 'WHITE'
    }
    if( states.checkered ){
        return 'CHECKER'
    }
    return 'GREEN'
}

pwx.flag.image = function(){
    return pwx.flag.state().toLowerCase()
}