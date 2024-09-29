import type { Booleanish } from '../../types';
import type { CommonInputProps } from '../../composables/useFormInput';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    noResize?: Booleanish | undefined;
    rows?: string | number | undefined;
    wrap?: string | undefined;
} & CommonInputProps>, {
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
    noResize: boolean;
    rows: number;
    wrap: string;
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
    noResize?: Booleanish | undefined;
    rows?: string | number | undefined;
    wrap?: string | undefined;
} & CommonInputProps>, {
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
    noResize: boolean;
    rows: number;
    wrap: string;
}>>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    onBlur?: ((val: FocusEvent) => any) | undefined;
    onChange?: ((val: any) => any) | undefined;
    onInput?: ((val: any) => any) | undefined;
}, {
    number: Booleanish;
    name: string;
    form: string;
    disabled: Booleanish;
    id: string;
    autocomplete: string;
    list: string;
    placeholder: string;
    required: Booleanish;
    size: keyof import("../../types").BaseSize;
    plaintext: Booleanish;
    trim: Booleanish;
    state: Booleanish | null;
    ariaInvalid: import("../../types").AriaInvalid;
    autofocus: Booleanish;
    debounce: string | number;
    debounceMaxWait: string | number;
    formatter: (val: string, evt: Event) => string;
    lazy: Booleanish;
    lazyFormatter: Booleanish;
    modelValue: string | number;
    readonly: Booleanish;
    wrap: string;
    noResize: Booleanish;
    rows: string | number;
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
