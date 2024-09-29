import type { ColorVariant, PlaceholderAnimation, PlaceholderSize } from '../../types';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    animation?: PlaceholderAnimation | undefined;
    cols?: string | number | undefined;
    size?: PlaceholderSize | undefined;
    tag?: string | undefined;
    variant?: keyof import("../../types").BaseColorVariant | null | undefined;
    width?: string | number | undefined;
    wrapperTag?: string | undefined;
}>, {
    animation: undefined;
    cols: number;
    size: string;
    tag: string;
    variant: null;
    width: undefined;
    wrapperTag: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    animation?: PlaceholderAnimation | undefined;
    cols?: string | number | undefined;
    size?: PlaceholderSize | undefined;
    tag?: string | undefined;
    variant?: keyof import("../../types").BaseColorVariant | null | undefined;
    width?: string | number | undefined;
    wrapperTag?: string | undefined;
}>, {
    animation: undefined;
    cols: number;
    size: string;
    tag: string;
    variant: null;
    width: undefined;
    wrapperTag: string;
}>>>, {
    tag: string;
    cols: string | number;
    width: string | number;
    size: PlaceholderSize;
    variant: ColorVariant | null;
    animation: PlaceholderAnimation;
    wrapperTag: string;
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
