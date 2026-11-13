var PWX = {
    data: {
        car: {
            speed: {},
            engine: {
                rpm: {
                    current: {}
                },
                oil: {},
                water: {}
            },
            brake: {},
            assists: {},
            fuel: {
                remaining: {}
            },
            gearbox: {},
            throttle: {}
        },
        circuit: {},
        driver: {},
        session: {}
    },
    format: {}
}

var _PWXCore = {
    parse: {}
}

_PWXCore.read = function( property ){
    var value = $prop( property );
    return value == null ? null : value;
}