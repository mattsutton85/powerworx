var pwx = pwx || {}
pwx.dash = pwx.dash || {}
pwx.dash.shift = pwx.dash.shift || {}
pwx.dash.shift.led = pwx.dash.shift.led || {}

pwx.dash.shift.led.state = function( ledNum ){
    const progress = pwx.core.data.car.gearbox.shift.progress()
    const shiftPoint = pwx.core.data.car.gearbox.shift.point()
    const shiftBlink = pwx.core.data.car.gearbox.shift.blink()
    const currentRpm = pwx.core.data.car.engine.rpm.current()

    const colourOff = 'Transparent'
    const colourGreen = '#6cfc17'
    const colourYellow = '#f7d00f'
    const colourRed = '#ff000d'

    let ledOn = false
    let ledColour = 'Transparent'
    let ledBlink = false

    if( progress >= ledNum ){
        ledOn = true
        if( ledNum <= 7 ){
            ledColour = colourGreen
        }else if( ledNum > 7 && ledNum <= 12 ){
            ledColour = colourYellow
        }else if( ledNum > 12 ){
            ledColour = colourRed
        }
    }

    if( ledOn && currentRpm >= shiftPoint ){
        ledBlink = true
    }

    if( currentRpm >= shiftBlink ){
        ledOn = true
        ledColour = colourRed
        ledBlink = true
    }

    return {
        num: ledNum,
        on: ledOn,
        colour: ledColour,
        blink: ledBlink
    }
}