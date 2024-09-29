import { BvCarouselEvent } from '../../utils';
import type { Booleanish } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    background?: string | undefined;
    controls?: Booleanish | undefined;
    controlsNextText?: string | undefined;
    controlsPrevText?: string | undefined;
    fade?: Booleanish | undefined;
    id?: string | undefined;
    imgHeight?: string | undefined;
    imgWidth?: string | undefined;
    indicators?: Booleanish | undefined;
    indicatorsButtonLabel?: string | undefined;
    interval?: string | number | undefined;
    keyboard?: Booleanish | undefined;
    modelValue?: number | undefined;
    noHoverPause?: Booleanish | undefined;
    noTouch?: Booleanish | undefined;
    noWrap?: Booleanish | undefined;
    ride?: Booleanish | "carousel" | undefined;
    rideReverse?: Booleanish | undefined;
    touchThreshold?: string | number | undefined;
}>, {
    background: undefined;
    controls: boolean;
    controlsNextText: string;
    controlsPrevText: string;
    fade: boolean;
    id: undefined;
    imgHeight: undefined;
    imgWidth: undefined;
    indicators: boolean;
    indicatorsButtonLabel: string;
    interval: number;
    keyboard: boolean;
    modelValue: number;
    noHoverPause: boolean;
    noTouch: boolean;
    noWrap: boolean;
    ride: boolean;
    rideReverse: boolean;
    touchThreshold: number;
}>, {
    next: () => void;
    pause: import('../../../node_modules/@vueuse/shared/index.cjs').Fn;
    prev: () => void;
    resume: import('../../../node_modules/@vueuse/shared/index.cjs').Fn;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number) => void;
    slide: (value: BvCarouselEvent) => void;
    slid: (value: BvCarouselEvent) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    background?: string | undefined;
    controls?: Booleanish | undefined;
    controlsNextText?: string | undefined;
    controlsPrevText?: string | undefined;
    fade?: Booleanish | undefined;
    id?: string | undefined;
    imgHeight?: string | undefined;
    imgWidth?: string | undefined;
    indicators?: Booleanish | undefined;
    indicatorsButtonLabel?: string | undefined;
    interval?: string | number | undefined;
    keyboard?: Booleanish | undefined;
    modelValue?: number | undefined;
    noHoverPause?: Booleanish | undefined;
    noTouch?: Booleanish | undefined;
    noWrap?: Booleanish | undefined;
    ride?: Booleanish | "carousel" | undefined;
    rideReverse?: Booleanish | undefined;
    touchThreshold?: string | number | undefined;
}>, {
    background: undefined;
    controls: boolean;
    controlsNextText: string;
    controlsPrevText: string;
    fade: boolean;
    id: undefined;
    imgHeight: undefined;
    imgWidth: undefined;
    indicators: boolean;
    indicatorsButtonLabel: string;
    interval: number;
    keyboard: boolean;
    modelValue: number;
    noHoverPause: boolean;
    noTouch: boolean;
    noWrap: boolean;
    ride: boolean;
    rideReverse: boolean;
    touchThreshold: number;
}>>> & {
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onSlide?: ((value: BvCarouselEvent) => any) | undefined;
    onSlid?: ((value: BvCarouselEvent) => any) | undefined;
}, {
    fade: Booleanish;
    background: string;
    id: string;
    modelValue: number;
    interval: string | number;
    noHoverPause: Booleanish;
    imgHeight: string;
    imgWidth: string;
    controls: Booleanish;
    controlsNextText: string;
    controlsPrevText: string;
    indicators: Booleanish;
    indicatorsButtonLabel: string;
    keyboard: Booleanish;
    noTouch: Booleanish;
    noWrap: Booleanish;
    ride: Booleanish | "carousel";
    rideReverse: Booleanish;
    touchThreshold: string | number;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
}>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
