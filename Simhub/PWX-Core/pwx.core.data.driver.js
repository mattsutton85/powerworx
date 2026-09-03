var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.core.data = pwx.core.data || {}
pwx.core.data.driver = pwx.core.data.driver || {}

// iRacing driver ID
pwx.core.data.driver.id = function(){
    return _pwxProp( pwx.core.config.driver.id )
}
// iRacing driver name
pwx.core.data.driver.name = function(){
    return _pwxProp( pwx.core.config.driver.name )
}

// iRacing driver iRating
pwx.core.data.driver.iRating = function(){
    return _pwxProp( pwx.core.config.driver.iRating )
}