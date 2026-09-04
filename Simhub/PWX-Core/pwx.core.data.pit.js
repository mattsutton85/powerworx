var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.core.data = pwx.core.data || {}
pwx.core.data.pit = pwx.core.data.pit || {}

pwx.core.data.pit.limiterOn = function(){
    return _pwxBoolean( _pwxProp( pwx.core.config.pit.limiter ) )
}