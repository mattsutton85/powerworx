var pwx = pwx || {}
pwx.dash = pwx.dash || {}
pwx.dash.shift = pwx.dash.shift || {}
pwx.dash.shift.led = pwx.dash.shift.led || {}

pwx.dash.shift.led.state = function( ledNum ){
    const colourThresholds = {
        7: 'Green',
        4: 'Yelo'
    }
    const value = pwx.core.data.car.gearbox.shift.progress()
    let on = false
    let colour = 'Transparent'
    if( value >= ledNum ){
        on = true
        if( ledNum <= 7 ){
            colour = 'Green'
        }else if( ledNum > 7 && ledNum <= 12 ){
            colour = 'Yellow'
        }else if( ledNum > 12 ){
            colour = 'Red'
        }
    }
    return {
        num: ledNum,
        on: on,
        colour: colour,
        blink: false
    }
}