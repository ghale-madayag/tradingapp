import type { Booleanish } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    active?: Booleanish | undefined;
    buttonId?: string | undefined;
    disabled?: Booleanish | undefined;
    id?: string | undefined;
    lazy?: Booleanish | undefined;
    lazyOnce?: Booleanish | undefined;
    noBody?: Booleanish | undefined;
    tag?: string | undefined;
    title?: string | undefined;
    titleItemClass?: any;
    titleLinkAttributes?: Record<string, unknown> | undefined;
    titleLinkClass?: any;
}>, {
    active: boolean;
    buttonId: undefined;
    disabled: boolean;
    id: undefined;
    lazy: undefined;
    lazyOnce: undefined;
    noBody: boolean;
    tag: string;
    title: undefined;
    titleItemClass: undefined;
    titleLinkAttributes: undefined;
    titleLinkClass: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:active": (value: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    active?: Booleanish | undefined;
    buttonId?: string | undefined;
    disabled?: Booleanish | undefined;
    id?: string | undefined;
    lazy?: Booleanish | undefined;
    lazyOnce?: Booleanish | undefined;
    noBody?: Booleanish | undefined;
    tag?: string | undefined;
    title?: string | undefined;
    titleItemClass?: any;
    titleLinkAttributes?: Record<string, unknown> | undefined;
    titleLinkClass?: any;
}>, {
    active: boolean;
    buttonId: undefined;
    disabled: boolean;
    id: undefined;
    lazy: undefined;
    lazyOnce: undefined;
    noBody: boolean;
    tag: string;
    title: undefined;
    titleItemClass: undefined;
    titleLinkAttributes: undefined;
    titleLinkClass: undefined;
}>>> & {
    "onUpdate:active"?: ((value: boolean) => any) | undefined;
}, {
    tag: string;
    title: string;
    disabled: Booleanish;
    id: string;
    active: Booleanish;
    lazy: Booleanish;
    noBody: Booleanish;
    buttonId: string;
    lazyOnce: Booleanish;
    titleItemClass: any;
    titleLinkAttributes: Record<string, unknown>;
    titleLinkClass: any;
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
