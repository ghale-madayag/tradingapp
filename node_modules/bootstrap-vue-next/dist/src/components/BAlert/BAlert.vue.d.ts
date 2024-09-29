import type { Booleanish } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    closeClass?: any;
    closeContent?: string | undefined;
    closeLabel?: string | undefined;
    closeVariant?: keyof import("../../types").BaseButtonVariant | null | undefined;
    dismissible?: Booleanish | undefined;
    fade?: Booleanish | undefined;
    immediate?: Booleanish | undefined;
    interval?: string | number | undefined;
    modelValue?: number | boolean | undefined;
    noHoverPause?: Booleanish | undefined;
    showOnPause?: Booleanish | undefined;
    variant?: keyof import("../../types").BaseColorVariant | null | undefined;
}>, {
    closeClass: undefined;
    closeContent: undefined;
    closeLabel: string;
    closeVariant: string;
    dismissible: boolean;
    fade: boolean;
    immediate: boolean;
    interval: number;
    modelValue: boolean;
    noHoverPause: boolean;
    showOnPause: boolean;
    variant: string;
}>, {
    pause: () => void;
    restart: () => void;
    resume: () => void;
    stop: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    closed: () => void;
    close: () => void;
    "update:modelValue": (value: number | boolean) => void;
    "close-countdown": (value: number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    closeClass?: any;
    closeContent?: string | undefined;
    closeLabel?: string | undefined;
    closeVariant?: keyof import("../../types").BaseButtonVariant | null | undefined;
    dismissible?: Booleanish | undefined;
    fade?: Booleanish | undefined;
    immediate?: Booleanish | undefined;
    interval?: string | number | undefined;
    modelValue?: number | boolean | undefined;
    noHoverPause?: Booleanish | undefined;
    showOnPause?: Booleanish | undefined;
    variant?: keyof import("../../types").BaseColorVariant | null | undefined;
}>, {
    closeClass: undefined;
    closeContent: undefined;
    closeLabel: string;
    closeVariant: string;
    dismissible: boolean;
    fade: boolean;
    immediate: boolean;
    interval: number;
    modelValue: boolean;
    noHoverPause: boolean;
    showOnPause: boolean;
    variant: string;
}>>> & {
    "onUpdate:modelValue"?: ((value: number | boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
    onClosed?: (() => any) | undefined;
    "onClose-countdown"?: ((value: number) => any) | undefined;
}, {
    fade: Booleanish;
    variant: keyof import("../../types").BaseColorVariant | null;
    modelValue: number | boolean;
    immediate: Booleanish;
    interval: string | number;
    noHoverPause: Booleanish;
    showOnPause: Booleanish;
    closeClass: any;
    closeContent: string;
    closeLabel: string;
    closeVariant: keyof import("../../types").BaseButtonVariant | null;
    dismissible: Booleanish;
}, {}>, Readonly<{
    close?: ((props: Record<string, never>) => any) | undefined;
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
