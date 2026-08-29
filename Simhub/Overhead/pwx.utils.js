function _pwxString(value){
    return String(value)
}

function _pwxInt(value, fallback = 0){
    const int = parseInt(value)
    return (int) ? int : fallback
}