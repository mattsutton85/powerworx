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
    const totalMilliseconds = Math.round(Math.abs(raw) * 1000);
    const minutes = Math.floor(totalMilliseconds / 60000);
    const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    const milliseconds = totalMilliseconds % 1000;
    return {
        raw: raw,
        negative: raw < 0,
        zero: totalMilliseconds === 0,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds
    };
}