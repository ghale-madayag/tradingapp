import { type Placement as OriginalPlacement } from '@floating-ui/vue';
import { BvTriggerableEvent } from '../utils';
import { type ComponentPublicInstance, type MaybeRef } from 'vue';
import type { BPopoverProps } from '../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BPopoverProps>, {
    boundary: string;
    boundaryPadding: undefined;
    click: boolean;
    container: undefined;
    content: undefined;
    customClass: string;
    delay: () => {
        show: number;
        hide: number;
    };
    floatingMiddleware: undefined;
    hide: undefined;
    html: boolean;
    id: undefined;
    inline: boolean;
    manual: boolean;
    modelValue: boolean;
    noAutoClose: boolean;
    noFade: boolean;
    noFlip: boolean;
    noHide: boolean;
    noShift: boolean;
    noSize: boolean;
    noninteractive: boolean;
    offset: null;
    placement: string;
    realtime: boolean;
    reference: null;
    strategy: string;
    target: null;
    title: undefined;
    tooltip: boolean;
    variant: null;
    persistent: boolean;
}>, {
    hide: (e: Event) => void;
    show: () => void;
    toggle: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    show: (value: BvTriggerableEvent) => void;
    hide: (value: BvTriggerableEvent) => void;
    hidden: (value: BvTriggerableEvent) => void;
    "hide-prevented": () => void;
    "show-prevented": () => void;
    shown: (value: BvTriggerableEvent) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BPopoverProps>, {
    boundary: string;
    boundaryPadding: undefined;
    click: boolean;
    container: undefined;
    content: undefined;
    customClass: string;
    delay: () => {
        show: number;
        hide: number;
    };
    floatingMiddleware: undefined;
    hide: undefined;
    html: boolean;
    id: undefined;
    inline: boolean;
    manual: boolean;
    modelValue: boolean;
    noAutoClose: boolean;
    noFade: boolean;
    noFlip: boolean;
    noHide: boolean;
    noShift: boolean;
    noSize: boolean;
    noninteractive: boolean;
    offset: null;
    placement: string;
    realtime: boolean;
    reference: null;
    strategy: string;
    target: null;
    title: undefined;
    tooltip: boolean;
    variant: null;
    persistent: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onShow?: ((value: BvTriggerableEvent) => any) | undefined;
    onHide?: ((value: BvTriggerableEvent) => any) | undefined;
    onHidden?: ((value: BvTriggerableEvent) => any) | undefined;
    "onHide-prevented"?: (() => any) | undefined;
    "onShow-prevented"?: (() => any) | undefined;
    onShown?: ((value: BvTriggerableEvent) => any) | undefined;
}, {
    offset: string | number | null;
    target: MaybeRef<string | HTMLElement | HTMLSpanElement | ComponentPublicInstance<HTMLElement> | null>;
    html: import("../types").Booleanish;
    title: string;
    id: string;
    variant: keyof import("../types").BaseColorVariant | null;
    modelValue: import("../types").Booleanish;
    hide: import("../types").Booleanish;
    delay: number | {
        show: number;
        hide: number;
    };
    noFade: import("../types").Booleanish;
    boundary: Element | "document" | "clippingAncestors" | Element[] | import("@floating-ui/vue").Rect | "viewport";
    boundaryPadding: import("@floating-ui/vue").Padding;
    click: import("../types").Booleanish;
    container: string | HTMLElement | ComponentPublicInstance<HTMLElement>;
    content: string;
    customClass: any;
    floatingMiddleware: {
        name: string;
        options?: any;
        fn: (state: {
            placement: OriginalPlacement;
            strategy: import("@floating-ui/vue").Strategy;
            x: number;
            y: number;
            initialPlacement: OriginalPlacement;
            middlewareData: import('../../node_modules/@floating-ui/core').MiddlewareData;
            rects: import("@floating-ui/vue").ElementRects;
            platform: import('../../node_modules/@floating-ui/core').Platform;
            elements: import("@floating-ui/vue").Elements;
        }) => import('../../node_modules/@floating-ui/core').MiddlewareReturn | Promise<import('../../node_modules/@floating-ui/core').MiddlewareReturn>;
    }[];
    inline: import("../types").Booleanish;
    manual: import("../types").Booleanish;
    noAutoClose: import("../types").Booleanish;
    noFlip: import("../types").Booleanish;
    noHide: import("../types").Booleanish;
    noShift: import("../types").Booleanish;
    noSize: import("../types").Booleanish;
    noninteractive: import("../types").Booleanish;
    placement: import("../types").PopoverPlacement;
    persistent: import("../types").Booleanish;
    realtime: import("../types").Booleanish;
    reference: MaybeRef<string | HTMLElement | HTMLSpanElement | ComponentPublicInstance<HTMLElement> | null>;
    strategy: import("@floating-ui/vue").Strategy;
    tooltip: import("../types").Booleanish;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
    target?: ((props: {
        show: () => void;
        hide: (e: Event) => void;
        toggle: (e: Event) => void;
        showState: boolean;
    }) => any) | undefined;
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
