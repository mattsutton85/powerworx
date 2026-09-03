var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.core.data = pwx.core.data || {}
pwx.core.data.driver = pwx.core.data.driver || {}

pwx.core.data.driver.id = function(){
    return _pwxProp( pwx.core.config.driver.id )
}
pwx.core.data.driver.name = function(){
    return _pwxProp( pwx.core.config.driver.name )
}
pwx.core.data.driver.iRating = function(){
    return _pwxProp( pwx.core.config.driver.iRating )
}
pwx.core.data.driver.position = function(){
    return _pwxProp( pwx.core.config.driver.position )
}
pwx.core.data.driver.incidents = function(){
    return _pwxProp( pwx.core.config.driver.incidents )
}