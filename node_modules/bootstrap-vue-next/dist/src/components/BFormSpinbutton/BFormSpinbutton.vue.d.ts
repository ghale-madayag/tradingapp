import type { Booleanish, Size } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    ariaControls?: string | undefined;
    ariaLabel?: string | undefined;
    disabled?: Booleanish | undefined;
    form?: string | undefined;
    formatterFn?: ((value: number) => string) | undefined;
    id?: string | undefined;
    inline?: Booleanish | undefined;
    labelDecrement?: string | undefined;
    labelIncrement?: string | undefined;
    locale?: string | undefined;
    max?: string | number | undefined;
    min?: string | number | undefined;
    modelValue?: number | null | undefined;
    name?: string | undefined;
    placeholder?: string | undefined;
    readonly?: Booleanish | undefined;
    repeatDelay?: string | number | undefined;
    repeatInterval?: string | number | undefined;
    repeatStepMultiplier?: string | number | undefined;
    repeatThreshold?: string | number | undefined;
    required?: Booleanish | undefined;
    size?: keyof import("../../types").BaseSize | undefined;
    state?: Booleanish | null | undefined;
    step?: string | number | undefined;
    vertical?: Booleanish | undefined;
    wrap?: Booleanish | undefined;
}>, {
    ariaControls: undefined;
    ariaLabel: undefined;
    disabled: boolean;
    form: undefined;
    formatterFn: undefined;
    id: undefined;
    inline: boolean;
    labelDecrement: string;
    labelIncrement: string;
    locale: string;
    max: 100;
    min: 1;
    modelValue: null;
    name: undefined;
    placeholder: undefined;
    readonly: boolean;
    repeatDelay: 500;
    repeatInterval: 100;
    repeatStepMultiplier: 4;
    repeatThreshold: 10;
    required: boolean;
    size: undefined;
    state: null;
    step: 1;
    vertical: boolean;
    wrap: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number | null) => void;
    change: (value: number | null) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    ariaControls?: string | undefined;
    ariaLabel?: string | undefined;
    disabled?: Booleanish | undefined;
    form?: string | undefined;
    formatterFn?: ((value: number) => string) | undefined;
    id?: string | undefined;
    inline?: Booleanish | undefined;
    labelDecrement?: string | undefined;
    labelIncrement?: string | undefined;
    locale?: string | undefined;
    max?: string | number | undefined;
    min?: string | number | undefined;
    modelValue?: number | null | undefined;
    name?: string | undefined;
    placeholder?: string | undefined;
    readonly?: Booleanish | undefined;
    repeatDelay?: string | number | undefined;
    repeatInterval?: string | number | undefined;
    repeatStepMultiplier?: string | number | undefined;
    repeatThreshold?: string | number | undefined;
    required?: Booleanish | undefined;
    size?: keyof import("../../types").BaseSize | undefined;
    state?: Booleanish | null | undefined;
    step?: string | number | undefined;
    vertical?: Booleanish | undefined;
    wrap?: Booleanish | undefined;
}>, {
    ariaControls: undefined;
    ariaLabel: undefined;
    disabled: boolean;
    form: undefined;
    formatterFn: undefined;
    id: undefined;
    inline: boolean;
    labelDecrement: string;
    labelIncrement: string;
    locale: string;
    max: 100;
    min: 1;
    modelValue: null;
    name: undefined;
    placeholder: undefined;
    readonly: boolean;
    repeatDelay: 500;
    repeatInterval: 100;
    repeatStepMultiplier: 4;
    repeatThreshold: 10;
    required: boolean;
    size: undefined;
    state: null;
    step: 1;
    vertical: boolean;
    wrap: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((value: number | null) => any) | undefined;
    onChange?: ((value: number | null) => any) | undefined;
}, {
    name: string;
    form: string;
    disabled: Booleanish;
    id: string;
    max: string | number;
    min: string | number;
    placeholder: string;
    required: Booleanish;
    size: Size;
    step: string | number;
    state: Booleanish | null;
    modelValue: number | null;
    readonly: Booleanish;
    inline: Booleanish;
    wrap: Booleanish;
    vertical: Booleanish;
    ariaLabel: string;
    locale: string;
    ariaControls: string;
    formatterFn: (value: number) => string;
    labelDecrement: string;
    labelIncrement: string;
    repeatDelay: string | number;
    repeatInterval: string | number;
    repeatStepMultiplier: string | number;
    repeatThreshold: string | number;
}, {}>, Readonly<{
    decrement?: ((props: {
        hasFocus: boolean;
    }) => any) | undefined;
    increment?: ((props: {
        hasFocus: boolean;
    }) => any) | undefined;
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
