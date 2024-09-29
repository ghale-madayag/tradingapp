import type { BLinkProps, Booleanish, ButtonType } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    loading?: Booleanish | undefined;
    loadingFill?: Booleanish | undefined;
    loadingText?: string | undefined;
    pill?: Booleanish | undefined;
    pressed?: Booleanish | undefined;
    size?: keyof import("../../types").BaseSize | undefined;
    squared?: Booleanish | undefined;
    tag?: string | undefined;
    type?: ButtonType | undefined;
    variant?: keyof import("../../types").BaseButtonVariant | null | undefined;
} & Omit<BLinkProps, "variant">>, {
    loading: boolean;
    loadingFill: boolean;
    loadingText: string;
    pill: boolean;
    pressed: undefined;
    size: string;
    squared: boolean;
    tag: string;
    type: string;
    active: boolean;
    variant: string;
    activeClass: undefined;
    append: undefined;
    disabled: undefined;
    event: undefined;
    exactActiveClass: undefined;
    href: undefined;
    icon: undefined;
    opacity: undefined;
    opacityHover: undefined;
    rel: undefined;
    replace: undefined;
    routerComponentName: undefined;
    routerTag: undefined;
    target: undefined;
    to: undefined;
    underlineOffset: undefined;
    underlineOffsetHover: undefined;
    underlineOpacity: undefined;
    underlineOpacityHover: undefined;
    underlineVariant: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (value: MouseEvent) => void;
    "update:pressed": (value: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    loading?: Booleanish | undefined;
    loadingFill?: Booleanish | undefined;
    loadingText?: string | undefined;
    pill?: Booleanish | undefined;
    pressed?: Booleanish | undefined;
    size?: keyof import("../../types").BaseSize | undefined;
    squared?: Booleanish | undefined;
    tag?: string | undefined;
    type?: ButtonType | undefined;
    variant?: keyof import("../../types").BaseButtonVariant | null | undefined;
} & Omit<BLinkProps, "variant">>, {
    loading: boolean;
    loadingFill: boolean;
    loadingText: string;
    pill: boolean;
    pressed: undefined;
    size: string;
    squared: boolean;
    tag: string;
    type: string;
    active: boolean;
    variant: string;
    activeClass: undefined;
    append: undefined;
    disabled: undefined;
    event: undefined;
    exactActiveClass: undefined;
    href: undefined;
    icon: undefined;
    opacity: undefined;
    opacityHover: undefined;
    rel: undefined;
    replace: undefined;
    routerComponentName: undefined;
    routerTag: undefined;
    target: undefined;
    to: undefined;
    underlineOffset: undefined;
    underlineOffsetHover: undefined;
    underlineOpacity: undefined;
    underlineOpacityHover: undefined;
    underlineVariant: undefined;
}>>> & {
    onClick?: ((value: MouseEvent) => any) | undefined;
    "onUpdate:pressed"?: ((value: boolean) => any) | undefined;
}, {
    tag: string;
    type: ButtonType;
    target: import("../../types").LinkTarget;
    to: import("vue-router").RouteLocationRaw;
    disabled: Booleanish;
    href: string;
    rel: string;
    size: keyof import("../../types").BaseSize;
    active: Booleanish;
    activeClass: string;
    append: Booleanish;
    replace: Booleanish;
    routerComponentName: string;
    variant: keyof import("../../types").BaseButtonVariant | null;
    opacity: 10 | "10" | 25 | 50 | 75 | 100 | "25" | "50" | "75" | "100";
    opacityHover: 10 | "10" | 25 | 50 | 75 | 100 | "25" | "50" | "75" | "100";
    underlineVariant: keyof import("../../types").BaseColorVariant | null;
    underlineOffset: 1 | 2 | 3 | "1" | "2" | "3";
    underlineOffsetHover: 1 | 2 | 3 | "1" | "2" | "3";
    underlineOpacity: 0 | 10 | "0" | "10" | 25 | 50 | 75 | 100 | "25" | "50" | "75" | "100";
    underlineOpacityHover: 0 | 10 | "0" | "10" | 25 | 50 | 75 | 100 | "25" | "50" | "75" | "100";
    event: string | any[];
    pill: Booleanish;
    routerTag: string;
    exactActiveClass: string;
    icon: Booleanish;
    loading: Booleanish;
    loadingFill: Booleanish;
    loadingText: string;
    pressed: Booleanish;
    squared: Booleanish;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
    loading?: ((props: Record<string, never>) => any) | undefined;
    'loading-spinner'?: ((props: Record<string, never>) => any) | undefined;
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
