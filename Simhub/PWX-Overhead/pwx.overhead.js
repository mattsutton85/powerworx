var pwx = pwx || {}
pwx.core = pwx.core || {}

pwx.overhead = pwx.overhead || {}
pwx.overhead.incident = pwx.overhead.incident || {}
pwx.overhead.incident.colour = pwx.overhead.incident.colour || {}

pwx.overhead.incident.value = function(){
    return _pwxNumber( pwx.core.data.driver.incidents(), 0 )
}
pwx.overhead.incident.colour.label = function(){
    return 'Blue'
}
pwx.overhead.incident.colour.value = function(){
    return 'White'
}
pwx.overhead.incident.colour.background = function(){
    return 'Red'
}