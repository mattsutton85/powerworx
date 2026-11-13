
/**
 * Number formatter
 */
PWX.format.number = function(value, decimals, placeholder) {
    decimals = decimals == null ? 0 : decimals;
    placeholder = placeholder == null ? '---' : placeholder;
    var number = PWX.parse.number(value);
    if (number === null) {
        return placeholder;
    }
    return number.toFixed(decimals);
};


/**
 * Duration formatter (seconds)
 * M:SS or H:MM:SS
 */
PWX.format.time = function(value, placeholder) {
    placeholder = placeholder == null ? '--:--' : placeholder;
    var seconds = PWX.parse.number(value);
    if (seconds === null || seconds < 0) {
        return placeholder;
    }
    seconds = Math.floor(seconds);
    var h = Math.floor(seconds / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = seconds % 60;
    var pad = function(n) {
        return n < 10 ? '0' + n : String(n);
    };
    if (h > 0) {
        return h + ':' + pad(m) + ':' + pad(s);
    }
    return m + ':' + pad(s);
};


/**
 * Signed timing delta (seconds)
 */
PWX.format.delta = function(value, decimals, placeholder) {
    decimals = decimals == null ? 3 : decimals;
    placeholder = placeholder == null ? '---' : placeholder;
    var number = PWX.parse.number(value);
    if (number === null) {
        return placeholder;
    }
    var absolute = Math.abs(number).toFixed(decimals);
    if (Number(absolute) === 0) {
        return absolute;
    }
    return (number > 0 ? '+' : '-') + absolute;
};
