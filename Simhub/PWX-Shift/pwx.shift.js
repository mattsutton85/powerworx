var pwx = pwx || {}
pwx.shift = pwx.shift || {}

pwx.shift.state = function( numLeds ){

    const shift = {
        progress: pwx.core.data.car.gearbox.shift.progress( numLeds ),
        point: pwx.core.data.car.gearbox.shift.point(),
        blink: pwx.core.data.car.gearbox.shift.blink()
    }

    const rpm = pwx.core.data.car.engine.rpm.current()
    const outerLeds = [ 1, 2, numLeds, numLeds - 1 ]

    let state = {
        num: numLeds,
        leds: []
    }

    for (let i = 1; i <= numLeds; i++) {

        let led = {
            num: i,
            on: false,
            colour: __pwxShiftLedColour( 'Transparent' ),
            blink: false,
            blinkRate: null,
            outer: outerLeds.includes( i )
        }
        
        if( i <= shift.progress ){
            led.on = true
            if ( i <= 7 ){
                led.colour = __pwxShiftLedColour( 'Transparent' )
            }
        }

        // Logic

        state.leds.push( led )
    }

    return state
}

function __pwxShiftLedColour( colour ){
    return {
        hex: pwx.core.theme.colour[colour].hex,
        r: pwx.core.theme.colour[colour].r,
        g: pwx.core.theme.colour[colour].g,
        b: pwx.core.theme.colour[colour].b
    }
}