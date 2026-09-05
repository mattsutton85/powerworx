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

    if( states.red ){
        return _pwxFlag( 'red', 'critical' )
    }else if( states.black ){
        return _pwxFlag( 'penalty', 'warning' )
    }else if( states.repair ){
        return _pwxFlag( 'meatball', 'warning' )
    }else if( states.caution || states.cautionWaving || states.yellow || states.yellowWaving ){
        return _pwxFlag( 'yellow', 'warning' )
    }else if( states.debris ){
        return _pwxFlag( 'debris', 'warning' )
    }else if( states.blue ){
        return _pwxFlag( 'blue', 'warning' )
    }else if( states.lapToGreen ){
        return _pwxFlag( 'formation', 'informational' )
    }else if( states.white ){
        return _pwxFlag( 'white', 'informational' )
    }else if( states.checkered ){
        return _pwxFlag( 'checkered', 'informational' )
    }
    return _pwxFlag( 'green', 'informational' )
}