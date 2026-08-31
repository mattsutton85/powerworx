function _pwxNumber( val, fallback = 0, decimals = 0 ){
    if (val == null || val === "" || isNaN(val)) return fallback
    return Number(val).toFixed(decimals);
}

function _pwxString( val, fallback = '' ){
    if( !val ) return fallback
    return String(val)
}

function _pwxTime( seconds, format )
{
    if (seconds == null || isNaN(seconds) || seconds === 0 ) {
        switch( format ){
            case 'LAP':
                return '--:--.---'
            case 'SESSION':
                return '--:--'
            case 'DELTA':
                if( seconds === 0 ){
                    return '0.000'
                }
                return '-.---'
        }
    }

    seconds = Math.abs( Number(seconds) );
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const wholeSeconds = Math.floor(remainingSeconds);
    const milliseconds = Math.round((remainingSeconds - wholeSeconds) * 1000);

    switch( format ){
        case 'LAP':
            return String(minutes) + ":" + String(wholeSeconds).padStart(2, "0") + "." + String(milliseconds).padStart(3, "0");
        case 'SESSION':
            return String(minutes).padStart(2,"0") + ":" + String(wholeSeconds).padStart(2, "0");
        case 'DELTA':
            const str = ( seconds < 0 ) ? '-' : '+'
            return str + String(wholeSeconds) + "." + String(milliseconds).padStart(3, "0");
    }
}

function _pwxUiColour( theme, element, state )
{
    return theme[element][state]
}