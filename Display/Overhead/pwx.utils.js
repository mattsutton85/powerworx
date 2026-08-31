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
    if( [ 'SESSION', 'DELTA' ].includes( format ) ){
        if( typeof seconds === 'undefined' || !seconds || isNaN( seconds ) || seconds <= 1 ){
            if( format === 'LAP' ){
                return '-:--.---'
            }else if( format === 'SESSION' ){
                return '--:--'
            }
        }
    }
    if (seconds == null || isNaN(seconds) || seconds === 0 ) {
        switch( format ){
            case 'LAP':
                return '-:--.---'
            case 'SESSION':
                return '--:--'
            case 'DELTA':
                if( seconds === 0 ){
                    return '0.000'
                }
                return '-.---'
        }
    }

    const formattedSeconds = Math.abs( Number(seconds) );
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = formattedSeconds % 60;

    const wholeSeconds = Math.floor(remainingSeconds);
    const milliseconds = Math.round((remainingSeconds - wholeSeconds) * 1000);

    switch( format ){
        case 'LAP':
            return String(minutes) + ":" + String(wholeSeconds).padStart(2, "0") + "." + String(milliseconds).padStart(3, "0");
        case 'SESSION':
            return String(minutes).padStart(2,"0") + ":" + String(wholeSeconds).padStart(2, "0");
        case 'DELTA':
            const str = ( Number(seconds) < 0 ) ? '-' : '+'
            return str + String(wholeSeconds) + "." + String(milliseconds).padStart(3, "0");
    }
}

function _pwxUiColour( theme, element, state )
{
    return theme[element][state]
}