import type { Booleanish } from '../types';
import { BvTriggerableEvent } from '../utils';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    horizontal?: Booleanish | undefined;
    id?: string | undefined;
    isNav?: Booleanish | undefined;
    modelValue?: Booleanish | undefined;
    skipAnimation?: Booleanish | undefined;
    tag?: string | undefined;
    toggle?: Booleanish | undefined;
    visible?: Booleanish | undefined;
}>, {
    horizontal: boolean;
    id: undefined;
    isNav: boolean;
    modelValue: boolean;
    skipAnimation: boolean;
    tag: string;
    toggle: boolean;
    visible: boolean;
}>, {
    close: () => void;
    isNav: import("vue").ComputedRef<boolean>;
    open: () => void;
    toggle: () => void;
    visible: Readonly<import("vue").Ref<boolean>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    show: (value: BvTriggerableEvent) => void;
    hide: (value: BvTriggerableEvent) => void;
    hidden: () => void;
    "hide-prevented": () => void;
    "show-prevented": () => void;
    shown: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    horizontal?: Booleanish | undefined;
    id?: string | undefined;
    isNav?: Booleanish | undefined;
    modelValue?: Booleanish | undefined;
    skipAnimation?: Booleanish | undefined;
    tag?: string | undefined;
    toggle?: Booleanish | undefined;
    visible?: Booleanish | undefined;
}>, {
    horizontal: boolean;
    id: undefined;
    isNav: boolean;
    modelValue: boolean;
    skipAnimation: boolean;
    tag: string;
    toggle: boolean;
    visible: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onShow?: ((value: BvTriggerableEvent) => any) | undefined;
    onHide?: ((value: BvTriggerableEvent) => any) | undefined;
    onHidden?: (() => any) | undefined;
    "onHide-prevented"?: (() => any) | undefined;
    "onShow-prevented"?: (() => any) | undefined;
    onShown?: (() => any) | undefined;
}, {
    tag: string;
    id: string;
    modelValue: Booleanish;
    toggle: Booleanish;
    visible: Booleanish;
    horizontal: Booleanish;
    isNav: Booleanish;
    skipAnimation: Booleanish;
}, {}>, Readonly<{
    default?: ((props: {
        close: () => void;
        open: () => void;
        toggle: () => void;
        visible: boolean;
    }) => any) | undefined;
    footer?: ((props: {
        close: () => void;
        id: string;
        open: () => void;
        toggle: () => void;
        visible: boolean;
    }) => any) | undefined;
    header?: ((props: {
        close: () => void;
        id: string;
        open: () => void;
        toggle: () => void;
        visible: boolean;
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
