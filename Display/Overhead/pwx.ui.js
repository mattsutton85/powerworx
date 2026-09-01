var pwx = pwx || {}
pwx.ui = pwx.ui || {}
pwx.ui.colour = pwx.ui.colour || {}
pwx.ui.colour.lap = pwx.ui.colour.lap || {}
pwx.ui.colour.session = pwx.ui.colour.session || {}
pwx.ui.colour.incident = pwx.ui.colour.incident || {}

pwx.ui.colour.lap.delta = function(){
    const time = __pwxPrepareTime( $prop( pwx.config.data.telemetry.lap.last.delta ) )
    if( !time.valid || time.zero ){
        return pwx.config.data.theme.value.empty
    }
    return ( time.negative ) ? pwx.config.data.theme.value.green : pwx.config.data.theme.value.yellow
}

pwx.ui.colour.session.best = function(){
    const time = __pwxPrepareTime( $prop( pwx.config.data.telemetry.lap.best.time ) )
    if( time.valid && time.seconds > 1 )
        return pwx.config.data.theme.value.purple
    else
        return pwx.config.data.theme.value.base
}

pwx.ui.colour.incident.count = function( el ){
    const count = _pwxProp( pwx.config.data.session.incident.count )
    if( count > 0 && count < 10 )
        return pwx.config.data.theme[el].warning
    else if( count >= 10 )
        return pwx.config.data.theme[el].danger
    else
        return pwx.config.data.theme[el].base
}