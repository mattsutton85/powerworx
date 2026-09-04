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
        flag.name = 'red'
        flag.warning = true
    }else if( states.black ){
        flag.name = 'penalty'
        flag.warning = true
    }else if( states.repair ){
        flag.name = 'meatball'
        flag.warning = true
    }else if( states.caution || states.cautionWaving || states.yellow || states.yellowWaving ){
        flag.name = 'yellow'
        flag.warning = true
    }else if( states.debris ){
        flag.name = 'debris'
        flag.warning = true
    }else if( states.blue ){
        flag.name = 'blue'
        flag.warning = true
    }else if( states.lapToGreen ){
        flag.name = 'formation'
        flag.informational = true
    }else if( states.white ){
        flag.name = 'white'
        flag.informational = true
    }else if( states.checkered ){
        flag.name = 'checkered'
        flag.informational = true
    }
    return flag
}
