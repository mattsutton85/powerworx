/*
Parsed session data
 */

PWX.data.session.lap.number = function (){
    return _PWXCore.parse.number( _PWXCore.props.session.lap.number );
}

PWX.data.session.lap.limit = function (){
    return _PWXCore.parse.number( _PWXCore.props.session.lap.limit );
}

PWX.data.session.lap.time.best = function (){
    return _PWXCore.parse.string( _PWXCore.props.session.lap.time.best );
}

PWX.data.session.lap.time.last = function (){
    return _PWXCore.parse.string( _PWXCore.props.session.lap.time.last );
}

PWX.data.session.lap.delta.best = function (){
    return _PWXCore.parse.string( _PWXCore.props.session.lap.delta.best );
}

PWX.data.session.lap.delta.last = function (){
    return _PWXCore.parse.string( _PWXCore.props.session.lap.delta.last );
}

PWX.data.session.time.remaining = function (){
    return _PWXCore.parse.string( _PWXCore.props.session.time.remaining);
}