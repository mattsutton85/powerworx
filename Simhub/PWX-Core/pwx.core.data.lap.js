var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.core.data = pwx.core.data || {}
pwx.core.data.lap = pwx.core.data.lap || {}
pwx.core.data.lap.time = pwx.core.data.lap.time || {}
pwx.core.data.lap.delta = pwx.core.data.delta || {}

pwx.core.data.lap.number = function(){
    return _pwxString( _pwxProp( pwx.core.config.lap.number ), '-' )
}
pwx.core.data.lap.time.best = function(){
    return _pwxTimeLap( _pwxProp( pwx.core.config.lap.time.best ) )
}
pwx.core.data.lap.time.last = function(){
    return _pwxTimeLap( _pwxProp( pwx.core.config.lap.time.last ) )
}
pwx.core.data.lap.time.allTime = function(){
    return _pwxTimeLap( _pwxProp( pwx.core.config.lap.time.allTime ) )
}
pwx.core.data.lap.delta.best = function(){
    return _pwxTimeDelta( _pwxProp( pwx.core.config.lap.delta.best ) )
}
pwx.core.data.lap.delta.last = function(){
    return _pwxTimeDelta( _pwxProp( pwx.core.config.lap.delta.last ) )
}
pwx.core.data.lap.delta.allTime = function(){
    return _pwxTimeDelta( _pwxProp( pwx.core.config.lap.delta.allTime ) )
}
