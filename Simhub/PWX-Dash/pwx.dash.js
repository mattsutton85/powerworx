var pwx = pwx || {}
pwx.dash = pwx.dash || {}
pwx.dash.shift = pwx.dash.shift || {}
pwx.dash.shift.led = pwx.dash.shift.led || {}

pwx.dash.shift.led.state = function( ledNum ){

    const value = pwx.core.data.car.gearbox.shift.progress()

    let on = false
    if( value <= ledNum ){
        on = true
    }

    return {
        num: ledNum,
        on: on,
        colour: 'Transparent',
        blink: false
    }
}