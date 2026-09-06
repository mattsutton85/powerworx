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
    
    // Config state
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
    }
    
    // Led object
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
    
    // RPM priority mode
    const isRedline = ( state.rpm >= state.shift.redline )
    const isShiftpoint = (
        ( rpm >= ( shift.point.target - shift.point.lead ) ) &&
        ( rpm <= ( shift.point.target + shift.point.overrun ) )
    )
    if( isRedline || isShiftpoint ){
        led.on = true
        led.colour = pwx.config.theme.colour.red.hex
        led.flash = true
        led.flashInterval = pwx.core.config.flash.critical
        
        // Shift point priority
        if( isShiftpoint ){
            led.colour = pwx.config.theme.colour.green.hex
        }
    }
    
    // Outer LED priority
    if( ([1,2,15,16]).includes(ledNum) ){
        
        // Flag / Pit limiter priority
        const flag = pwx.core.data.flag.current()
        const limiter = pwx.core.data.pit.limiter()
        if( ( flag.type !== 'informational' ) || limiter ){
            led.on = true
            led.colour = pwx.core.config.theme.colour.yellow.hex
            led.flash = true
            led.flashInterval = pwx.core.config.flash.warning
            if( limiter ){
                led.colour = pwx.core.config.theme.colour.purple.hex
            }
        }
    }
    
    return led
}

pwx.dash.flag = function(){
    return pwx.core.data.flag.current()
}

pwx.dash.version = function(){
    return _pwxString( '1.0.1' )
}

