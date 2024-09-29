import type { BPopoverProps } from '../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Omit<BPopoverProps, "tooltip">>, {
    click: undefined;
    container: undefined;
    content: undefined;
    customClass: undefined;
    delay: undefined;
    floatingMiddleware: undefined;
    hide: undefined;
    html: undefined;
    id: undefined;
    inline: undefined;
    manual: undefined;
    modelValue: undefined;
    noAutoClose: undefined;
    noFade: undefined;
    noFlip: undefined;
    noHide: undefined;
    noShift: undefined;
    noninteractive: boolean;
    offset: undefined;
    placement: undefined;
    realtime: undefined;
    reference: undefined;
    strategy: undefined;
    target: undefined;
    title: undefined;
    variant: undefined;
}>, {
    hide: ((import("../types").Booleanish | undefined) & ((e: Event) => void)) | undefined;
    show: (() => void) | undefined;
    toggle: ((e: Event) => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Omit<BPopoverProps, "tooltip">>, {
    click: undefined;
    container: undefined;
    content: undefined;
    customClass: undefined;
    delay: undefined;
    floatingMiddleware: undefined;
    hide: undefined;
    html: undefined;
    id: undefined;
    inline: undefined;
    manual: undefined;
    modelValue: undefined;
    noAutoClose: undefined;
    noFade: undefined;
    noFlip: undefined;
    noHide: undefined;
    noShift: undefined;
    noninteractive: boolean;
    offset: undefined;
    placement: undefined;
    realtime: undefined;
    reference: undefined;
    strategy: undefined;
    target: undefined;
    title: undefined;
    variant: undefined;
}>>>, {
    offset: string | number | null;
    target: import("vue").MaybeRef<string | HTMLElement | HTMLSpanElement | import("vue").ComponentPublicInstance<HTMLElement> | null>;
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
    click: import("../types").Booleanish;
    container: string | HTMLElement | import("vue").ComponentPublicInstance<HTMLElement>;
    content: string;
    customClass: any;
    floatingMiddleware: {
        name: string;
        options?: any;
        fn: (state: {
            placement: import('../../node_modules/@floating-ui/core').Placement;
            strategy: import('../../node_modules/@floating-ui/core').Strategy;
            x: number;
            y: number;
            initialPlacement: import('../../node_modules/@floating-ui/core').Placement;
            middlewareData: import('../../node_modules/@floating-ui/core').MiddlewareData;
            rects: import('../../node_modules/@floating-ui/core').ElementRects;
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
    noninteractive: import("../types").Booleanish;
    placement: import("../types").PopoverPlacement;
    realtime: import("../types").Booleanish;
    reference: import("vue").MaybeRef<string | HTMLElement | HTMLSpanElement | import("vue").ComponentPublicInstance<HTMLElement> | null>;
    strategy: import('../../node_modules/@floating-ui/core').Strategy;
}, {}>, Partial<Record<NonNullable<string | number>, (_: any) => any>>>;
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
