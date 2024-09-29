import { type RendererElement } from 'vue';
import type { Booleanish } from '../../types';
import { BvTriggerableEvent } from '../../utils';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    backdrop?: Booleanish | undefined;
    backdropVariant?: keyof import("../../types").BaseColorVariant | null | undefined;
    bodyClass?: string | undefined;
    bodyScrolling?: Booleanish | undefined;
    footerClass?: string | undefined;
    headerClass?: string | undefined;
    headerCloseClass?: any;
    headerCloseLabel?: string | undefined;
    headerCloseVariant?: keyof import("../../types").BaseButtonVariant | null | undefined;
    id?: string | undefined;
    lazy?: Booleanish | undefined;
    modelValue?: Booleanish | undefined;
    noCloseOnBackdrop?: Booleanish | undefined;
    noCloseOnEsc?: Booleanish | undefined;
    noFocus?: Booleanish | undefined;
    noHeader?: Booleanish | undefined;
    noHeaderClose?: Booleanish | undefined;
    placement?: "start" | "end" | "top" | "bottom" | undefined;
    teleportDisabled?: Booleanish | undefined;
    teleportTo?: string | RendererElement | null | undefined;
    title?: string | undefined;
}>, {
    backdrop: boolean;
    backdropVariant: string;
    bodyClass: undefined;
    bodyScrolling: boolean;
    footerClass: undefined;
    headerClass: undefined;
    headerCloseClass: undefined;
    headerCloseLabel: string;
    headerCloseVariant: string;
    id: undefined;
    lazy: boolean;
    modelValue: boolean;
    noCloseOnBackdrop: boolean;
    noCloseOnEsc: boolean;
    noFocus: boolean;
    noHeader: boolean;
    noHeaderClose: boolean;
    placement: string;
    teleportDisabled: boolean;
    teleportTo: string;
    title: undefined;
}>, {
    hide: (trigger?: string) => void;
    show: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (value: BvTriggerableEvent) => void;
    "update:modelValue": (value: boolean) => void;
    show: (value: BvTriggerableEvent) => void;
    hide: (value: BvTriggerableEvent) => void;
    hidden: (value: BvTriggerableEvent) => void;
    "hide-prevented": () => void;
    "show-prevented": () => void;
    shown: (value: BvTriggerableEvent) => void;
    esc: (value: BvTriggerableEvent) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    backdrop?: Booleanish | undefined;
    backdropVariant?: keyof import("../../types").BaseColorVariant | null | undefined;
    bodyClass?: string | undefined;
    bodyScrolling?: Booleanish | undefined;
    footerClass?: string | undefined;
    headerClass?: string | undefined;
    headerCloseClass?: any;
    headerCloseLabel?: string | undefined;
    headerCloseVariant?: keyof import("../../types").BaseButtonVariant | null | undefined;
    id?: string | undefined;
    lazy?: Booleanish | undefined;
    modelValue?: Booleanish | undefined;
    noCloseOnBackdrop?: Booleanish | undefined;
    noCloseOnEsc?: Booleanish | undefined;
    noFocus?: Booleanish | undefined;
    noHeader?: Booleanish | undefined;
    noHeaderClose?: Booleanish | undefined;
    placement?: "start" | "end" | "top" | "bottom" | undefined;
    teleportDisabled?: Booleanish | undefined;
    teleportTo?: string | RendererElement | null | undefined;
    title?: string | undefined;
}>, {
    backdrop: boolean;
    backdropVariant: string;
    bodyClass: undefined;
    bodyScrolling: boolean;
    footerClass: undefined;
    headerClass: undefined;
    headerCloseClass: undefined;
    headerCloseLabel: string;
    headerCloseVariant: string;
    id: undefined;
    lazy: boolean;
    modelValue: boolean;
    noCloseOnBackdrop: boolean;
    noCloseOnEsc: boolean;
    noFocus: boolean;
    noHeader: boolean;
    noHeaderClose: boolean;
    placement: string;
    teleportDisabled: boolean;
    teleportTo: string;
    title: undefined;
}>>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onShow?: ((value: BvTriggerableEvent) => any) | undefined;
    onHide?: ((value: BvTriggerableEvent) => any) | undefined;
    onHidden?: ((value: BvTriggerableEvent) => any) | undefined;
    "onHide-prevented"?: (() => any) | undefined;
    "onShow-prevented"?: (() => any) | undefined;
    onShown?: ((value: BvTriggerableEvent) => any) | undefined;
    onClose?: ((value: BvTriggerableEvent) => any) | undefined;
    onEsc?: ((value: BvTriggerableEvent) => any) | undefined;
}, {
    title: string;
    id: string;
    lazy: Booleanish;
    modelValue: Booleanish;
    bodyClass: string;
    headerClass: string;
    placement: "start" | "end" | "top" | "bottom";
    footerClass: string;
    backdropVariant: keyof import("../../types").BaseColorVariant | null;
    bodyScrolling: Booleanish;
    headerCloseClass: any;
    headerCloseLabel: string;
    headerCloseVariant: keyof import("../../types").BaseButtonVariant | null;
    noCloseOnBackdrop: Booleanish;
    noCloseOnEsc: Booleanish;
    teleportDisabled: Booleanish;
    teleportTo: string | RendererElement | null;
    backdrop: Booleanish;
    noFocus: Booleanish;
    noHeader: Booleanish;
    noHeaderClose: Booleanish;
}, {}>, Readonly<{
    backdrop?: ((props: Record<string, never>) => any) | undefined;
    default?: ((props: {
        visible: boolean;
        placement: "start" | "end" | "top" | "bottom";
        hide: (trigger?: string | undefined) => void;
    }) => any) | undefined;
    footer?: ((props: {
        visible: boolean;
        placement: "start" | "end" | "top" | "bottom";
        hide: (trigger?: string | undefined) => void;
    }) => any) | undefined;
    header?: ((props: {
        visible: boolean;
        placement: "start" | "end" | "top" | "bottom";
        hide: (trigger?: string | undefined) => void;
    }) => any) | undefined;
    'header-close'?: ((props: Record<string, never>) => any) | undefined;
    title?: ((props: {
        visible: boolean;
        placement: "start" | "end" | "top" | "bottom";
        hide: (trigger?: string | undefined) => void;
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
