var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.core.data = pwx.core.data || {}
pwx.core.data.opponent = pwx.core.data.opponent || {}

// Retrieve opponent ID
pwx.core.data.opponent.id = function( relative, pos ){
    return _pwxProp( pwx.core.config.opponent.id,
        __pwxCorePrepareOpponentDirection( relative ),
        __pwxCorePrepareOpponentPosition( pos )
    );
}

// Retrieve opponent name
pwx.core.data.opponent.name = function( relative, pos ){
    return _pwxProp( pwx.core.config.opponent.name,
        __pwxCorePrepareOpponentDirection( relative ),
        __pwxCorePrepareOpponentPosition( pos )
    )
}

// Retrieve opponent iRating
pwx.core.data.opponent.iRating = function( relative, pos ){
    return _pwxProp( pwx.core.config.opponent.iRating,
        __pwxCorePrepareOpponentDirection( relative ),
        __pwxCorePrepareOpponentPosition( pos )
    )
}

// Retrieve opponent position
pwx.core.data.opponent.position = function( relative, pos ){
    return _pwxProp( pwx.core.config.opponent.position,
        __pwxCorePrepareOpponentDirection( relative ),
        __pwxCorePrepareOpponentPosition( pos )
    )
}

// Retrieve opponent gap
pwx.core.data.opponent.gap = function( relative, pos ){
    return _pwxProp( pwx.core.config.opponent.gap,
        __pwxCorePrepareOpponentDirection( relative ),
        __pwxCorePrepareOpponentPosition( pos )
    )
}

/*
 * Utility functions
 */
function __pwxCorePrepareOpponentDirection(direction){
    return String(direction).charAt(0).toUpperCase()
        + String(direction).slice(1).toLowerCase();
}
function __pwxCorePrepareOpponentPosition( pos ){
    return String(parseInt(pos, 10)).padStart(2, '0');
}