var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.core.data = pwx.core.data || {}
pwx.core.data.car = pwx.core.data.car || {}
pwx.core.data.car.brake = pwx.core.data.car.brake || {}
pwx.core.data.car.brake.abs = pwx.core.data.car.brake.abs || {}
pwx.core.data.car.engine = pwx.core.data.car.engine || {}
pwx.core.data.car.engine.speed = pwx.core.data.car.engine.speed || {}
pwx.core.data.car.engine.rpm = pwx.core.data.car.engine.rpm || {}
pwx.core.data.car.tc = pwx.core.data.car.tc || {}
pwx.core.data.car.gearbox = pwx.core.data.car.gearbox || {}
pwx.core.data.car.gearbox.shift = pwx.core.data.car.gearbox.shift || {}
pwx.core.data.car.tyre = pwx.core.data.car.tyre || {}

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
    return _pwxNumber( _pwxProp( pwx.core.config.car.brake.bias ), undefined, 1 )
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
    return _pwxNumber( _pwxProp( pwx.core.config.car.engine.speed.kmh ) )
}
pwx.core.data.car.engine.speed.mph = function (){
    return _pwxNumber( _pwxProp( pwx.core.config.car.engine.speed.mph ) )
}
pwx.core.data.car.engine.map = function (){
    return _pwxProp( pwx.core.config.car.engine.map )
}

/* Traction */
pwx.core.data.car.tc.active = function (){
    return _pwxProp( pwx.core.config.car.tc.active )
}
pwx.core.data.car.tc.setting = function (){
    return _pwxProp( pwx.core.config.car.tc.setting )
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

/* Tyres */
pwx.core.data.car.tyre.temperature = function ( tyre ){

    let state = {
        corner: tyre,
        type: '',
        car: '',
        temp: 0,
        state: null
    }

    const tyreLeft = _pwxProp( pwx.core.config.car.tyre.temperature[tyre].left )
    const tyreCenter = _pwxProp( pwx.core.config.car.tyre.temperature[tyre].center )
    const tyreRight = _pwxProp( pwx.core.config.car.tyre.temperature[tyre].right )

    state.temp = _pwxNumber( ( tyreLeft + tyreCenter + tyreRight ) / 3, 0, 1 )

    let carClass = _pwxString( _pwxProp( pwx.core.config.car.class ) ).toLowerCase()
    carClass = carClass.split( ' ' ).join( '' )
    state.car = carClass
    state.type = _pwxString( _pwxProp( pwx.core.config.car.tyre.type ) ).toLowerCase()

    const assumption = pwx.core.config.assumption[state.car].tyre[state.type].temperature
    if( assumption && state.temp > 0 ){
        if( state.temp < assumption.warm ){
            state.state = 'cold'
        }else if( state.temp < assumption.ready ){
            state.state = 'warm'
        }else if( state.temp < assumption.hot ){
            state.state = 'ready'
        }else if( state.temp < assumption.overheat ){
            state.state = 'hot'
        }else{
            state.state = 'overheat'
        }
    }

    return state
}