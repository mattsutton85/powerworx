var pwx = pwx || {}
pwx.dash = pwx.dash || {}
pwx.dash.shift = pwx.dash.shift || {}
pwx.dash.shift.led = pwx.dash.shift.led || {}

pwx.dash.shift.led.state = function( ledNum ){
    const progress = pwx.core.data.car.gearbox.shift.progress()
    const shiftPoint = pwx.core.data.car.gearbox.shift.point()
    const shiftBlink = pwx.core.data.car.gearbox.shift.blink()
    const currentRpm = pwx.core.data.car.engine.rpm.current()
    const limiterOn = pwx.core.data.pit.limiterOn()
    const ledIsOuter = ( [ 1, 2, 15, 16 ].includes( ledNum ) )

    const colourOff = 'Transparent'
    const colourGreen = '#6cfc17'
    const colourYellow = '#f7d00f'
    const colourRed = '#ff000d'
    const colourPurple = '#ff03f9';

    let ledOn = false
    let ledColour = colourOff
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

    if( currentRpm >= shiftPoint ){
        ledOn = true
        ledColour = colourGreen
        ledBlink = true
    }

    if( currentRpm >= shiftBlink ){
        ledOn = true
        ledColour = colourRed
        ledBlink = true
    }

    if( limiterOn ){
        if( ledIsOuter ){
            ledOn = true
            ledColour = colourPurple
            ledBlink = true
        }
    }

    return {
        num: ledNum,
        on: ledOn,
        colour: ledColour,
        blink: ledBlink
    }
}