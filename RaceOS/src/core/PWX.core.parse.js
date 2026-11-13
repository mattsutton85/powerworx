/*
Simple data parser
 */

_PWXCore.parse.number = function( property ){
    var value = _PWXCore.read( property );
    if (value === null || value === '') {
        return null;
    }
    var number = Number(value);
    return isFinite(number) ? number : null;
}

_PWXCore.parse.string = function( property ){
    return String( _PWXCore.read( property ) )
}