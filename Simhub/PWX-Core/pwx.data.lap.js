var pwx = pwx || {}
pwx.data = pwx.data || {}
pwx.data.lap = pwx.data.lap || {}
pwx.data.lap.time = pwx.data.lap.time || {}
pwx.data.lap.delta = pwx.data.delta || {}

pwx.data.lap.number = function(){
    return _pwxString( _pwxProp( pwx.config.lap.number ), '-' )
}
pwx.data.lap.time.best = function(){
    return _pwxTimeLap( _pwxProp( pwx.config.lap.time.best ) )
}
pwx.data.lap.time.last = function(){
    return _pwxTimeLap( _pwxProp( pwx.config.lap.time.last ) )
}
pwx.data.lap.time.allTime = function(){
    return _pwxTimeLap( _pwxProp( pwx.config.lap.time.allTime ) )
}
pwx.data.lap.delta.best = function(){
    return _pwxTimeDelta( _pwxProp( pwx.config.lap.delta.best ) )
}
pwx.data.lap.delta.last = function(){
    return _pwxTimeDelta( _pwxProp( pwx.config.lap.delta.last ) )
}
pwx.data.lap.delta.allTime = function(){
    return _pwxTimeDelta( _pwxProp( pwx.config.lap.delta.allTime ) )
}
