declare function $prop(
    name: string
): unknown

declare function _pwxTime(
    rawSeconds: number,
    millis: boolean,
    symbol: boolean
): string

declare function _pwxNumber(
    value: any,
    fallback: number|string,
    decimals: number,
): number|string

declare function _pwxString(
    value: any,
    fallback?: string
): string

declare function _pwxProp(
    prop: any,
): number|string

declare function _pwxColour( prop: any): string

declare function _pwxUiColour( theme: object, element: string, state: string ): string