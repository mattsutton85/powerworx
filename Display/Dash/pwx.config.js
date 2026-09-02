var pwx = pwx || {}
pwx.config = pwx.config || {}

pwx.config.engine = {
    rpm: '',
    gear: '',
    speed: ''
}

function _pwxProp( prop, replace = null ){
    if( replace ){
        prop = prop.replaceAll( '{X}', replace )
    }
    return $prop( prop )
}