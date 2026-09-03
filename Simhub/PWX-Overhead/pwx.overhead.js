var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.overhead = pwx.overhead || {}
pwx.overhead.incident = pwx.overhead.incident || {}

pwx.overhead.incident.value = function(){
    return _pwxNumber( pwx.core.data.driver.incidents(), 0 )
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

