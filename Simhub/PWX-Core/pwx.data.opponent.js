var pwx = pwx || {}
pwx.data = pwx.data || {}
pwx.data.opponent = pwx.data.opponent || {}

pwx.data.opponent.id = function( relative, pos ){
    return _pwxProp( pwx.config.opponent.id, relative, pos );
}
pwx.data.opponent.name = function( relative, pos ){
    return _pwxProp( pwx.config.opponent.name, relative, pos );
}
pwx.data.opponent.iRating = function( relative, pos ){
    return _pwxProp( pwx.config.opponent.iRating, relative, pos );
}
pwx.data.opponent.position = function( relative, pos ){
    return _pwxProp( pwx.config.opponent.position, relative, pos );
}
pwx.data.opponent.gap = function( relative, pos ){
    return _pwxProp( pwx.config.opponent.gap, relative, pos );
}

function __pwxCorePrepareOpponentDirection(direction){
    return String(val).charAt(0).toUpperCase() + String(val).slice(1).toLowerCase()
}

function __pwxCorePrepareOpponentPosition( pos ){
    return String(pos).padStart(2,'0')
}