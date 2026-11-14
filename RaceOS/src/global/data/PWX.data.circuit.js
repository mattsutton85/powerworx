/*
Parsed circuit data
 */

PWX.data.circuit.id = function () {
    return _PWXCore.parse.string( _PWXCore.props.circuit.id )
}

PWX.data.circuit.name = function () {
    return _PWXCore.parse.string( _PWXCore.props.circuit.name )
}

PWX.data.circuit.length = function () {
    return _PWXCore.parse.string( _PWXCore.props.circuit.length )
}

PWX.data.circuit.corners = function () {
    return _PWXCore.parse.string( _PWXCore.props.circuit.corners )
}

PWX.data.circuit.pit.speed.kmh = function () {
    return _PWXCore.parse.number( _PWXCore.props.circuit.pit.speedKmh )
}

PWX.data.circuit.pit.speed.mph = function () {
    var speed = _PWXCore.parse.number( _PWXCore.props.circuit.pit.speedKmh )
    return speed === null ? null : speed * 0.621371;
}