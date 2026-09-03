var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.core.data = pwx.core.data || {}
pwx.core.data.car = pwx.core.data.car || {}
pwx.core.data.car.brake = pwx.core.data.car.brake || {}
pwx.core.data.car.brake.abs = pwx.core.data.car.brake.abs || {}
pwx.core.data.car.engine = pwx.core.data.car.engine || {}
pwx.core.data.car.engine.speed = pwx.core.data.car.engine.speed || {}
pwx.core.data.car.engine.tc = pwx.core.data.car.engine.tc || {}
pwx.core.data.car.gearbox = pwx.core.data.car.gearbox || {}

/* Generic car data */
pwx.core.data.car.id = function (){
    return _pwxString( _pwxProp( pwx.config.car.id ))
}
pwx.core.data.car.class = function (){
    return _pwxString( _pwxProp( pwx.config.car.class ))
}
pwx.core.data.car.model = function (){
    return _pwxString( _pwxProp( pwx.config.car.model ))
}

/* Brakes */
pwx.core.data.car.brake.bias = function (){
    return _pwxNumber( _pwxProp( pwx.config.car.brake.bias ))
}
pwx.core.data.car.brake.abs.fitted = function (){
    return _pwxProp( pwx.core.config.car.abs.fitted )
}
pwx.core.data.car.brake.abs.active = function (){
    return _pwxProp( pwx.core.config.car.abs.active )
}
pwx.core.data.car.brake.abs.setting = function (){
    return _pwxProp( pwx.core.config.car.abs.setting )
}

/* Engine */
pwx.core.data.car.engine.rpm = function (){
    return _pwxNumber( _pwxProp( pwx.core.config.car.engine.rpm ))
}
pwx.core.data.car.engine.speed.kmh = function (){
    return _pwxNumber( _pwxProp( pwx.core.config.car.engine.speed.kmh ) ).toFixed(0)
}
pwx.core.data.car.engine.speed.mph = function (){
    return _pwxNumber( _pwxProp( pwx.core.config.car.engine.speed.mph ) ).toFixed(0)
}
pwx.core.data.car.engine.map = function (){
    return _pwxProp( pwx.core.config.car.engine.map )
}
pwx.core.data.car.engine.tc.fitted = function (){
    return _pwxProp( pwx.core.config.car.engine.tc.fitted )
}
pwx.core.data.car.engine.tc.active = function (){
    return _pwxProp( pwx.core.config.car.engine.tc.active )
}
pwx.core.data.car.engine.tc.setting = function (){
    return _pwxProp( pwx.core.config.car.engine.tc.setting )
}

/* Gearbox */
pwx.core.data.car.gearbox.gear = function (){
    return _pwxString( _pwxProp( pwx.core.config.car.gearbox.gear ), '-' )
}
