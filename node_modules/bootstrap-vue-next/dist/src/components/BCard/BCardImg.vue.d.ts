import type { BImgProps, Booleanish } from '../../types';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    bottom?: Booleanish | undefined;
    top?: Booleanish | undefined;
} & BImgProps>, {
    bottom: boolean;
    top: boolean;
    blank: undefined;
    blankColor: undefined;
    block: undefined;
    center: undefined;
    end: undefined;
    fluid: undefined;
    fluidGrow: undefined;
    height: undefined;
    lazy: undefined;
    rounded: undefined;
    roundedBottom: undefined;
    roundedEnd: undefined;
    roundedStart: undefined;
    roundedTop: undefined;
    sizes: undefined;
    src: undefined;
    srcset: undefined;
    start: undefined;
    thumbnail: undefined;
    width: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    bottom?: Booleanish | undefined;
    top?: Booleanish | undefined;
} & BImgProps>, {
    bottom: boolean;
    top: boolean;
    blank: undefined;
    blankColor: undefined;
    block: undefined;
    center: undefined;
    end: undefined;
    fluid: undefined;
    fluidGrow: undefined;
    height: undefined;
    lazy: undefined;
    rounded: undefined;
    roundedBottom: undefined;
    roundedEnd: undefined;
    roundedStart: undefined;
    roundedTop: undefined;
    sizes: undefined;
    src: undefined;
    srcset: undefined;
    start: undefined;
    thumbnail: undefined;
    width: undefined;
}>>>, {
    fluid: Booleanish;
    start: Booleanish;
    end: Booleanish;
    center: Booleanish;
    src: string;
    srcset: string | string[];
    width: string | number;
    height: string | number;
    top: Booleanish;
    lazy: Booleanish;
    bottom: Booleanish;
    rounded: Booleanish | import("../../types").RadiusElement;
    roundedTop: Booleanish | import("../../types").RadiusElement;
    roundedBottom: Booleanish | import("../../types").RadiusElement;
    roundedStart: Booleanish | import("../../types").RadiusElement;
    roundedEnd: Booleanish | import("../../types").RadiusElement;
    block: Booleanish;
    blank: Booleanish;
    blankColor: string;
    fluidGrow: Booleanish;
    sizes: string | string[];
    thumbnail: Booleanish;
}, {}>;
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
