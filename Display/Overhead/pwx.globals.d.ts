declare function $prop(
    name: string
): unknown

declare function _pwxTimeSession(
    rawSeconds: number
): string

declare function _pwxTimeLap(
    rawSeconds: number
): string

declare function _pwxTimeDelta(
    rawSeconds: number,
    padding: number
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