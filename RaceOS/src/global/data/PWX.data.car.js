/*
Parsed car telemetry live data
 */

PWX.data.car.id = function () {
    return _PWXCore.parse.string( _PWXCore.props.car.id )
}

PWX.data.car.model = function(){
    return _PWXCore.parse.string( _PWXCore.props.car.model )
}

PWX.data.car.class = function(){
    return _PWXCore.parse.string( _PWXCore.props.car.class )
}

PWX.data.car.speed.kph = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.speedKmh )
}

PWX.data.car.speed.mph = function(){
    var speed = _PWXCore.parse.number( _PWXCore.props.car.speedKmh )
    return speed === null ? null : speed * 0.621371;
}

PWX.data.car.engine.rpm.current = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.current )
}

PWX.data.car.engine.rpm.percent = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.percentage )
}

PWX.data.car.engine.rpm.idle = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.idle )
}

PWX.data.car.engine.rpm.max = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.max )
}

PWX.data.car.engine.rpm.redline = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.redline )
}

PWX.data.car.engine.oil.temperature = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.oil.temperature )
}

PWX.data.car.engine.oil.pressure = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.oil.pressure )
}

PWX.data.car.engine.water.temperature = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.water.temperature )
}

PWX.data.car.fuel.remaining.litres = function (){
    return _PWXCore.parse.number( _PWXCore.props.car.fuel.remaining.litres )
}

PWX.data.car.fuel.remaining.laps = function (){
    return _PWXCore.parse.number( _PWXCore.props.car.fuel.remaining.laps )
}

PWX.data.car.assists.abs.setting = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.assists.abs.setting )
}

PWX.data.car.assists.tc.setting = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.assists.tc.setting )
}

PWX.data.car.brake.bias = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.brake.bias )
}

PWX.data.car.brake.percentage = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.brake.percentage )
}

PWX.data.car.gearbox.gear = function(){
    return _PWXCore.parse.string( _PWXCore.props.car.gearbox.gear )
}

PWX.data.car.throttle.percentage = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.throttle.percentage )
}