import type { Booleanish, SpinnerType } from '../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    label?: string | undefined;
    role?: string | undefined;
    small?: Booleanish | undefined;
    tag?: string | undefined;
    type?: SpinnerType | undefined;
    variant?: keyof import("../types").BaseColorVariant | null | undefined;
}>, {
    label: undefined;
    role: string;
    small: boolean;
    tag: string;
    type: string;
    variant: null;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    label?: string | undefined;
    role?: string | undefined;
    small?: Booleanish | undefined;
    tag?: string | undefined;
    type?: SpinnerType | undefined;
    variant?: keyof import("../types").BaseColorVariant | null | undefined;
}>, {
    label: undefined;
    role: string;
    small: boolean;
    tag: string;
    type: string;
    variant: null;
}>>>, {
    tag: string;
    type: SpinnerType;
    label: string;
    small: Booleanish;
    role: string;
    variant: keyof import("../types").BaseColorVariant | null;
}, {}>, Readonly<{
    label?: ((props: Record<string, never>) => any) | undefined;
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
