var pwx = pwx || {}
pwx.data = pwx.data || {}
pwx.data.driver = pwx.data.driver || {}

pwx.data.driver.id = function(){
    return _pwxProp( pwx.config.driver.id )
}
pwx.data.driver.name = function(){
    return _pwxProp( pwx.config.driver.name )
}
pwx.data.driver.iRating = function(){
    return _pwxProp( pwx.config.driver.iRating )
}
pwx.data.driver.position = function(){
    return _pwxProp( pwx.config.driver.position )
}
pwx.data.driver.incidents = function(){
    return _pwxProp( pwx.config.driver.incidents )
}