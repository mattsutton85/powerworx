/*
Raw car telemetry
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
    return _PWXCore.parse.number( _PWXCore.props.car.speedKmh ) === null ? null : value * 0.621371;
}

PWX.data.car.engine.rpm.current.value = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.current )
}

PWX.data.car.engine.rpm.current.percent = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.percent )
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