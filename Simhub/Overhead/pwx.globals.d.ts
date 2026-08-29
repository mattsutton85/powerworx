declare function $prop(
    name: string
): unknown

declare function _pwxNumber( 
    value: any, 
    fallback: number|string,
    decimals: number,
): number|string

declare function _pwxString(
    value: any,
    fallback: string
): string