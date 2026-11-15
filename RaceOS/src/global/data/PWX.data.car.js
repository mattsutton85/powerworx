/*
Parsed car telemetry live data
 */

PWX.data.car.id = function () {
    return _PWXCore.parse.string( _PWXCore.props.car.id )
}

PWX.data.car.model = function(){
    return _PWXCore.parse.string( _PWXCore.props.car.model )
}

PWX.data.car.class = function(){
    return _PWXCore.parse.string( _PWXCore.props.car.class )
}

PWX.data.car.speed.kph = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.speedKmh )
}

PWX.data.car.speed.mph = function(){
    var speed = _PWXCore.parse.number( _PWXCore.props.car.speedKmh )
    return speed === null ? null : speed * 0.621371;
}

PWX.data.car.engine.rpm.current = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.current )
}

PWX.data.car.engine.rpm.percent = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.percentage )
}

PWX.data.car.engine.rpm.idle = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.idle )
}

PWX.data.car.engine.rpm.max = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.max )
}

PWX.data.car.engine.rpm.redline = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.rpm.redline )
}

PWX.data.car.limiter.on = function(){
    return _PWXCore.parse.boolean( _PWXCore.props.car.limiter )
}

PWX.data.car.engine.rpm.lights = function(){

    var total = 16;
    var rpm = PWX.data.car.engine.rpm.current();
    // Prefer iRacing's shift target
    var nativeShift = _PWXCore.parse.number(
        _PWXCore.props.car.gearbox.shift.point
    );
    var source = 'iracing';
    var target = nativeShift;
    // Fall back to SimHub's gear-specific redline
    if( target === null || target <= 0 ){
        target = _PWXCore.parse.number(
            _PWXCore.props.car.engine.rpm.redline
        );
        source = 'redline';
    }
    // No valid telemetry
    if( rpm === null || target === null || target <= 0 ){
        return {
            count: 0,
            mode: 'off',
            source: 'none',
            target: null
        };
    }
    // PWX progressive illumination starts at 75%
    // of the shift target, regardless of iRacing's
    // native FirstRPM threshold.
    var first = target * 0.75;
    // Native blink threshold, or 100 RPM beyond target
    var blink = _PWXCore.parse.number(
        _PWXCore.props.car.gearbox.shift.blink
    );
    if( blink === null || blink <= target ){
        blink = target + 100;
    }
    // Progressive illumination
    var progress = (rpm - first) / (target - first);
    progress = Math.max(0, Math.min(1, progress));
    var count = Math.ceil(progress * total);
    var mode = 'building';
    if( rpm >= blink ){
        mode = 'late';
        count = total;
    }
    else if( rpm >= target ){
        mode = 'shift';
        count = total;
    }
    return {
        count: count,
        mode: mode,
        rpm: rpm,
        first: first,
        target: target,
        blink: blink,
        source: source
    };
};


PWX.data.car.engine.oil.temperature = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.oil.temperature )
}

PWX.data.car.engine.oil.pressure = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.oil.pressure )
}

PWX.data.car.engine.water.temperature = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.engine.water.temperature )
}

PWX.data.car.fuel.remaining.litres = function (){
    return _PWXCore.parse.number( _PWXCore.props.car.fuel.remaining.litres )
}

PWX.data.car.fuel.remaining.laps = function (){
    return _PWXCore.parse.number( _PWXCore.props.car.fuel.remaining.laps )
}

PWX.data.car.assists.abs.setting = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.assists.abs.setting )
}

PWX.data.car.assists.tc.setting = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.assists.tc.setting )
}

PWX.data.car.brake.bias = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.brake.bias )
}

PWX.data.car.brake.percentage = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.brake.percentage )
}

PWX.data.car.gearbox.gear = function(){
    return _PWXCore.parse.string( _PWXCore.props.car.gearbox.gear )
}

PWX.data.car.throttle.percentage = function(){
    return _PWXCore.parse.number( _PWXCore.props.car.throttle.percentage )
}