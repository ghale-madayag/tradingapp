import type { Booleanish, RadioValue } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    ariaLabel?: string | undefined;
    ariaLabelledby?: string | undefined;
    autofocus?: Booleanish | undefined;
    button?: Booleanish | undefined;
    buttonGroup?: Booleanish | undefined;
    buttonVariant?: keyof import("../../types").BaseButtonVariant | null | undefined;
    disabled?: Booleanish | undefined;
    form?: string | undefined;
    id?: string | undefined;
    inline?: Booleanish | undefined;
    modelValue?: RadioValue | undefined;
    name?: string | undefined;
    plain?: Booleanish | undefined;
    required?: Booleanish | undefined;
    size?: keyof import("../../types").BaseSize | undefined;
    state?: Booleanish | null | undefined;
    value?: RadioValue | undefined;
}>, {
    ariaLabel: undefined;
    ariaLabelledby: undefined;
    autofocus: boolean;
    button: boolean;
    buttonGroup: boolean;
    buttonVariant: null;
    disabled: boolean;
    form: undefined;
    id: undefined;
    inline: boolean;
    modelValue: undefined;
    name: undefined;
    plain: boolean;
    required: boolean;
    size: undefined;
    state: null;
    value: boolean;
}>, {
    blur: () => void;
    element: import("vue").Ref<HTMLElement | null>;
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: RadioValue) => void;
    "update:modelValue": (value: RadioValue) => void;
    change: (value: RadioValue) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    ariaLabel?: string | undefined;
    ariaLabelledby?: string | undefined;
    autofocus?: Booleanish | undefined;
    button?: Booleanish | undefined;
    buttonGroup?: Booleanish | undefined;
    buttonVariant?: keyof import("../../types").BaseButtonVariant | null | undefined;
    disabled?: Booleanish | undefined;
    form?: string | undefined;
    id?: string | undefined;
    inline?: Booleanish | undefined;
    modelValue?: RadioValue | undefined;
    name?: string | undefined;
    plain?: Booleanish | undefined;
    required?: Booleanish | undefined;
    size?: keyof import("../../types").BaseSize | undefined;
    state?: Booleanish | null | undefined;
    value?: RadioValue | undefined;
}>, {
    ariaLabel: undefined;
    ariaLabelledby: undefined;
    autofocus: boolean;
    button: boolean;
    buttonGroup: boolean;
    buttonVariant: null;
    disabled: boolean;
    form: undefined;
    id: undefined;
    inline: boolean;
    modelValue: undefined;
    name: undefined;
    plain: boolean;
    required: boolean;
    size: undefined;
    state: null;
    value: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((value: RadioValue) => any) | undefined;
    onChange?: ((value: RadioValue) => any) | undefined;
    onInput?: ((value: RadioValue) => any) | undefined;
}, {
    name: string;
    button: Booleanish;
    form: string;
    disabled: Booleanish;
    id: string;
    required: Booleanish;
    size: keyof import("../../types").BaseSize;
    value: RadioValue;
    plain: Booleanish;
    state: Booleanish | null;
    autofocus: Booleanish;
    modelValue: RadioValue;
    inline: Booleanish;
    ariaLabel: string;
    buttonGroup: Booleanish;
    buttonVariant: keyof import("../../types").BaseButtonVariant | null;
    ariaLabelledby: string;
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
