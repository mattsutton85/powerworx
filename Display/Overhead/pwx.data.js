var pwx = pwx || {}
pwx.data = pwx.data || {}

pwx.data.car = pwx.data.car || {}
pwx.data.circuit = pwx.data.circuit || {}
pwx.data.session = pwx.data.session || {}
pwx.data.session.lap = pwx.data.session.lap || {}
pwx.data.session.incident = pwx.data.session.incident || {}
pwx.data.session.time = pwx.data.session.time || {}
pwx.data.telemetry = pwx.data.telemetry || {}
pwx.data.telemetry.lap = pwx.data.telemetry.lap || {};
pwx.data.telemetry.lap.best = pwx.data.telemetry.lap.best || {};
pwx.data.telemetry.lap.last = pwx.data.telemetry.lap.last || {};
pwx.data.opponent = pwx.data.opponent || {}
pwx.data.opponent.ahead = pwx.data.opponent.ahead || {};
pwx.data.opponent.behind = pwx.data.opponent.behind || {};

/** CAR DATA **/
pwx.data.car.model = function(){
    return _pwxString( _pwxProp( pwx.config.data.car.model ) )
}

/** CIRCUIT DATA **/
pwx.data.circuit.name = function(){
    return _pwxString( _pwxProp( pwx.config.data.circuit.name ) )
}

/** SESSION DATA **/
pwx.data.session.name = function(){
    return _pwxString( _pwxProp( pwx.config.data.session.name ) )
}
pwx.data.session.number = function(){
    return _pwxNumber( _pwxProp( pwx.config.data.session.number ) )
}
pwx.data.session.isPractice = function(){
    return ( [ 'Practice' ].includes( _pwxProp( pwx.config.data.session.name ) ) )
}
pwx.data.session.isQualifying = function(){
    return ( [ 'Lone Qualify' ].includes( _pwxProp( pwx.config.data.session.name ) ) )
}
pwx.data.session.isRace = function(){
    return ( [ 'Race' ].includes( _pwxProp( pwx.config.data.session.name ) ) )
}
pwx.data.session.incident.count = function(){
    return _pwxNumber( _pwxProp( pwx.config.data.session.incident.count ) )
}
pwx.data.session.incident.limit = function(){
    return _pwxNumber( _pwxProp( pwx.config.data.incident.limit ) )
}
pwx.data.session.lap.number = function(){
    const lap = _pwxProp( pwx.config.data.session.lap.number )
    if( lap <= 0 )
        return '-'
    return _pwxNumber( _pwxProp( pwx.config.data.session.lap.number ) )
}
pwx.data.session.time.remaining = function(){
    return _pwxTimeSession( _pwxProp( pwx.config.data.session.time.remaining) )
}

/** TELEMETRY DATA **/
pwx.data.telemetry.position = function(){
    const pos = _pwxProp( pwx.config.data.telemetry.position )
    if( pos <= 0 )
        return '-'
    return _pwxNumber( pos )
}
pwx.data.telemetry.lap.last.time = function(){
    return _pwxTimeLap( _pwxProp( pwx.config.data.telemetry.lap.last.time) )
}
pwx.data.telemetry.lap.last.delta = function(){
    return _pwxTimeDelta( _pwxProp( pwx.config.data.telemetry.lap.last.delta) )
}
pwx.data.telemetry.lap.best.time = function(){
    return _pwxTimeLap( _pwxProp( pwx.config.data.telemetry.lap.best.time) )
}
pwx.data.telemetry.lap.best.delta = function(){
    return _pwxTimeDelta( _pwxProp( pwx.config.data.telemetry.lap.best.delta) )
}

/** OPPONENT DATA **/
pwx.data.opponent.ahead.name = function( pos ){
    const name = _pwxProp( pwx.config.data.opponent.ahead.name, pos )
    if( name ){
        return _pwxString( name.toUpperCase() )
    }
    return ''
}

pwx.data.opponent.ahead.gap = function( pos ){
    const prop = _pwxProp( pwx.config.data.opponent.ahead.gap, pos )
    return _pwxTimeDelta( prop, 2 )
}

pwx.data.opponent.ahead.irating = function( pos ){
    var rating = Number( _pwxProp( pwx.config.data.opponent.ahead.irating, pos ) );
    if (!rating || !isFinite(rating) || rating < 0)
        return "";
    if (rating < 1000)
        return String(Math.round(rating));
    return (rating / 1000).toFixed(1) + "k";
}
pwx.data.opponent.ahead.position = function( pos ){
    return 'P' + _pwxProp( pwx.config.data.opponent.ahead.position, pos );
}

pwx.data.opponent.behind.name = function( pos ){
    const name = _pwxProp( pwx.config.data.opponent.behind.name, pos )
    if( name ){
        return _pwxString( name.toUpperCase() )
    }
    return ''
}

pwx.data.opponent.behind.gap = function( pos ){
    const prop = _pwxProp( pwx.config.data.opponent.behind.gap, pos )
    return _pwxTimeDelta( prop, 2 )
}

pwx.data.opponent.behind.irating = function( pos ){
    var rating = Number( _pwxProp( pwx.config.data.opponent.behind.irating, pos ) );
    if (!rating || !isFinite(rating) || rating < 0)
        return "";
    if (rating < 1000)
        return String(Math.round(rating));
    return (rating / 1000).toFixed(1) + "k";
}
pwx.data.opponent.behind.position = function( pos ){
    return 'P' + _pwxProp( pwx.config.data.opponent.behind.position, pos );
}