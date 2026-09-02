var pwx = pwx || {}
pwx.data = pwx.data || {}
pwx.data.car = pwx.data.car || {}
pwx.data.car.brake = pwx.data.car.brake || {}
pwx.data.car.brake.abs = pwx.data.car.brake.abs || {}
pwx.data.car.engine = pwx.data.car.engine || {}
pwx.data.car.engine.speed = pwx.data.car.engine.speed || {}
pwx.data.car.engine.tc = pwx.data.car.engine.tc || {}
pwx.data.car.gearbox = pwx.data.car.gearbox || {}

pwx.data.car.id = function (){
    return _pwxString( _pwxProp( pwx.config.car.id ))
}
pwx.data.car.class = function (){
    return _pwxString( _pwxProp( pwx.config.car.class ))
}
pwx.data.car.model = function (){
    return _pwxString( _pwxProp( pwx.config.car.model ))
}
pwx.data.car.brake.bias = function (){
    return _pwxNumber( _pwxProp( pwx.config.car.brake.bias ))
}
pwx.data.car.brake.abs.fitted = function (){
    return _pwxProp( pwx.config.car.abs.fitted )
}
pwx.data.car.brake.abs.active = function (){
    return _pwxProp( pwx.config.car.abs.active )
}
pwx.data.car.brake.abs.setting = function (){
    return _pwxProp( pwx.config.car.abs.setting )
}
pwx.data.car.engine.rpm = function (){
    return _pwxNumber( _pwxProp( pwx.config.car.engine.rpm ))
}
pwx.data.car.engine.speed.kmh = function (){
    return _pwxNumber( _pwxProp( pwx.config.car.engine.speed.kmh ) ).toFixed(0)
}
pwx.data.car.engine.speed.mph = function (){
    return _pwxNumber( _pwxProp( pwx.config.car.engine.speed.mph ) ).toFixed(0)
}
pwx.data.car.engine.map = function (){
    return _pwxProp( pwx.config.car.engine.map )
}
pwx.data.car.engine.tc.fitted = function (){
    return _pwxProp( pwx.config.car.engine.tc.fitted )
}
pwx.data.car.engine.tc.active = function (){
    return _pwxProp( pwx.config.car.engine.tc.active )
}
pwx.data.car.engine.tc.setting = function (){
    return _pwxProp( pwx.config.car.engine.tc.setting )
}
pwx.data.car.gearbox.gear = function (){
    return _pwxString( _pwxProp( pwx.config.car.gearbox.gear ), '-' )
}
