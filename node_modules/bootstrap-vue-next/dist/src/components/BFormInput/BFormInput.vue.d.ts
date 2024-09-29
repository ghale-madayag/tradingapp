import type { CommonInputProps } from '../../composables/useFormInput';
import type { InputType } from '../../types';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    max?: string | number | undefined;
    min?: string | number | undefined;
    step?: string | number | undefined;
    type?: InputType | undefined;
} & CommonInputProps>, {
    max: undefined;
    min: undefined;
    step: undefined;
    type: string;
    ariaInvalid: undefined;
    autocomplete: undefined;
    autofocus: boolean;
    debounce: number;
    debounceMaxWait: number;
    disabled: boolean;
    form: undefined;
    formatter: undefined;
    id: undefined;
    lazy: boolean;
    lazyFormatter: boolean;
    list: undefined;
    modelValue: string;
    name: undefined;
    number: boolean;
    placeholder: undefined;
    plaintext: boolean;
    readonly: boolean;
    required: boolean;
    size: undefined;
    state: null;
    trim: boolean;
}>, {
    blur: () => void;
    element: import("vue").Ref<HTMLInputElement | null>;
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (val: any) => void;
    blur: (val: FocusEvent) => void;
    "update:modelValue": (val: any) => void;
    change: (val: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    max?: string | number | undefined;
    min?: string | number | undefined;
    step?: string | number | undefined;
    type?: InputType | undefined;
} & CommonInputProps>, {
    max: undefined;
    min: undefined;
    step: undefined;
    type: string;
    ariaInvalid: undefined;
    autocomplete: undefined;
    autofocus: boolean;
    debounce: number;
    debounceMaxWait: number;
    disabled: boolean;
    form: undefined;
    formatter: undefined;
    id: undefined;
    lazy: boolean;
    lazyFormatter: boolean;
    list: undefined;
    modelValue: string;
    name: undefined;
    number: boolean;
    placeholder: undefined;
    plaintext: boolean;
    readonly: boolean;
    required: boolean;
    size: undefined;
    state: null;
    trim: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    onBlur?: ((val: FocusEvent) => any) | undefined;
    onChange?: ((val: any) => any) | undefined;
    onInput?: ((val: any) => any) | undefined;
}, {
    number: import("../../types").Booleanish;
    type: InputType;
    name: string;
    form: string;
    disabled: import("../../types").Booleanish;
    id: string;
    autocomplete: string;
    list: string;
    max: string | number;
    min: string | number;
    placeholder: string;
    required: import("../../types").Booleanish;
    size: keyof import("../../types").BaseSize;
    step: string | number;
    plaintext: import("../../types").Booleanish;
    trim: import("../../types").Booleanish;
    state: import("../../types").Booleanish | null;
    ariaInvalid: import("../../types").AriaInvalid;
    autofocus: import("../../types").Booleanish;
    debounce: string | number;
    debounceMaxWait: string | number;
    formatter: (val: string, evt: Event) => string;
    lazy: import("../../types").Booleanish;
    lazyFormatter: import("../../types").Booleanish;
    modelValue: string | number;
    readonly: import("../../types").Booleanish;
}, {}>;
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
