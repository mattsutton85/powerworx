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

