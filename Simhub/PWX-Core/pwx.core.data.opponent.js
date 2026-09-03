var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.core.data = pwx.core.data || {}
pwx.core.data.opponent = pwx.core.data.opponent || {}

pwx.core.data.opponent.id = function( relative, pos ){
    return _pwxProp( pwx.core.config.opponent.id, relative, pos );
}
pwx.core.data.opponent.name = function( relative, pos ){
    return _pwxProp( pwx.core.config.opponent.name, relative, pos );
}
pwx.core.data.opponent.iRating = function( relative, pos ){
    return _pwxProp( pwx.core.config.opponent.iRating, relative, pos );
}
pwx.core.data.opponent.position = function( relative, pos ){
    return _pwxProp( pwx.core.config.opponent.position, relative, pos );
}
pwx.core.data.opponent.gap = function( relative, pos ){
    return _pwxProp( pwx.core.config.opponent.gap, relative, pos );
}

function __pwxCorePrepareOpponentDirection(direction){
    return String(direction).charAt(0).toUpperCase()
        + String(direction).slice(1).toLowerCase();
}

function __pwxCorePrepareOpponentPosition( pos ){
    return String(parseInt(pos, 10)).padStart(2, '0');
}