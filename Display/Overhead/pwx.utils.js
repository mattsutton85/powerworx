function _pwxNumber( val, fallback = 0, decimals = 0 ){
    if (val == null || val === "" || isNaN(val)) return fallback
    return Number(val).toFixed(decimals);
}

function _pwxString( val, fallback = '' ){
    if( !val ) return fallback
    return String(val)
}

function _pwxTime( rawSeconds, minutePadding = 1, millis = false, symbol = false )
{
    const seconds = Math.abs( Number(rawSeconds) );
    const minutes = Math.floor(rawSeconds / 60);
    const remainingSeconds = seconds % 60;

    const wholeSeconds = Math.floor(remainingSeconds);
    const milliseconds = Math.round((remainingSeconds - wholeSeconds) * 1000);

    let str = ''
    if( symbol ){
        str += ( rawSeconds >= 0 ) ? '+' : '-'
    }
    str += String(minutes).padStart(minutePadding,'0') + ':' + String(wholeSeconds).padStart(2, "0")
    if( millis )
        str += '.' + String(milliseconds).padStart(3, "0");
    return str
}

function _pwxUiColour( theme, element, state )
{
    return theme[element][state]
}