var pwx = pwx || {}
pwx.core = pwx.core || {}
pwx.dash = pwx.dash || {}

pwx.dash.layers = function(){
    const pitBox = pwx.core.data.pit.box()
    const pitLane = pwx.core.data.pit.lane()
    const pitLimiter = pwx.core.data.pit.limiter()
    const flag = pwx.core.data.flag.current()
    let layers = {
        pitBox: pitBox,
        pitLane: pitLane,
        pitLimiter: pitLimiter,
        flag: ( flag.name !== 'green' )
    }
    return layers
}

pwx.dash.flag = function(){
    return pwx.core.data.flag.current()
}

pwx.dash.led = function( ledNum ){
    
    const state = {
        rpm: pwx.core.data.engine.rpm(),
        shift: {
            point: pwx.core.data
        }
    }
    
    let led = {
        on: false,
        colour: pwx.core.config.theme.colour.transaprent.hex,
        flash: false,
        flashInterval: null
    }
    
    const isOuter = ([1,2,15,16]).includes(ledNum)
    const 
}

pwx.dash.firmware.version = function(){
    return _pwxString( '1.0' )
}

