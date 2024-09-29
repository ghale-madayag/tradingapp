import { BvTriggerableEvent } from '../../utils';
import type { BDropdownProps } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BDropdownProps>, {
    ariaLabel: undefined;
    autoClose: boolean;
    block: boolean;
    boundary: string;
    boundaryPadding: undefined;
    center: boolean;
    container: undefined;
    disabled: boolean;
    dropend: boolean;
    dropstart: boolean;
    dropup: boolean;
    end: boolean;
    floatingMiddleware: undefined;
    id: undefined;
    isNav: boolean;
    lazy: boolean;
    menuClass: undefined;
    modelValue: boolean;
    noCaret: boolean;
    noFlip: boolean;
    noShift: boolean;
    noSize: boolean;
    offset: number;
    role: string;
    size: string;
    split: boolean;
    splitButtonType: string;
    splitClass: undefined;
    splitDisabled: undefined;
    splitHref: undefined;
    splitTo: undefined;
    splitVariant: undefined;
    strategy: string;
    text: undefined;
    toggleClass: undefined;
    toggleText: string;
    variant: string;
}>, {
    close: () => void;
    open: () => void;
    toggle: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    show: (value: BvTriggerableEvent) => void;
    hide: (value: BvTriggerableEvent) => void;
    click: (event: MouseEvent) => void;
    hidden: () => void;
    "hide-prevented": () => void;
    "show-prevented": () => void;
    shown: () => void;
    toggle: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BDropdownProps>, {
    ariaLabel: undefined;
    autoClose: boolean;
    block: boolean;
    boundary: string;
    boundaryPadding: undefined;
    center: boolean;
    container: undefined;
    disabled: boolean;
    dropend: boolean;
    dropstart: boolean;
    dropup: boolean;
    end: boolean;
    floatingMiddleware: undefined;
    id: undefined;
    isNav: boolean;
    lazy: boolean;
    menuClass: undefined;
    modelValue: boolean;
    noCaret: boolean;
    noFlip: boolean;
    noShift: boolean;
    noSize: boolean;
    offset: number;
    role: string;
    size: string;
    split: boolean;
    splitButtonType: string;
    splitClass: undefined;
    splitDisabled: undefined;
    splitHref: undefined;
    splitTo: undefined;
    splitVariant: undefined;
    strategy: string;
    text: undefined;
    toggleClass: undefined;
    toggleText: string;
    variant: string;
}>>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onShow?: ((value: BvTriggerableEvent) => any) | undefined;
    onHide?: ((value: BvTriggerableEvent) => any) | undefined;
    onHidden?: (() => any) | undefined;
    "onHide-prevented"?: (() => any) | undefined;
    "onShow-prevented"?: (() => any) | undefined;
    onShown?: (() => any) | undefined;
    onClick?: ((event: MouseEvent) => any) | undefined;
    onToggle?: (() => any) | undefined;
}, {
    end: import("../../types").Booleanish;
    center: import("../../types").Booleanish;
    offset: string | number | {
        mainAxis?: number | undefined;
        crossAxis?: number | undefined;
        alignmentAxis?: number | null | undefined;
    };
    text: string;
    disabled: import("../../types").Booleanish;
    id: string;
    role: string;
    size: keyof import("../../types").BaseSize;
    variant: keyof import("../../types").BaseButtonVariant | null;
    split: import("../../types").Booleanish;
    lazy: import("../../types").Booleanish;
    modelValue: import("../../types").Booleanish;
    boundary: Element | "document" | "clippingAncestors" | Element[] | import('../../../node_modules/@floating-ui/core').Rect | "viewport";
    boundaryPadding: import('../../../node_modules/@floating-ui/core').Padding;
    container: string | HTMLElement | import("vue").ComponentPublicInstance<HTMLElement>;
    floatingMiddleware: {
        name: string;
        options?: any;
        fn: (state: {
            placement: import('../../../node_modules/@floating-ui/core').Placement;
            strategy: import('../../../node_modules/@floating-ui/core').Strategy;
            x: number;
            y: number;
            initialPlacement: import('../../../node_modules/@floating-ui/core').Placement;
            middlewareData: import('../../../node_modules/@floating-ui/core').MiddlewareData;
            rects: import('../../../node_modules/@floating-ui/core').ElementRects;
            platform: import('../../../node_modules/@floating-ui/core').Platform;
            elements: import("@floating-ui/vue").Elements;
        }) => import('../../../node_modules/@floating-ui/core').MiddlewareReturn | Promise<import('../../../node_modules/@floating-ui/core').MiddlewareReturn>;
    }[];
    noFlip: import("../../types").Booleanish;
    noShift: import("../../types").Booleanish;
    noSize: import("../../types").Booleanish;
    strategy: import('../../../node_modules/@floating-ui/core').Strategy;
    isNav: import("../../types").Booleanish;
    ariaLabel: string;
    autoClose: boolean | "inside" | "outside";
    dropend: import("../../types").Booleanish;
    dropstart: import("../../types").Booleanish;
    dropup: import("../../types").Booleanish;
    menuClass: any;
    noCaret: import("../../types").Booleanish;
    splitButtonType: import("../../types").ButtonType;
    splitClass: any;
    splitDisabled: import("../../types").Booleanish;
    splitHref: string;
    splitTo: import("vue-router").RouteLocationRaw;
    splitVariant: keyof import("../../types").BaseButtonVariant | null;
    toggleClass: any;
    toggleText: string;
}, {}>, Readonly<{
    'button-content'?: ((props: Record<string, never>) => any) | undefined;
    default?: ((props: {
        hide: () => void;
        show: () => void;
    }) => any) | undefined;
    'toggle-text'?: ((props: Record<string, never>) => any) | undefined;
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
