import type { AriaInvalid, Booleanish } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    ariaInvalid?: AriaInvalid | undefined;
    autofocus?: Booleanish | undefined;
    disabled?: Booleanish | undefined;
    disabledField?: string | undefined;
    form?: string | undefined;
    htmlField?: string | undefined;
    id?: string | undefined;
    labelField?: string | undefined;
    modelValue?: string | number | unknown[] | Record<string, unknown> | null | undefined;
    multiple?: Booleanish | undefined;
    name?: string | undefined;
    options?: unknown[] | Record<string, unknown> | undefined;
    optionsField?: string | undefined;
    plain?: Booleanish | undefined;
    required?: Booleanish | undefined;
    selectSize?: string | number | undefined;
    size?: keyof import("../../types").BaseSize | undefined;
    state?: Booleanish | null | undefined;
    textField?: string | undefined;
    valueField?: string | undefined;
}>, {
    ariaInvalid: undefined;
    autofocus: boolean;
    disabled: boolean;
    disabledField: string;
    form: undefined;
    htmlField: string;
    id: undefined;
    labelField: string;
    modelValue: string;
    multiple: boolean;
    name: undefined;
    options: () => never[];
    optionsField: string;
    plain: boolean;
    required: boolean;
    selectSize: number;
    size: string;
    state: null;
    textField: string;
    valueField: string;
}>, {
    blur: () => void;
    element: import("vue").Ref<HTMLElement | null>;
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: unknown) => void;
    "update:modelValue": (value: unknown) => void;
    change: (value: unknown) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    ariaInvalid?: AriaInvalid | undefined;
    autofocus?: Booleanish | undefined;
    disabled?: Booleanish | undefined;
    disabledField?: string | undefined;
    form?: string | undefined;
    htmlField?: string | undefined;
    id?: string | undefined;
    labelField?: string | undefined;
    modelValue?: string | number | unknown[] | Record<string, unknown> | null | undefined;
    multiple?: Booleanish | undefined;
    name?: string | undefined;
    options?: unknown[] | Record<string, unknown> | undefined;
    optionsField?: string | undefined;
    plain?: Booleanish | undefined;
    required?: Booleanish | undefined;
    selectSize?: string | number | undefined;
    size?: keyof import("../../types").BaseSize | undefined;
    state?: Booleanish | null | undefined;
    textField?: string | undefined;
    valueField?: string | undefined;
}>, {
    ariaInvalid: undefined;
    autofocus: boolean;
    disabled: boolean;
    disabledField: string;
    form: undefined;
    htmlField: string;
    id: undefined;
    labelField: string;
    modelValue: string;
    multiple: boolean;
    name: undefined;
    options: () => never[];
    optionsField: string;
    plain: boolean;
    required: boolean;
    selectSize: number;
    size: string;
    state: null;
    textField: string;
    valueField: string;
}>>> & {
    "onUpdate:modelValue"?: ((value: unknown) => any) | undefined;
    onChange?: ((value: unknown) => any) | undefined;
    onInput?: ((value: unknown) => any) | undefined;
}, {
    name: string;
    form: string;
    disabled: Booleanish;
    id: string;
    multiple: Booleanish;
    required: Booleanish;
    size: keyof import("../../types").BaseSize;
    plain: Booleanish;
    state: Booleanish | null;
    ariaInvalid: AriaInvalid;
    autofocus: Booleanish;
    modelValue: string | number | unknown[] | Record<string, unknown> | null;
    options: unknown[] | Record<string, unknown>;
    disabledField: string;
    htmlField: string;
    textField: string;
    valueField: string;
    labelField: string;
    optionsField: string;
    selectSize: string | number;
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
