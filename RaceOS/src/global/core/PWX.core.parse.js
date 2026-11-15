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

_PWXCore.parse.boolean = function( property ){
    var value = _PWXCore.read( property );
    if (typeof value === 'boolean') {
        return value;
    }
    if (typeof value === 'number') {
        if (value === 1) return true;
        if (value === 0) return false;
        return null;
    }
    if (typeof value === 'string') {
        value = value.replace(/^\s+|\s+$/g, '').toLowerCase();

        if (value === 'true' || value === '1') return true;
        if (value === 'false' || value === '0') return false;
    }
    return null;
}

_PWXCore.parse.string = function( property ){
    return String( _PWXCore.read( property ) )
}