var pwx = pwx || {}
pwx.dash = pwx.dash || {}
pwx.dash.shift = pwx.dash.shift || {}
pwx.dash.shift.led = pwx.dash.shift.led || {}

pwx.dash.state = function(){
    const flag = pwx.core.data.flag.current()
    const limiter = pwx.core.data.pit.limiterOn()
    if( limiter )
        return 'pit'
    if ( flag.warning )
        return 'flag'
    return 'normal'
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

    if( rpm >= shift.point ){
        led.on = true
        led.colour = pwx.core.theme.colour.green
        led.blink = true
    }

    if( rpm >= shift.blink ){
        led.on = true
        led.colour = pwx.core.theme.colour.red
        led.blink = true
    }

    if( state === 'flag' ){
        if( led.outer ){
            led.on = true
            led.colour = pwx.core.theme.colour.yellow
            led.blink = true
        }
    }

    if( state === 'pit' ){
        if( led.outer ){
            led.on = true
            led.colour = pwx.core.theme.colour.purple
            led.blink = true
        }
    }

    return led
}