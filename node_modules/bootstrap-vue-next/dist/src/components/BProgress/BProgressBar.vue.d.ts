import type { BProgressBarProps } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BProgressBarProps>, {
    animated: boolean;
    bgVariant: null;
    label: undefined;
    labelHtml: undefined;
    max: undefined;
    precision: number;
    showProgress: boolean;
    showValue: boolean;
    striped: boolean;
    textVariant: null;
    value: number;
    variant: null;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BProgressBarProps>, {
    animated: boolean;
    bgVariant: null;
    label: undefined;
    labelHtml: undefined;
    max: undefined;
    precision: number;
    showProgress: boolean;
    showValue: boolean;
    striped: boolean;
    textVariant: null;
    value: number;
    variant: null;
}>>>, {
    label: string;
    max: string | number;
    value: string | number;
    variant: keyof import("../../types").BaseColorVariant | null;
    bgVariant: keyof import("../../types").BaseColorVariant | null;
    textVariant: keyof import("../../types").BaseTextColorVariant | null;
    labelHtml: string;
    animated: import("../../types").Booleanish;
    precision: string | number;
    showProgress: import("../../types").Booleanish;
    showValue: import("../../types").Booleanish;
    striped: import("../../types").Booleanish;
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
