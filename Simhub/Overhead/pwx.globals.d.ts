declare function $prop(
    name: string
): unknown

declare function _apxNumber( 
    value: any, 
    fallback: number|string,
    decimals: number,
): number|string

declare function _apxString(
    value: any,
    fallback: string
): string