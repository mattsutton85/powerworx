var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.core.data = pwx.core.data || {}
pwx.core.data.car = pwx.core.data.car || {}
pwx.core.data.car.brake = pwx.core.data.car.brake || {}
pwx.core.data.car.brake.abs = pwx.core.data.car.brake.abs || {}
pwx.core.data.car.engine = pwx.core.data.car.engine || {}
pwx.core.data.car.engine.speed = pwx.core.data.car.engine.speed || {}
pwx.core.data.car.engine.rpm = pwx.core.data.car.engine.rpm || {}
pwx.core.data.car.engine.tc = pwx.core.data.car.engine.tc || {}
pwx.core.data.car.gearbox = pwx.core.data.car.gearbox || {}
pwx.core.data.car.gearbox.shift = pwx.core.data.car.gearbox.shift || {}

/* Generic car data */
pwx.core.data.car.id = function (){
    return _pwxString( _pwxProp( pwx.core.config.car.id ))
}
pwx.core.data.car.class = function (){
    return _pwxString( _pwxProp( pwx.core.config.car.class ))
}
pwx.core.data.car.model = function (){
    return _pwxString( _pwxProp( pwx.core.config.car.model ))
}

/* Brakes */
pwx.core.data.car.brake.bias = function (){
    return _pwxNumber( _pwxProp( pwx.core.config.car.brake.bias ))
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
pwx.core.data.car.engine.rpm.current = function (){
    return _pwxNumber( _pwxProp( pwx.core.config.car.engine.rpm.current ))
}
pwx.core.data.car.engine.rpm.idle = function (){
    return _pwxNumber( _pwxProp( pwx.core.config.car.engine.rpm.idle ))
}
pwx.core.data.car.engine.rpm.max = function (){
    return _pwxNumber( _pwxProp( pwx.core.config.car.engine.rpm.max ))
}
pwx.core.data.car.engine.rpm.redline = function (){
    return _pwxNumber( _pwxProp( pwx.core.config.car.engine.rpm.redline ))
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
pwx.core.data.car.gearbox.shift.first = function (){
    return _pwxProp( pwx.core.config.car.gearbox.shift.first )
}
pwx.core.data.car.gearbox.shift.last = function (){
    return _pwxProp( pwx.core.config.car.gearbox.shift.last )
}
pwx.core.data.car.gearbox.shift.point = function (){
    return _pwxProp( pwx.core.config.car.gearbox.shift.point )
}
pwx.core.data.car.gearbox.shift.blink = function (){
    return _pwxProp( pwx.core.config.car.gearbox.shift.blink )
}
pwx.core.data.car.gearbox.shift.progress = function(){
    var rpm = pwx.core.data.car.engine.rpm.current()
    var first = pwx.core.data.car.gearbox.shift.first()
    var last = pwx.core.data.car.gearbox.shift.last()
    var progress = Math.max(
        0,
        Math.min(1, (rpm - first) / (last - first))
    );
    return Math.ceil(progress * 16);
}