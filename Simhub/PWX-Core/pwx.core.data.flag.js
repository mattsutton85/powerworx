var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.core.data = pwx.core.data || {}
pwx.core.data.flag = pwx.core.data.flag || {}

pwx.core.data.flag.current = function(){

    const states = {
        black: _pwxProp( pwx.core.config.flag.black ),
        blue: _pwxProp( pwx.core.config.flag.blue ),
        caution: _pwxProp( pwx.core.config.flag.caution ),
        cautionWaving: _pwxProp( pwx.core.config.flag.cautionWaving ),
        checkered: _pwxProp( pwx.core.config.flag.checkered ),
        crossed: _pwxProp( pwx.core.config.flag.crossed ),
        debris: _pwxProp( pwx.core.config.flag.debris ),
        disqualify: _pwxProp( pwx.core.config.flag.disqualify ),
        lapToGreen: _pwxProp( pwx.core.config.flag.lapToGreen ),
        red: _pwxProp( pwx.core.config.flag.red ),
        repair: _pwxProp( pwx.core.config.flag.repair ),
        white: _pwxProp( pwx.core.config.flag.white),
        yellow: _pwxProp( pwx.core.config.flag.yellow),
        yellowWaving: _pwxProp( pwx.core.config.flag.yellowWaving ),
    }

    let flag = {
        name: 'green',
        informational: false,
        warning: false
    }

    if( states.red ){
        return _pwxFlag( 'red', false, true )
    }else if( states.black ){
        return _pwxFlag( 'penalty', false, true )
    }else if( states.repair ){
        return _pwxFlag( 'meatball', false, true )
    }else if( states.caution || states.cautionWaving || states.yellow || states.yellowWaving ){
        return _pwxFlag( 'yellow', false, true )
    }else if( states.debris ){
        return _pwxFlag( 'debris', false, true )
    }else if( states.blue ){
        return _pwxFlag( 'blue', false, true )
    }else if( states.lapToGreen ){
        return _pwxFlag( 'formation', true, false )
    }else if( states.white ){
        return _pwxFlag( 'white', true, false )
    }else if( states.checkered ){
        return _pwxFlag( 'checkered', true, false )
    }
    return _pwxFlag( flag.name, flag.informational, flag.warning )
}

function _pwxFlag( name, informational, warning){
    return {
        name: name,
        informational: informational,
        warning: warning
    }
}