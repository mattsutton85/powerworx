/*
 * PWX Dash
 */

var PWXDash = {}

PWXDash.speed = function(){
    return PWX.format.number( PWX.data.car.speed.mph(), 0, 0 );
}