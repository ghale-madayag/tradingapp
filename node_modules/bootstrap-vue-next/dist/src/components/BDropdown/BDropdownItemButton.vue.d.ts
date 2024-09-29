import type { Booleanish } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    active?: Booleanish | undefined;
    activeClass?: any;
    buttonClass?: any;
    disabled?: Booleanish | undefined;
    variant?: keyof import("../../types").BaseColorVariant | null | undefined;
}>, {
    active: boolean;
    activeClass: string;
    buttonClass: undefined;
    disabled: boolean;
    variant: null;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (value: MouseEvent) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    active?: Booleanish | undefined;
    activeClass?: any;
    buttonClass?: any;
    disabled?: Booleanish | undefined;
    variant?: keyof import("../../types").BaseColorVariant | null | undefined;
}>, {
    active: boolean;
    activeClass: string;
    buttonClass: undefined;
    disabled: boolean;
    variant: null;
}>>> & {
    onClick?: ((value: MouseEvent) => any) | undefined;
}, {
    disabled: Booleanish;
    active: Booleanish;
    activeClass: any;
    variant: keyof import("../../types").BaseColorVariant | null;
    buttonClass: any;
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
