import type { AttrsValue, BLinkProps } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    linkClass?: any;
    wrapperAttrs?: AttrsValue | undefined;
} & Omit<BLinkProps, "event" | "routerTag">>, {
    wrapperAttrs: undefined;
    linkClass: undefined;
    variant: string;
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
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (value: MouseEvent) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    linkClass?: any;
    wrapperAttrs?: AttrsValue | undefined;
} & Omit<BLinkProps, "event" | "routerTag">>, {
    wrapperAttrs: undefined;
    linkClass: undefined;
    variant: string;
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
}>>> & {
    onClick?: ((value: MouseEvent) => any) | undefined;
}, {
    target: import("../../types").LinkTarget;
    to: import("vue-router").RouteLocationRaw;
    disabled: import("../../types").Booleanish;
    href: string;
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
    exactActiveClass: string;
    icon: import("../../types").Booleanish;
    wrapperAttrs: AttrsValue;
    linkClass: any;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
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
