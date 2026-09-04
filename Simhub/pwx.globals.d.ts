declare function $prop(
    val: string
): unknown

declare function _pwxProp(
    val: any,
    x: string|null,
    y: string|null,
    z: string|null,
): number|string|boolean

declare function _pwxString(
    val: any,
    fallback: string
): string

declare function _pwxBoolean(
    val: any
): boolean

declare function _pwxNumber(
    val: any,
    fallback: number,
    decimals: number
): number

declare function _pwxIRating(
    val: any
): string