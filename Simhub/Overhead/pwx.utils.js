function _pwxString(value){
    return String(value)
}

function _pwxNumber( val, fallback = 0, decimals = 0 ){
    if (val == null || val === "" || isNaN(val))
        return fallback;
    return Number(val).toFixed(decimals);
}