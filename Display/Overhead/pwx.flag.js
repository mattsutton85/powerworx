var pwx = pwx || {}
pwx.flag = pwx.flag || {}

pwx.flag.state = function(){

    const states = {
        black: _pwxProp( pwx.config.flags.black ),
        blue: _pwxProp( pwx.config.flags.blue ),
        caution: _pwxProp( pwx.config.flags.caution ),
        cautionWaving: _pwxProp( pwx.config.flags.cautionWaving ),
        checkered: _pwxProp( pwx.config.flags.checkered ),
        crossed: _pwxProp( pwx.config.flags.crossed ),
        debris: _pwxProp( pwx.config.flags.debris ),
        disqualify: _pwxProp( pwx.config.flags.disqualify),
        lapToGreen: _pwxProp( pwx.config.flags.lapToGreen ),
        red: _pwxProp( pwx.config.flags.red),
        repair: _pwxProp( pwx.config.flags.repair ),
        white: _pwxProp( pwx.config.flags.white),
        yellow: _pwxProp( pwx.config.flags.yellow),
        yellowWaving: _pwxProp( pwx.config.flags.yellowWaving ),
    }

    if( states.red ){
        return 'RED'
    }
    if( states.caution || states.cautionWaving || states.yellow || states.yellowWaving ){
        return 'YELLOW'
    }
    if( states.debris ){
        return 'DEBRIS'
    }
    if( states.blue ){
        return 'BLUE'
    }
    if( states.repair ){
        return 'MEATBALL'
    }
    if( states.lapToGreen ){
        return 'FORMATION'
    }
    if( states.white ){
        return 'WHITE'
    }
    if( states.checkered ){
        return 'CHECKER'
    }
    return 'GREEN'
}

pwx.flag.image = function(){
    return pwx.flag.state().toLowerCase()
}