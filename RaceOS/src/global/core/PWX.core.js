/*
 * PWX RaceOS core.
 * This file builds first in the compiler.
 * It is the only place the global namespace PWX is declared,
 * along with an internal utility namespace of _PWXCore.
 * This is to allow other files in the global JS library to
 * reference non SimHub used bindings without combining them
 * into the main PWX namespace
 */

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
        circuit: {
            pit: {}
        },
        driver: {},
        opponent: {},
        session: {
            lap: {
                time: {},
                delta: {}
            },
            time: {}
        }
    },
    format: {},
    theme: {}
}

var _PWXCore = {
    parse: {}
}

_PWXCore.read = function( property ){
    var value = $prop( property );
    return value == null ? null : value;
}