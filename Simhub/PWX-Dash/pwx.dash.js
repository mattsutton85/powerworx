var pwx = pwx || {}
pwx.dash = pwx.dash || {}
pwx.dash.shift = pwx.dash.shift || {}
pwx.dash.shift.led = pwx.dash.shift.led || {}

pwx.dash.shift.led.state = function( ledNum ){
    const colourThresholds = {
        7: 'Green',
        4: 'Yelo'
    }
    const progress = pwx.core.data.car.gearbox.shift.progress()
    const shiftPoint = pwx.core.data.car.gearbox.shift.point()
    const shiftBlink = pwx.core.data.car.gearbox.shift.blink()
    const currentRpm = pwx.core.data.car.engine.rpm.current()

    let on = false
    let colour = 'Transparent'
    let blink = false

    if( progress >= ledNum ){
        on = true
        if( ledNum <= 7 ){
            colour = 'Green'
        }else if( ledNum > 7 && ledNum <= 12 ){
            colour = 'Yellow'
        }else if( ledNum > 12 ){
            colour = 'Red'
        }
    }

    if( on && currentRpm >= shiftPoint ){
        blink = true
    }

    if( currentRpm >= shiftBlink ){
        on = true
        colour = 'Red'
        blink = true
    }

    return {
        num: ledNum,
        on: on,
        colour: colour,
        blink: blink
    }
}