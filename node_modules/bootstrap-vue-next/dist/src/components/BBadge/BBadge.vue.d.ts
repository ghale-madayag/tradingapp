import type { BLinkProps, Booleanish, ColorExtendables } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    dotIndicator?: Booleanish | undefined;
    pill?: Booleanish | undefined;
    tag?: string | undefined;
    textIndicator?: Booleanish | undefined;
} & Omit<BLinkProps, "event" | "routerTag"> & ColorExtendables>, {
    dotIndicator: boolean;
    pill: boolean;
    tag: string;
    textIndicator: boolean;
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
    textVariant: null;
    bgVariant: null;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    dotIndicator?: Booleanish | undefined;
    pill?: Booleanish | undefined;
    tag?: string | undefined;
    textIndicator?: Booleanish | undefined;
} & Omit<BLinkProps, "event" | "routerTag"> & ColorExtendables>, {
    dotIndicator: boolean;
    pill: boolean;
    tag: string;
    textIndicator: boolean;
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
    textVariant: null;
    bgVariant: null;
}>>>, {
    tag: string;
    target: import("../../types").LinkTarget;
    to: import("vue-router").RouteLocationRaw;
    disabled: Booleanish;
    href: string;
    rel: string;
    active: Booleanish;
    activeClass: string;
    append: Booleanish;
    replace: Booleanish;
    routerComponentName: string;
    variant: keyof import("../../types").BaseColorVariant | null;
    opacity: 10 | "10" | 25 | 50 | 75 | 100 | "25" | "50" | "75" | "100";
    opacityHover: 10 | "10" | 25 | 50 | 75 | 100 | "25" | "50" | "75" | "100";
    underlineVariant: keyof import("../../types").BaseColorVariant | null;
    underlineOffset: 1 | 2 | 3 | "1" | "2" | "3";
    underlineOffsetHover: 1 | 2 | 3 | "1" | "2" | "3";
    underlineOpacity: 0 | 10 | "0" | "10" | 25 | 50 | 75 | 100 | "25" | "50" | "75" | "100";
    underlineOpacityHover: 0 | 10 | "0" | "10" | 25 | 50 | 75 | 100 | "25" | "50" | "75" | "100";
    pill: Booleanish;
    exactActiveClass: string;
    icon: Booleanish;
    bgVariant: keyof import("../../types").BaseColorVariant | null;
    textVariant: keyof import("../../types").BaseTextColorVariant | null;
    dotIndicator: Booleanish;
    textIndicator: Booleanish;
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
