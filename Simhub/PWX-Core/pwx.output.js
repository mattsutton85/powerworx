function _pwxString(val, fallback = ''){
    if(val)
        return String(val)
    return String(fallback)
}

function _pwxNumber(val, fallback = 0, decimals = 0){
    if(!val || isNaN(val))
        return Number(fallback).toFixed(decimals)
    return Number(val).toFixed(decimals)
}

function _pwxBoolean(value, fallback) {
    if (fallback === undefined) {
        fallback = false;
    }
    if (value === true || value === 1)
        return true;
    if (value === false || value === 0)
        return false;
    if (typeof value === 'string') {
        var normalised = value.toLowerCase().trim();
        if (normalised === 'true' || normalised === '1')
            return true;
        if (normalised === 'false' || normalised === '0')
            return false;
    }
    return fallback;
}

function _pwxTimeSession(seconds){
    const time = __pwxPrepareTime(seconds)
    if( !time.valid || time.zero )
        return '--:--'
    let str = ''
    if( time.hours > 0 )
        str += String( time.hours ) + ':'
    str += String( time.minutes ).padStart(2,'0') + ':' + String( time.seconds ).padStart(2,'0')
    return _pwxString( str )
}

function _pwxTimeLap(seconds){
    const time = __pwxPrepareTime(seconds)
    if( !time.valid || time.zero || time.seconds <= 1 )
        return '-:--.---'
    return _pwxString( String( time.minutes ) + ':' + String( time.seconds ).padStart(2,'0') + '.' + String( time.milliseconds ).padStart(3,'0') )
}

function _pwxTimeDelta(seconds, padding = 3){
    const time = __pwxPrepareTime(seconds)
    if( !time.valid )
        return '-.---'
    if( time.zero )
        return '±0.000'
    const sign = ( time.negative ) ? '-' : '+'
    return _pwxString( sign + String( time.seconds ) + '.' + String( time.milliseconds ).padStart(padding,'0') )
}

function __pwxPrepareTime(rawSeconds){
    const raw = Number(rawSeconds);
    if (!isFinite(raw)) {
        return {
            raw: rawSeconds,
            valid: false,
            totalMilliseconds: 0,
            totalSeconds: 0,
            totalMinutes: 0,
            negative: false,
            zero: true,
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0
        };
    }
    const totalMilliseconds = Math.round(Math.abs(raw) * 1000);
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const totalMinutes = Math.floor(totalMilliseconds / 60000);
    return {
        raw: raw,
        valid: true,
        totalMilliseconds: totalMilliseconds,
        totalSeconds: totalSeconds,
        totalMinutes: totalMinutes,
        negative: raw < 0,
        zero: totalMilliseconds === 0,
        hours: Math.floor(totalMilliseconds / 3600000),
        minutes: Math.floor((totalMilliseconds % 3600000) / 60000),
        seconds: Math.floor((totalMilliseconds % 60000) / 1000),
        milliseconds: totalMilliseconds % 1000
    };
}