var pwx = pwx || {}
pwx.dash = pwx.dash || {}
pwx.dash.shift = pwx.dash.shift || {}
pwx.dash.shift.led = pwx.dash.shift.led || {}

pwx.dash.state = function(){
    const flag = pwx.core.data.flag.current()
    const limiter = pwx.core.data.pit.limiterOn()
    if( limiter )
        return {
            name: 'pit',
            flag: null
        }
    if ( flag.warning )
        return {
            name: 'flag',
            flag: flag.name
        }
    return {
        name: 'normal',
        flag: null
    }
}

pwx.dash.shift.led.state = function( ledNum ){

    const state = pwx.dash.state()
    const shift = {
        progress: pwx.core.data.car.gearbox.shift.progress(),
        point: pwx.core.data.car.gearbox.shift.point(),
        blink: pwx.core.data.car.gearbox.shift.blink()
    }

    let led = {
        num: ledNum,
        on: false,
        colour: pwx.core.theme.colour.transparent,
        blink: false,
        outer: ( [ 1, 2, 15, 16 ].includes( ledNum ) )
    }

    const rpm = pwx.core.data.car.engine.rpm.current()

    if( shift.progress >= ledNum ){
        led.on = true
        if( ledNum <= 7 ){
            led.colour = pwx.core.theme.colour.green
        }else if( ledNum > 7 && ledNum <= 12 ){
            led.colour = pwx.core.theme.colour.yellow
        }else if( ledNum > 12 ){
            led.colour = pwx.core.theme.colour.red
        }
    }

    // Shift point - flash all LEDS green
    if( rpm >= shift.point ){
        led.on = true
        led.colour = pwx.core.theme.colour.green
        led.blink = true
    }
    
    // Redline - flash all LEDS red
    if( rpm >= shift.blink ){
        led.on = true
        led.colour = pwx.core.theme.colour.red
        led.blink = true
    }

    // Pit / Flag mode - 
    if( [ 'pit', 'flag' ].includes( state.name ) ){
        if( led.outer ){
            led.on = true
            led.blink = true
            if( state.name === 'pit'{
                led.colour = pwx.core.theme.colour.purple
            }else{
                switch( state.flag ){
                    case 'red':
                        led.colour = pwx.core.theme.colour.red
                        break
                    case 'debris':
                    case 'yellow':
                        led.colour = pwx.core.theme.colour.yellow
                        break
                    case 'meatball':
                        led.colour = pwx.core.theme.colour.orange
                        break
                    case 'blue':
                        led.colour = pwx.core.theme.colour.blue
                        break
                    default:
                        led.colour = pwx.core.theme.colour.white
                        break
                }
            }
        }
    }

    return led
}