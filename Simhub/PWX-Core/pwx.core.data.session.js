var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.core.data = pwx.core.data || {}
pwx.core.data.session = pwx.core.data.session || {}
pwx.core.data.session.incident = pwx.core.data.incident || {}
pwx.core.data.session.lap = pwx.core.data.lap || {}
pwx.core.data.session.time = pwx.core.data.time || {}

const __pwxCoreSessionStates = {
    practice: ['Practice','Test'],
    qualifying: ['Lone Qualify','Open Qualify'],
    race: ['Race']
}

pwx.core.data.session.number = function(){
    return _pwxNumber( _pwxProp( pwx.core.config.session.number ), '-' )
}
pwx.core.data.session.name = function(){
    return _pwxString( _pwxProp( pwx.core.config.session.name ), '' )
}
pwx.core.data.session.position = function(){
    return _pwxNumber( _pwxProp( pwx.core.config.session.position ) )
}
pwx.core.data.session.is = function(state) {
    const states = __pwxCoreSessionStates[state];
    if (!states)
        return false;
    return _pwxBoolean( states.includes( _pwxProp(pwx.core.config.session.name) ) );
};
pwx.core.data.session.incident.count = function(){
    return _pwxNumber( _pwxProp( pwx.core.config.session.incident.count ) )
}
pwx.core.data.session.incident.limit = function(){
    return _pwxNumber( _pwxProp( pwx.core.config.session.incident.limit ) )
}
pwx.core.data.session.lap.limit = function(){
    return _pwxNumber( _pwxProp( pwx.core.config.session.lap.limit ) )
}
pwx.core.data.session.time.remaining = function(){
    return _pwxTimeSession( pwx.core.config.session.time.remaining )
}