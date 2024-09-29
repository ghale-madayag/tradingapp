import type { Booleanish } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    accept?: string | string[] | undefined;
    autofocus?: Booleanish | undefined;
    capture?: Booleanish | "user" | "environment" | undefined;
    directory?: Booleanish | undefined;
    disabled?: Booleanish | undefined;
    form?: string | undefined;
    id?: string | undefined;
    label?: string | undefined;
    labelClass?: any;
    modelValue?: File | File[] | null | undefined;
    multiple?: Booleanish | undefined;
    name?: string | undefined;
    noDrop?: Booleanish | undefined;
    noTraverse?: Booleanish | undefined;
    required?: Booleanish | undefined;
    size?: keyof import("../../types").BaseSize | undefined;
    state?: Booleanish | null | undefined;
}>, {
    accept: string;
    autofocus: boolean;
    capture: boolean;
    directory: boolean;
    disabled: boolean;
    form: undefined;
    id: undefined;
    label: string;
    labelClass: undefined;
    modelValue: null;
    multiple: boolean;
    name: undefined;
    noDrop: boolean;
    noTraverse: boolean;
    required: boolean;
    size: undefined;
    state: null;
}>, {
    blur: () => void;
    element: import("vue").Ref<HTMLInputElement | null>;
    focus: () => void;
    reset: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: File | File[] | null) => void;
    change: (value: Event) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    accept?: string | string[] | undefined;
    autofocus?: Booleanish | undefined;
    capture?: Booleanish | "user" | "environment" | undefined;
    directory?: Booleanish | undefined;
    disabled?: Booleanish | undefined;
    form?: string | undefined;
    id?: string | undefined;
    label?: string | undefined;
    labelClass?: any;
    modelValue?: File | File[] | null | undefined;
    multiple?: Booleanish | undefined;
    name?: string | undefined;
    noDrop?: Booleanish | undefined;
    noTraverse?: Booleanish | undefined;
    required?: Booleanish | undefined;
    size?: keyof import("../../types").BaseSize | undefined;
    state?: Booleanish | null | undefined;
}>, {
    accept: string;
    autofocus: boolean;
    capture: boolean;
    directory: boolean;
    disabled: boolean;
    form: undefined;
    id: undefined;
    label: string;
    labelClass: undefined;
    modelValue: null;
    multiple: boolean;
    name: undefined;
    noDrop: boolean;
    noTraverse: boolean;
    required: boolean;
    size: undefined;
    state: null;
}>>> & {
    "onUpdate:modelValue"?: ((value: File | File[] | null) => any) | undefined;
    onChange?: ((value: Event) => any) | undefined;
}, {
    name: string;
    form: string;
    label: string;
    disabled: Booleanish;
    id: string;
    accept: string | string[];
    capture: Booleanish | "user" | "environment";
    multiple: Booleanish;
    required: Booleanish;
    size: keyof import("../../types").BaseSize;
    state: Booleanish | null;
    autofocus: Booleanish;
    modelValue: File | File[] | null;
    directory: Booleanish;
    labelClass: any;
    noDrop: Booleanish;
    noTraverse: Booleanish;
}, {}>, Readonly<{
    label?: ((props: Record<string, never>) => any) | undefined;
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
