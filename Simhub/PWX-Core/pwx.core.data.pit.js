var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.core.data = pwx.core.data || {}
pwx.core.data.pit = pwx.core.data.pit || {}

pwx.core.data.pit.limiter = function(){
    return _pwxBoolean( _pwxProp( pwx.core.config.pit.limiter ) )
}
pwx.core.data.pit.in = function(){
    return _pwxBoolean( _pwxProp( pwx.core.config.pit.in ) )
}