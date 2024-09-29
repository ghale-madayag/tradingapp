import { BvTriggerableEvent } from '../../utils';
import type { AttrsValue, Booleanish } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    bodyAttrs?: AttrsValue | undefined;
    bodyClass?: any;
    buttonAttrs?: AttrsValue | undefined;
    buttonClass?: any;
    collapseClass?: any;
    headerAttrs?: AttrsValue | undefined;
    headerClass?: any;
    headerTag?: string | undefined;
    horizontal?: Booleanish | undefined;
    id?: string | undefined;
    isNav?: Booleanish | undefined;
    modelValue?: boolean | undefined;
    tag?: string | undefined;
    title?: string | undefined;
    toggle?: Booleanish | undefined;
    visible?: Booleanish | undefined;
    wrapperAttrs?: AttrsValue | undefined;
}>, {
    bodyAttrs: undefined;
    bodyClass: undefined;
    buttonAttrs: undefined;
    buttonClass: undefined;
    collapseClass: undefined;
    headerAttrs: undefined;
    headerClass: undefined;
    headerTag: string;
    horizontal: undefined;
    id: undefined;
    isNav: undefined;
    modelValue: boolean;
    tag: undefined;
    title: undefined;
    toggle: undefined;
    visible: boolean;
    wrapperAttrs: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    show: (value: BvTriggerableEvent) => void;
    hide: (value: BvTriggerableEvent) => void;
    hidden: () => void;
    "hide-prevented": () => void;
    "show-prevented": () => void;
    shown: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    bodyAttrs?: AttrsValue | undefined;
    bodyClass?: any;
    buttonAttrs?: AttrsValue | undefined;
    buttonClass?: any;
    collapseClass?: any;
    headerAttrs?: AttrsValue | undefined;
    headerClass?: any;
    headerTag?: string | undefined;
    horizontal?: Booleanish | undefined;
    id?: string | undefined;
    isNav?: Booleanish | undefined;
    modelValue?: boolean | undefined;
    tag?: string | undefined;
    title?: string | undefined;
    toggle?: Booleanish | undefined;
    visible?: Booleanish | undefined;
    wrapperAttrs?: AttrsValue | undefined;
}>, {
    bodyAttrs: undefined;
    bodyClass: undefined;
    buttonAttrs: undefined;
    buttonClass: undefined;
    collapseClass: undefined;
    headerAttrs: undefined;
    headerClass: undefined;
    headerTag: string;
    horizontal: undefined;
    id: undefined;
    isNav: undefined;
    modelValue: boolean;
    tag: undefined;
    title: undefined;
    toggle: undefined;
    visible: boolean;
    wrapperAttrs: undefined;
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
    title: string;
    id: string;
    modelValue: boolean;
    bodyClass: any;
    headerClass: any;
    headerTag: string;
    toggle: Booleanish;
    visible: Booleanish;
    horizontal: Booleanish;
    isNav: Booleanish;
    bodyAttrs: AttrsValue;
    buttonAttrs: AttrsValue;
    buttonClass: any;
    collapseClass: any;
    headerAttrs: AttrsValue;
    wrapperAttrs: AttrsValue;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
    title?: ((props: Record<string, never>) => any) | undefined;
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
