function _pwxString( val, fallback = '' ){
  if(val)
    return String(val)
  return fallback
}

function _pwxNumber( val, fallback = 0){
  if(!val || NaN(val))
    return fallback
  return Number(val)
}

function _pwxTime(seconds){
}

function __pwxPrepareTime(rawSeconds){
  const seconds = Math.abs( Number(rawSeconds) );
  const minutes = Math.floor(rawSeconds / 60);
  const remainingSeconds = seconds % 60;

  const wholeSeconds = Math.floor(remainingSeconds);
  const milliseconds = Math.round((remainingSeconds - wholeSeconds) * 1000);

  return {
    raw: rawSeconds,
    minutes: minutes,
    seconds: wholeSeconds,
    milliseconds: milliseconds
  }
}