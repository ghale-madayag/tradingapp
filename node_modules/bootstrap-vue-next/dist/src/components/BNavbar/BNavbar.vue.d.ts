import type { Booleanish, Breakpoint } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    autoClose?: Booleanish | undefined;
    container?: Booleanish | Breakpoint | "fluid" | undefined;
    fixed?: "top" | "bottom" | undefined;
    print?: Booleanish | undefined;
    sticky?: "top" | "bottom" | undefined;
    tag?: string | undefined;
    toggleable?: Booleanish | Breakpoint | undefined;
    variant?: keyof import("../../types").BaseColorVariant | null | undefined;
}>, {
    autoClose: boolean;
    container: string;
    fixed: undefined;
    print: boolean;
    sticky: undefined;
    tag: string;
    toggleable: boolean;
    variant: null;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    autoClose?: Booleanish | undefined;
    container?: Booleanish | Breakpoint | "fluid" | undefined;
    fixed?: "top" | "bottom" | undefined;
    print?: Booleanish | undefined;
    sticky?: "top" | "bottom" | undefined;
    tag?: string | undefined;
    toggleable?: Booleanish | Breakpoint | undefined;
    variant?: keyof import("../../types").BaseColorVariant | null | undefined;
}>, {
    autoClose: boolean;
    container: string;
    fixed: undefined;
    print: boolean;
    sticky: undefined;
    tag: string;
    toggleable: boolean;
    variant: null;
}>>>, {
    tag: string;
    variant: keyof import("../../types").BaseColorVariant | null;
    fixed: "top" | "bottom";
    print: Booleanish;
    container: Booleanish | Breakpoint | "fluid";
    sticky: "top" | "bottom";
    autoClose: Booleanish;
    toggleable: Booleanish | Breakpoint;
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
