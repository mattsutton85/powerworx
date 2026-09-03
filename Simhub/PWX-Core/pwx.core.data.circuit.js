var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.core.data = pwx.core.data || {}
pwx.core.data.circuit = pwx.core.data.circuit || {}
pwx.core.data.circuit.pit = pwx.core.data.circuit.pit || {}

pwx.core.data.circuit.id = function(){
    return _pwxProp( pwx.core.config.circuit.id )
}
pwx.core.data.circuit.name = function(){
    return _pwxString( _pwxProp( pwx.core.config.circuit.name ) )
}
pwx.core.data.circuit.length = function(){
    return _pwxString( _pwxProp( pwx.core.config.circuit.length ) )
}
pwx.core.data.circuit.corners = function(){
    return _pwxString( _pwxProp( pwx.core.config.circuit.corners ) )
}
pwx.core.data.circuit.pit.limit = function(){
    return _pwxProp( pwx.core.config.circuit.pit.limit )
}