var pwx = pwx || {}
pwx.dash = pwx.dash || {}
pwx.dash.shift = pwx.dash.shift || {}
pwx.dash.shift.led = pwx.dash.shift.led || {}

pwx.dash.shift.led.state = function( ledNum ){
    const value = pwx.core.data.car.gearbox.shift.progress()
    let on = false
    let colour = 'Transparent'
    if( value >= ledNum ){
        on = true
        colour = 'Yellow'
    }
    return {
        num: ledNum,
        on: on,
        colour: colour,
        blink: false
    }
}