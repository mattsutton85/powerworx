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

    if( states.red )
        return 'red'
    if( states.black || states.disqualify )
        return 'black'
    if( states.caution || states.cautionWaving || states.yellow || states.yellowWaving )
        return 'yellow'
    if( states.debris )
        return 'debris'
    if( states.blue )
        return 'blue'
    if( states.repair )
        return 'meatball'
    if( states.lapToGreen )
        return 'formation'
    if( states.white )
        return 'white'
    if( states.checkered )
        return 'checkered'
    return 'green'
}
