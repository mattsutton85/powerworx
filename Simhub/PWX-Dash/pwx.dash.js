var pwx = pwx || {}
pwx.dash = pwx.dash || {}
pwx.dash.shift = pwx.dash.shift || {}
pwx.dash.shift.led = pwx.dash.shift.led || {}

pwx.dash.shift.led.state = function( ledNum ){
    return {
        num: ledNum,
        on: false,
        color: null,
        blink: false
    }
}