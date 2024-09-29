import type { Booleanish, ColorExtendables, RadiusElementExtendables } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    overlap?: string | number | undefined;
    size?: string | undefined;
    square?: Booleanish | undefined;
    tag?: string | undefined;
} & ColorExtendables & RadiusElementExtendables>, {
    overlap: number;
    size: undefined;
    square: boolean;
    tag: string;
    rounded: boolean;
    roundedBottom: undefined;
    roundedEnd: undefined;
    roundedStart: undefined;
    roundedTop: undefined;
    bgVariant: null;
    textVariant: null;
    variant: null;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    overlap?: string | number | undefined;
    size?: string | undefined;
    square?: Booleanish | undefined;
    tag?: string | undefined;
} & ColorExtendables & RadiusElementExtendables>, {
    overlap: number;
    size: undefined;
    square: boolean;
    tag: string;
    rounded: boolean;
    roundedBottom: undefined;
    roundedEnd: undefined;
    roundedStart: undefined;
    roundedTop: undefined;
    bgVariant: null;
    textVariant: null;
    variant: null;
}>>>, {
    tag: string;
    size: string;
    variant: keyof import("../../types").BaseColorVariant | null;
    rounded: Booleanish | import("../../types").RadiusElement;
    roundedTop: Booleanish | import("../../types").RadiusElement;
    roundedBottom: Booleanish | import("../../types").RadiusElement;
    roundedStart: Booleanish | import("../../types").RadiusElement;
    roundedEnd: Booleanish | import("../../types").RadiusElement;
    bgVariant: keyof import("../../types").BaseColorVariant | null;
    textVariant: keyof import("../../types").BaseTextColorVariant | null;
    square: Booleanish;
    overlap: string | number;
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
