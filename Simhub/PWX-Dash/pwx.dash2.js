var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.dash = pwx.dash || {}

pwx.dash.layers = function(){
    const pitBox = pwx.core.data.pit.box()
    const pitLane = pwx.core.data.pit.lane()
    const pitLimiter = pwx.core.data.pit.limiter()
    const flag = pwx.core.data.flag.current()
    let layers = {
        pitBox: pitBox,
        pitLane: pitLane,
        pitLimiter: pitLimiter,
        flag: ( flag.name !== 'green' )
    }
    return layers
}

pwx.dash.led = function( ledNum ){
    const state = {
        rpm: pwx.core.data.engine.rpm(),
        shift: {
            progress: pwx.core.data.car.gearbox.shift.progress(),
            point: {
                target: pwx.core.data.car.gearbox.shift.point(),
                lead: 150,
                overrun: 100
            },
            redline: pwx.core.data.car.gearbox.shift.blink()
        },
        ledOuter = ([1,2,15,16]).includes(ledNum)
    }
    let led = {
        on: false,
        colour: pwx.core.config.theme.colour.transaprent.hex,
        flash: false,
        flashInterval: null
    }
    
    // Standard RPM curve
    if( ledNum <= state.shift.progress ){
        led.on = true
        if( ledNum <= 7 ){
            led.colour = pwx.core.config.theme.colour.cyan.hex
        }else if( ledNum <= 10 ){
            led.colour = pwx.core.config.theme.colour.yellow.hex
        }else if( ledNum <= 13 ){
            led.colour = pwx.core.config.theme.colour.orange.hex
        }else{
            led.colour = pwx.core.config.theme.colour.red.hex
        }
    }
    
    // Redline priority mode
    if( ( state.rpm >= state.shift.redline ) || ( ){
        led.on = true
        led.colour = pwx.core.config.theme.colour.red.hex
        
    }
}

pwx.dash.flag = function(){
    return pwx.core.data.flag.current()
}

pwx.dash.version = function(){
    return _pwxString( '1.0.1' )
}

