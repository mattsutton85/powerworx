var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.core.data = pwx.core.data || {}
pwx.core.data.pit = pwx.core.data.pit || {}

pwx.core.data.pit.box = function(){
    return _pwxBoolean( _pwxProp( pwx.core.config.pit.box ) )
}
pwx.core.data.pit.lane = function(){
    return _pwxBoolean( _pwxProp( pwx.core.config.pit.lane ) )
}
pwx.core.data.pit.limiter = function(){
    return _pwxBoolean( _pwxProp( pwx.core.config.pit.limiter ) )
}