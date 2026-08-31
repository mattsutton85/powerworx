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
}