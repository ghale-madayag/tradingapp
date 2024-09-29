import type { BToastProps } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BToastProps>, {
    animation: boolean;
    autoHide: boolean;
    bgVariant: null;
    body: undefined;
    bodyClass: undefined;
    delay: number;
    headerClass: undefined;
    headerTag: string;
    id: undefined;
    interval: number;
    isStatus: boolean;
    modelValue: boolean;
    noCloseButton: boolean;
    noFade: boolean;
    noHoverPause: boolean;
    progressProps: undefined;
    showOnPause: boolean;
    solid: boolean;
    textVariant: null;
    title: undefined;
    toastClass: undefined;
    active: undefined;
    activeClass: undefined;
    append: undefined;
    disabled: undefined;
    exactActiveClass: undefined;
    href: undefined;
    icon: undefined;
    opacity: undefined;
    opacityHover: undefined;
    rel: undefined;
    replace: undefined;
    routerComponentName: undefined;
    target: undefined;
    to: undefined;
    underlineOffset: undefined;
    underlineOffsetHover: undefined;
    underlineOpacity: undefined;
    underlineOpacityHover: undefined;
    underlineVariant: undefined;
    variant: undefined;
}>, {
    pause: () => void;
    restart: () => void;
    resume: () => void;
    stop: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    closed: () => void;
    close: () => void;
    "update:modelValue": (value: number | boolean) => void;
    destroyed: () => void;
    "close-countdown": (value: number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BToastProps>, {
    animation: boolean;
    autoHide: boolean;
    bgVariant: null;
    body: undefined;
    bodyClass: undefined;
    delay: number;
    headerClass: undefined;
    headerTag: string;
    id: undefined;
    interval: number;
    isStatus: boolean;
    modelValue: boolean;
    noCloseButton: boolean;
    noFade: boolean;
    noHoverPause: boolean;
    progressProps: undefined;
    showOnPause: boolean;
    solid: boolean;
    textVariant: null;
    title: undefined;
    toastClass: undefined;
    active: undefined;
    activeClass: undefined;
    append: undefined;
    disabled: undefined;
    exactActiveClass: undefined;
    href: undefined;
    icon: undefined;
    opacity: undefined;
    opacityHover: undefined;
    rel: undefined;
    replace: undefined;
    routerComponentName: undefined;
    target: undefined;
    to: undefined;
    underlineOffset: undefined;
    underlineOffsetHover: undefined;
    underlineOpacity: undefined;
    underlineOpacityHover: undefined;
    underlineVariant: undefined;
    variant: undefined;
}>>> & {
    "onUpdate:modelValue"?: ((value: number | boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
    onClosed?: (() => any) | undefined;
    "onClose-countdown"?: ((value: number) => any) | undefined;
    onDestroyed?: (() => any) | undefined;
}, {
    target: import("../../types").LinkTarget;
    to: import("vue-router").RouteLocationRaw;
    body: string;
    title: string;
    disabled: import("../../types").Booleanish;
    href: string;
    id: string;
    rel: string;
    active: import("../../types").Booleanish;
    activeClass: string;
    append: import("../../types").Booleanish;
    replace: import("../../types").Booleanish;
    routerComponentName: string;
    variant: keyof import("../../types").BaseColorVariant | null;
    opacity: 10 | "10" | 25 | 50 | 75 | 100 | "25" | "50" | "75" | "100";
    opacityHover: 10 | "10" | 25 | 50 | 75 | 100 | "25" | "50" | "75" | "100";
    underlineVariant: keyof import("../../types").BaseColorVariant | null;
    underlineOffset: 1 | 2 | 3 | "1" | "2" | "3";
    underlineOffsetHover: 1 | 2 | 3 | "1" | "2" | "3";
    underlineOpacity: 0 | 10 | "0" | "10" | 25 | 50 | 75 | 100 | "25" | "50" | "75" | "100";
    underlineOpacityHover: 0 | 10 | "0" | "10" | 25 | 50 | 75 | 100 | "25" | "50" | "75" | "100";
    modelValue: number | boolean;
    exactActiveClass: string;
    icon: import("../../types").Booleanish;
    animation: import("../../types").Booleanish;
    autoHide: import("../../types").Booleanish;
    bodyClass: any;
    delay: string | number;
    headerClass: any;
    headerTag: string;
    interval: string | number;
    isStatus: import("../../types").Booleanish;
    noCloseButton: import("../../types").Booleanish;
    noFade: import("../../types").Booleanish;
    noHoverPause: import("../../types").Booleanish;
    progressProps: Omit<import("../../types").BProgressBarProps, "label" | "max" | "value" | "labelHtml">;
    showOnPause: import("../../types").Booleanish;
    solid: import("../../types").Booleanish;
    toastClass: any;
    bgVariant: keyof import("../../types").BaseColorVariant | null;
    textVariant: keyof import("../../types").BaseTextColorVariant | null;
}, {}>, {
    title?(_: {
        hide: () => void;
    }): any;
    default?(_: {
        hide: () => void;
    }): any;
}>;
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
