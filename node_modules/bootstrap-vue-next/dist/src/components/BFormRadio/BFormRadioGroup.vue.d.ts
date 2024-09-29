import type { AriaInvalid, Booleanish, RadioValue } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    ariaInvalid?: AriaInvalid | undefined;
    autofocus?: Booleanish | undefined;
    buttonVariant?: keyof import("../../types").BaseButtonVariant | null | undefined;
    buttons?: Booleanish | undefined;
    disabled?: Booleanish | undefined;
    disabledField?: string | undefined;
    form?: string | undefined;
    htmlField?: string | undefined;
    id?: string | undefined;
    modelValue?: RadioValue | undefined;
    name?: string | undefined;
    options?: (string | number | Record<string, unknown>)[] | undefined;
    plain?: Booleanish | undefined;
    required?: Booleanish | undefined;
    size?: keyof import("../../types").BaseSize | undefined;
    stacked?: Booleanish | undefined;
    state?: Booleanish | null | undefined;
    textField?: string | undefined;
    validated?: Booleanish | undefined;
    valueField?: string | undefined;
}>, {
    ariaInvalid: undefined;
    autofocus: boolean;
    buttonVariant: string;
    buttons: boolean;
    disabled: boolean;
    disabledField: string;
    form: undefined;
    htmlField: string;
    id: undefined;
    modelValue: null;
    name: undefined;
    options: () => never[];
    plain: boolean;
    required: boolean;
    size: string;
    stacked: boolean;
    state: null;
    textField: string;
    validated: boolean;
    valueField: string;
}>, {
    blur: () => void;
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: RadioValue) => void;
    "update:modelValue": (value: RadioValue) => void;
    change: (value: RadioValue) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    ariaInvalid?: AriaInvalid | undefined;
    autofocus?: Booleanish | undefined;
    buttonVariant?: keyof import("../../types").BaseButtonVariant | null | undefined;
    buttons?: Booleanish | undefined;
    disabled?: Booleanish | undefined;
    disabledField?: string | undefined;
    form?: string | undefined;
    htmlField?: string | undefined;
    id?: string | undefined;
    modelValue?: RadioValue | undefined;
    name?: string | undefined;
    options?: (string | number | Record<string, unknown>)[] | undefined;
    plain?: Booleanish | undefined;
    required?: Booleanish | undefined;
    size?: keyof import("../../types").BaseSize | undefined;
    stacked?: Booleanish | undefined;
    state?: Booleanish | null | undefined;
    textField?: string | undefined;
    validated?: Booleanish | undefined;
    valueField?: string | undefined;
}>, {
    ariaInvalid: undefined;
    autofocus: boolean;
    buttonVariant: string;
    buttons: boolean;
    disabled: boolean;
    disabledField: string;
    form: undefined;
    htmlField: string;
    id: undefined;
    modelValue: null;
    name: undefined;
    options: () => never[];
    plain: boolean;
    required: boolean;
    size: string;
    stacked: boolean;
    state: null;
    textField: string;
    validated: boolean;
    valueField: string;
}>>> & {
    "onUpdate:modelValue"?: ((value: RadioValue) => any) | undefined;
    onChange?: ((value: RadioValue) => any) | undefined;
    onInput?: ((value: RadioValue) => any) | undefined;
}, {
    name: string;
    form: string;
    disabled: Booleanish;
    id: string;
    required: Booleanish;
    size: keyof import("../../types").BaseSize;
    plain: Booleanish;
    state: Booleanish | null;
    ariaInvalid: AriaInvalid;
    autofocus: Booleanish;
    modelValue: RadioValue;
    options: (string | number | Record<string, unknown>)[];
    validated: Booleanish;
    buttonVariant: keyof import("../../types").BaseButtonVariant | null;
    buttons: Booleanish;
    disabledField: string;
    htmlField: string;
    stacked: Booleanish;
    textField: string;
    valueField: string;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
    first?: ((props: Record<string, never>) => any) | undefined;
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
