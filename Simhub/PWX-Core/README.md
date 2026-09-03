# PWX SimHub Core
PWX Core is the base binding engine for all PWX displays and hardware interfaces. 
PWX Core files must be placed in the global Simhub extensions folder eg `C:\Program Files (x86)\SimHub\JavascriptExtensions`

---

## API format
PWX Core's API is broken into the following components:
- [Car data](#carData)
- [Circuit data](#circuitData)
- [Driver data](#driverData)
- [Lap data](#lapData)
- [Opponent data](#opponentData)
- [Session data](#sessionData)

---

## <a id="carData"></a>Car data

### pwx.core.data.car
General car information

| Function                                 | Return type |
|------------------------------------------|-------------|
| `pwx.core.data.car.id()`                 | string      |
| `pwx.core.data.car.class()`              | string      |
| `pwx.core.data.car.model()`              | string      |

### pwx.core.data.car.brake
Braking system data

| Function                                 | Return type |
|------------------------------------------|-------------|
| `pwx.core.data.car.brake.bias()`         | number      |
| `pwx.core.data.car.brake.abs.fitted()`   | boolean     |
| `pwx.core.data.car.brake.abs.active()`   | boolean     |
| `pwx.core.data.car.brake.abs.setting()`  | string      |

### pwx.core.data.car.engine
Engine data

| Function                                 | Return type |
|------------------------------------------|-------------|
| `pwx.core.data.car.engine.rpm.current()` | number      |
| `pwx.core.data.car.engine.rpm.idle()`    | number      |
| `pwx.core.data.car.engine.rpm.max()`     | number      |
| `pwx.core.data.car.engine.rpm.redline()` | number      |
| `pwx.core.data.car.engine.rpm.current()` | number      |
| `pwx.core.data.car.engine.speed.kmh()`   | number      |
| `pwx.core.data.car.engine.speed.mph()`   | number      |
| `pwx.core.data.car.engine.map()`         | string      |

### pwx.core.data.car.gearbox
Gearbox data

| Function                                              | Return type |
|-------------------------------------------------------|-------------|
| `pwx.core.data.car.gearbox.gear()`                    | number      |
| `pwx.core.data.car.gearbox.shift.first()`             | number      |
| `pwx.core.data.car.gearbox.shift.last()`              | number      |
| `pwx.core.data.car.gearbox.shift.point()`             | number      |
| `pwx.core.data.car.gearbox.shift.blink()`             | number      |
| `pwx.core.data.car.gearbox.shift.progress( numLeds )` | boolean     |

### pwx.core.data.car.tc
Traction control data

| Function                         | Return type |
|----------------------------------|-------------|
| `pwx.core.data.car.tc.fitted()`  | boolean     |
| `pwx.core.data.car.tc.active()`  | boolean     |
| `pwx.core.data.car.tc.setting()` | string      |

---

## <a id="circuitData"></a> Circuit data

---

## <a id="driverData"></a>Driver data

---

## <a id="lapData"></a>Lap data

---

## <a id="opponentData"></a>Opponent data

---

## <a id="sessionData"></a>Session data
