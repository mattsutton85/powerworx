declare function $prop(
    val: string
): unknown

declare function _pwxProp(
    val: any,
    x: any|null,
    y: any|null,
    z: any|null,
): number|string|boolean

declare function _pwxString(
    val: any,
    fallback: string
): string

declare function _pwxNumber(
    val: any,
    fallback: number,
    decimals: number
): number