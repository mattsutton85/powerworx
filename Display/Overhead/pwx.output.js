function _pwxString(val, fallback = ''){
  if(val)
    return String(val)
  return fallback
}

function _pwxNumber(val, fallback = 0){
  if(!val || NaN(val))
    return fallback
  return Number(val)
}

function _pwxTimeSession(seconds){
  const time = __pwxPrepareTime(seconds)
}

function _pwxTimeLap(seconds){
  const time = __pwxPrepareTime(seconds)
}

function _pwxTimeDelta(seconds){
  const time = __pwxPrepareTime(seconds)
}

function __pwxPrepareTime(rawSeconds){
    const raw = Number(rawSeconds);
    if (!isFinite(raw)) {
        return {
            raw: rawSeconds,
            valid: false,
            totalMilliseconds: 0,
            negative: false,
            zero: true,
            minutes: 0,
            seconds: 0,
            milliseconds: 0
        };
    }
    const totalMilliseconds = Math.round(Math.abs(raw) * 1000);
    return {
        raw: raw,
        valid: true,
        totalMilliseconds: totalMilliseconds,
        negative: raw < 0,
        zero: totalMilliseconds === 0,
        minutes: Math.floor(totalMilliseconds / 60000),
        seconds: Math.floor((totalMilliseconds % 60000) / 1000),
        milliseconds: totalMilliseconds % 1000
    };
}