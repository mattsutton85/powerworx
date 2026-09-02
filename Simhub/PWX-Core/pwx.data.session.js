var pwx = pwx || {}
pwx.data = pwx.data || {}
pwx.data.session = pwx.data.session || {}
pwx.data.session.incident = pwx.data.incident || {}
pwx.data.session.lap = pwx.data.lap || {}
pwx.data.session.time = pwx.data.time || {}

const _pwxCoreSessionStates = {
    practice: ['Practice'],
    qualifying: ['Lone Qualify'],
    race: ['Race']
}

pwx.data.session.number = function(){
    return _pwxProp( pwx.config.session.number )
}
pwx.data.session.name = function(){
    return _pwxProp( pwx.config.session.name )
}
pwx.data.session.is = function(state){
    return _pwxBoolean( (_pwxCoreSessionStates[state].includes(_pwxProp(pwx.config.session.name))))
}
pwx.data.session.incident.limit = function(){
    return _pwxProp( pwx.config.session.incident.limit )
}
pwx.data.session.lap.limit = function(){
    return _pwxProp( pwx.config.session.lap.limit )
}
pwx.data.session.time.remaining = function(){
    return _pwxTimeSession( pwx.config.session.time.remaining )
}