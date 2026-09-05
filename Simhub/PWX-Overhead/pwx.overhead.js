var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.overhead = pwx.overhead || {}

pwx.overhead.incident = pwx.overhead.incident || {}
pwx.overhead.lap = pwx.overhead.lap || {}
pwx.overhead.remaining = pwx.overhead.remaining || {}
pwx.overhead.position = pwx.overhead.position || {}
pwx.overhead.firmware = pwx.overhead.firmware || {}

/* Incident count */
pwx.overhead.incident.value = function(){
    return _pwxString( pwx.core.data.session.incident.count, '0' )
}
pwx.overhead.incident.colourBackground = function(){
    return 'Red'
}
pwx.overhead.incident.colourValue = function(){
    return 'White'
}
pwx.overhead.incident.colourLabel = function(){
    return 'White'
}

/* Lap number */
pwx.overhead.lap.value = function(){
    return _pwxString( pwx.core.data.lap.number(), '-' )
}

/* Remaining time */
pwx.overhead.remaining.value = function(){
    return _pwxString( pwx.core.data.session.time.remaining() )
}

/* Car position */
pwx.overhead.position.value = function(){
    return _pwxString( pwx.core.data.session.position(), '-' )
}

pwx.overhead.firmware.version = function(){
    return _pwxString( '1.0' )
}