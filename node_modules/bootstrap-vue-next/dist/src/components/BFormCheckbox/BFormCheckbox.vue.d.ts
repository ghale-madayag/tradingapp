import type { Booleanish, CheckboxValue } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    ariaLabel?: string | undefined;
    ariaLabelledBy?: string | undefined;
    autofocus?: Booleanish | undefined;
    button?: Booleanish | undefined;
    buttonGroup?: Booleanish | undefined;
    buttonVariant?: keyof import("../../types").BaseButtonVariant | null | undefined;
    disabled?: Booleanish | undefined;
    form?: string | undefined;
    id?: string | undefined;
    indeterminate?: Booleanish | undefined;
    inline?: Booleanish | undefined;
    modelValue?: CheckboxValue | CheckboxValue[] | undefined;
    name?: string | undefined;
    plain?: Booleanish | undefined;
    required?: Booleanish | undefined;
    size?: keyof import("../../types").BaseSize | undefined;
    state?: Booleanish | null | undefined;
    switch?: Booleanish | undefined;
    uncheckedValue?: CheckboxValue | undefined;
    value?: CheckboxValue | undefined;
}>, {
    ariaLabel: undefined;
    ariaLabelledBy: undefined;
    autofocus: boolean;
    button: boolean;
    buttonGroup: boolean;
    buttonVariant: null;
    disabled: boolean;
    form: undefined;
    id: undefined;
    indeterminate: undefined;
    inline: boolean;
    modelValue: undefined;
    name: undefined;
    plain: boolean;
    required: undefined;
    size: undefined;
    state: null;
    switch: boolean;
    uncheckedValue: boolean;
    value: boolean;
}>, {
    blur: () => void;
    element: import("vue").Ref<HTMLElement | null>;
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: CheckboxValue | CheckboxValue[]) => void;
    "update:modelValue": (value: CheckboxValue | CheckboxValue[]) => void;
    change: (value: CheckboxValue | CheckboxValue[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    ariaLabel?: string | undefined;
    ariaLabelledBy?: string | undefined;
    autofocus?: Booleanish | undefined;
    button?: Booleanish | undefined;
    buttonGroup?: Booleanish | undefined;
    buttonVariant?: keyof import("../../types").BaseButtonVariant | null | undefined;
    disabled?: Booleanish | undefined;
    form?: string | undefined;
    id?: string | undefined;
    indeterminate?: Booleanish | undefined;
    inline?: Booleanish | undefined;
    modelValue?: CheckboxValue | CheckboxValue[] | undefined;
    name?: string | undefined;
    plain?: Booleanish | undefined;
    required?: Booleanish | undefined;
    size?: keyof import("../../types").BaseSize | undefined;
    state?: Booleanish | null | undefined;
    switch?: Booleanish | undefined;
    uncheckedValue?: CheckboxValue | undefined;
    value?: CheckboxValue | undefined;
}>, {
    ariaLabel: undefined;
    ariaLabelledBy: undefined;
    autofocus: boolean;
    button: boolean;
    buttonGroup: boolean;
    buttonVariant: null;
    disabled: boolean;
    form: undefined;
    id: undefined;
    indeterminate: undefined;
    inline: boolean;
    modelValue: undefined;
    name: undefined;
    plain: boolean;
    required: undefined;
    size: undefined;
    state: null;
    switch: boolean;
    uncheckedValue: boolean;
    value: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((value: CheckboxValue | CheckboxValue[]) => any) | undefined;
    onChange?: ((value: CheckboxValue | CheckboxValue[]) => any) | undefined;
    onInput?: ((value: CheckboxValue | CheckboxValue[]) => any) | undefined;
}, {
    name: string;
    button: Booleanish;
    form: string;
    switch: Booleanish;
    disabled: Booleanish;
    id: string;
    indeterminate: Booleanish;
    required: Booleanish;
    size: keyof import("../../types").BaseSize;
    value: CheckboxValue;
    plain: Booleanish;
    state: Booleanish | null;
    autofocus: Booleanish;
    modelValue: CheckboxValue | CheckboxValue[];
    inline: Booleanish;
    ariaLabel: string;
    ariaLabelledBy: string;
    buttonGroup: Booleanish;
    buttonVariant: keyof import("../../types").BaseButtonVariant | null;
    uncheckedValue: CheckboxValue;
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
