var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.overhead = pwx.overhead || {}
pwx.overhead.context = pwx.overhead.context || {}
pwx.overhead.context.incident = pwx.overhead.incident || {}
pwx.overhead.context.lap = pwx.overhead.lap || {}
pwx.overhead.context.remaining = pwx.overhead.remaining || {}
pwx.overhead.context.position = pwx.overhead.position || {}

pwx.overhead.context.incident.value = function(){
    return _pwxNumber( pwx.core.data.driver.incidents(), 0 )
}
pwx.overhead.context.incident.colourLabel = function(){
    return 'Blue'
}
pwx.overhead.context.incident.colourValue = function(){
    return 'White'
}
pwx.overhead.context.incident.colourBackground = function(){
    return 'Red'
}