/*
 * PWX Dash
 */

var PWXDash = {}

PWXDash.speed = function(){
    return PWX.format.number( PWX.data.car.speed.mph(), 0, 0 );
}

PWXDash.shiftLight = function(index){

    var state = PWX.data.car.engine.rpm.lights();
    var off = '#1a1a1a';
    if( index < 1 || index > 16 ){
        return off;
    }
    if( state.mode === 'off' ){
        return off;
    }
    // Flash all LEDs when shifting or over-revving
    if( state.mode === 'shift' || state.mode === 'late' ){
        var flash = Math.floor(
            new Date().getTime() / 180
        ) % 2 === 0;
        if( !flash ) return off;
        return state.mode === 'shift'
            ? '#6cfc17'
            : '#ff2e2e';
    }

    // Not yet illuminated
    if( index > state.count ){
        return off;
    }

    // Progressive illumination
    return index <= 7
        ? '#00edff'
        : '#f3f300';
};