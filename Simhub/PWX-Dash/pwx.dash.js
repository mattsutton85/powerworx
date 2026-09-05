var pwx = pwx || {}
pwx.dash = pwx.dash || {}
pwx.dash.shift = pwx.dash.shift || {}
pwx.dash.shift.led = pwx.dash.shift.led || {}
pwx.dash.firmware = pwx.dash.firmware || {}

pwx.dash.state = function(){
    const flag = pwx.core.data.flag.current()
    const pitLimiter = pwx.core.data.pit.limiter()
    if( limiter )
        return {
            name: 'pit'
        }
    if ( flag )
        return {
            name: 'flag',
            flag: {
                name: flag.name,
                type: flag.type
            }
        }
    return {
        name: 'normal'
    }
}

pwx.dash.shift.led.state = function( ledNum ){

    const state = pwx.dash.state()

    const shift = {
        progress: pwx.core.data.car.gearbox.shift.progress(),
        point: {
            target: pwx.core.data.car.gearbox.shift.point(),
            lead: 150,
            overrun: 100
        }
        blink: pwx.core.data.car.gearbox.shift.blink()
    }
    
    const rpm = pwx.core.data.car.engine.rpm.current()
    
    const isShiftWindow = (
        ( rpm >= ( shift.point.target - shift.point.lead ) ) &&
        ( rpm <= ( shift.point.target + shift.point.overrun ) )
    )

    let led = {
        num: ledNum,
        on: false,
        colour: pwx.core.theme.colour.transparent.hex,
        blink: false,
        outer: [ 1, 2, 15, 16 ].includes( ledNum )
    }

    // Normal progressive shift LEDs
    if( shift.progress >= ledNum ){
        led.on = true
        if( ledNum <= 7 ){
            led.colour = pwx.core.config.theme.colour.cyan.hex
        }else if( ledNum <= 13 ){
            led.colour = pwx.core.config.theme.colour.yellow.hex
        }else{
            led.colour = pwx.core.config.theme.colour.red.hex
        }
    }

    // Redline bar priortiy
    if( rpm >= shift.blink ){
        led.on = true
        led.colour = pwx.core.config.theme.colour.red.hex
        led.blink = true
    }
    
    // Shift point takes final priority of the bar
    if( isShiftWindow ){
        led.on = true
        led.colour = pwx.core.config.theme.colour.green.hex
        led.blink = true
    }

    // Context mode takes priority on outer LEDs
    if( led.outer ){
        if( state.name === 'pit' ){
            led.on = true
            led.colour = pwx.core.config.theme.colour.purple.hex
            led.blink = true
        }else if( state.name === 'flag' ){
            led.on = true
            led.blink = true
            switch( state.flag.name ){
                case 'red':
                    led.colour = pwx.core.config.theme.colour.red.hex
                    break
                case 'debris':
                case 'yellow':
                    led.colour = pwx.core.config.theme.colour.yellow.hex
                    break
                case 'meatball':
                    led.colour = pwx.core.config.theme.colour.orange.hex
                    break
                case 'blue':
                    led.colour = pwx.core.config.theme.colour.blue.hex
                    break
                default:
                    led.colour = pwx.core.config.theme.colour.white.hex
                    break
            }
        }
    }
    return led
}

pwx.dash.firmware.version = function(){
    return _pwxString( '1.0' )
}