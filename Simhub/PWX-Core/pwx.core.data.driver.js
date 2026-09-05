var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.core.data = pwx.core.data || {}
pwx.core.data.driver = pwx.core.data.driver || {}

// Driver name
pwx.core.data.driver.name = function(){
    return _pwxProp( pwx.core.config.driver.name )
}