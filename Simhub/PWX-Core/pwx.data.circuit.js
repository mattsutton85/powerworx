var pwx = pwx || {}
pwx.data = pwx.data || {}
pwx.data.circuit = pwx.data.circuit || {}
pwx.data.circuit.pit = pwx.data.circuit.pit || {}

pwx.data.circuit.id = function(){
    return _pwxProp( pwx.config.circuit.id )
}
pwx.data.circuit.name = function(){
    return _pwxString( _pwxProp( pwx.config.circuit.name ) )
}
pwx.data.circuit.length = function(){
    return _pwxString( _pwxProp( pwx.config.circuit.length ) )
}
pwx.data.circuit.corners = function(){
    return _pwxString( _pwxProp( pwx.config.circuit.corners ) )
}
pwx.data.circuit.pit.limit = function(){
    return _pwxProp( pwx.config.circuit.pit.limit )
}