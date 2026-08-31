var pwx = pwx || {}
pwx.flag = pwx.flag || {}

pwx.flag.state = function(){

    const states = {
        black: _pwxProp( pwx.config.data.flag.black ),
        blue: _pwxProp( pwx.config.data.flag.blue ),
        caution: _pwxProp( pwx.config.data.flag.caution ),
        cautionWaving: _pwxProp( pwx.config.data.flag.cautionWaving ),
        checkered: _pwxProp( pwx.config.data.flag.checkered ),
        crossed: _pwxProp( pwx.config.data.flag.crossed ),
        debris: _pwxProp( pwx.config.data.flag.debris ),
        disqualify: _pwxProp( pwx.config.data.flag.disqualify),
        lapToGreen: _pwxProp( pwx.config.data.flag.lapToGreen ),
        red: _pwxProp( pwx.config.data.flag.red),
        repair: _pwxProp( pwx.config.data.flag.repair ),
        white: _pwxProp( pwx.config.data.flag.white),
        yellow: _pwxProp( pwx.config.data.flag.yellow),
        yellowWaving: _pwxProp( pwx.config.data.flag.yellowWaving ),
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