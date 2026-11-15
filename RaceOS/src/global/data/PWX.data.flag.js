PWX.data.flag.is.black = function(){
    return _PWXCore.parse.boolean( _PWXCore.props.flag.black );
};

PWX.data.flag.is.blue = function(){
    return _PWXCore.parse.boolean( _PWXCore.props.flag.blue );
};

PWX.data.flag.is.caution = function(){
    return _PWXCore.parse.boolean( _PWXCore.props.flag.caution );
};

PWX.data.flag.is.cautionWaving = function(){
    return _PWXCore.parse.boolean( _PWXCore.props.flag.cautionWaving );
};

PWX.data.flag.is.checkered = function(){
    return _PWXCore.parse.boolean( _PWXCore.props.flag.checkered );
};

PWX.data.flag.is.crossed = function(){
    return _PWXCore.parse.boolean( _PWXCore.props.flag.crossed );
};

PWX.data.flag.is.debris = function(){
    return _PWXCore.parse.boolean( _PWXCore.props.flag.debris );
};

PWX.data.flag.is.disqualify = function(){
    return _PWXCore.parse.boolean( _PWXCore.props.flag.disqualify );
};

PWX.data.flag.is.lapToGreen = function(){
    return _PWXCore.parse.boolean( _PWXCore.props.flag.lapToGreen );
};

PWX.data.flag.is.red = function(){
    return _PWXCore.parse.boolean( _PWXCore.props.flag.red );
};

PWX.data.flag.is.repair = function(){
    return _PWXCore.parse.boolean( _PWXCore.props.flag.repair );
};

PWX.data.flag.is.white = function(){
    return _PWXCore.parse.boolean( _PWXCore.props.flag.white );
};

PWX.data.flag.is.yellow = function(){
    return _PWXCore.parse.boolean( _PWXCore.props.flag.yellow );
};

PWX.data.flag.is.yellowWaving = function(){
    return _PWXCore.parse.boolean( _PWXCore.props.flag.yellowWaving );
};

var flagPriority = [
    'red',
    'disqualify',
    'black',
    'repair',
    'cautionWaving',
    'yellowWaving',
    'debris',
    'lapToGreen',
    'caution',
    'yellow',
    'checkered',
    'blue',
    'white',
    'crossed'
];

PWX.data.flag.current = function(){
    for( var flag in flagPriority ){
        if( PWX.data.flag.is[flag]() ){
            return flag;
        }
    }
    return 'green';
}