import type { BImgProps } from '../types';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BImgProps>, {
    blank: boolean;
    blankColor: string;
    block: boolean;
    center: boolean;
    end: boolean;
    fluid: boolean;
    fluidGrow: boolean;
    height: undefined;
    lazy: boolean;
    sizes: undefined;
    src: undefined;
    srcset: undefined;
    start: boolean;
    thumbnail: boolean;
    width: undefined;
    rounded: boolean;
    roundedBottom: undefined;
    roundedEnd: undefined;
    roundedStart: undefined;
    roundedTop: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BImgProps>, {
    blank: boolean;
    blankColor: string;
    block: boolean;
    center: boolean;
    end: boolean;
    fluid: boolean;
    fluidGrow: boolean;
    height: undefined;
    lazy: boolean;
    sizes: undefined;
    src: undefined;
    srcset: undefined;
    start: boolean;
    thumbnail: boolean;
    width: undefined;
    rounded: boolean;
    roundedBottom: undefined;
    roundedEnd: undefined;
    roundedStart: undefined;
    roundedTop: undefined;
}>>>, {
    fluid: import("../types").Booleanish;
    start: import("../types").Booleanish;
    end: import("../types").Booleanish;
    center: import("../types").Booleanish;
    src: string;
    srcset: string | string[];
    width: string | number;
    height: string | number;
    lazy: import("../types").Booleanish;
    rounded: import("../types").Booleanish | import("../types").RadiusElement;
    roundedTop: import("../types").Booleanish | import("../types").RadiusElement;
    roundedBottom: import("../types").Booleanish | import("../types").RadiusElement;
    roundedStart: import("../types").Booleanish | import("../types").RadiusElement;
    roundedEnd: import("../types").Booleanish | import("../types").RadiusElement;
    block: import("../types").Booleanish;
    blank: import("../types").Booleanish;
    blankColor: string;
    fluidGrow: import("../types").Booleanish;
    sizes: string | string[];
    thumbnail: import("../types").Booleanish;
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
