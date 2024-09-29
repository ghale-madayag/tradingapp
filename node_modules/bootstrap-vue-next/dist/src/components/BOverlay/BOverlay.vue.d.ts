import type { Booleanish, RadiusElementExtendables, SpinnerType } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    bgColor?: string | undefined;
    blur?: string | null | undefined;
    fixed?: Booleanish | undefined;
    noCenter?: Booleanish | undefined;
    noFade?: Booleanish | undefined;
    noSpinner?: Booleanish | undefined;
    noWrap?: Booleanish | undefined;
    opacity?: string | number | undefined;
    overlayTag?: string | undefined;
    show?: Booleanish | undefined;
    spinnerSmall?: Booleanish | undefined;
    spinnerType?: SpinnerType | undefined;
    spinnerVariant?: keyof import("../../types").BaseColorVariant | null | undefined;
    variant?: keyof import("../../types").BaseColorVariant | "white" | "transparent" | null | undefined;
    wrapTag?: string | undefined;
    zIndex?: string | number | undefined;
} & RadiusElementExtendables>, {
    blur: string;
    bgColor: undefined;
    fixed: boolean;
    noCenter: boolean;
    noFade: boolean;
    noSpinner: boolean;
    noWrap: boolean;
    opacity: number;
    overlayTag: string;
    show: boolean;
    spinnerSmall: boolean;
    spinnerType: string;
    spinnerVariant: undefined;
    variant: string;
    wrapTag: string;
    zIndex: number;
    rounded: boolean;
    roundedBottom: undefined;
    roundedEnd: undefined;
    roundedStart: undefined;
    roundedTop: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (value: MouseEvent) => void;
    hidden: () => void;
    shown: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    bgColor?: string | undefined;
    blur?: string | null | undefined;
    fixed?: Booleanish | undefined;
    noCenter?: Booleanish | undefined;
    noFade?: Booleanish | undefined;
    noSpinner?: Booleanish | undefined;
    noWrap?: Booleanish | undefined;
    opacity?: string | number | undefined;
    overlayTag?: string | undefined;
    show?: Booleanish | undefined;
    spinnerSmall?: Booleanish | undefined;
    spinnerType?: SpinnerType | undefined;
    spinnerVariant?: keyof import("../../types").BaseColorVariant | null | undefined;
    variant?: keyof import("../../types").BaseColorVariant | "white" | "transparent" | null | undefined;
    wrapTag?: string | undefined;
    zIndex?: string | number | undefined;
} & RadiusElementExtendables>, {
    blur: string;
    bgColor: undefined;
    fixed: boolean;
    noCenter: boolean;
    noFade: boolean;
    noSpinner: boolean;
    noWrap: boolean;
    opacity: number;
    overlayTag: string;
    show: boolean;
    spinnerSmall: boolean;
    spinnerType: string;
    spinnerVariant: undefined;
    variant: string;
    wrapTag: string;
    zIndex: number;
    rounded: boolean;
    roundedBottom: undefined;
    roundedEnd: undefined;
    roundedStart: undefined;
    roundedTop: undefined;
}>>> & {
    onHidden?: (() => any) | undefined;
    onShown?: (() => any) | undefined;
    onClick?: ((value: MouseEvent) => any) | undefined;
}, {
    variant: keyof import("../../types").BaseColorVariant | "white" | "transparent" | null;
    opacity: string | number;
    fixed: Booleanish;
    blur: string | null;
    show: Booleanish;
    rounded: Booleanish | import("../../types").RadiusElement;
    roundedTop: Booleanish | import("../../types").RadiusElement;
    roundedBottom: Booleanish | import("../../types").RadiusElement;
    roundedStart: Booleanish | import("../../types").RadiusElement;
    roundedEnd: Booleanish | import("../../types").RadiusElement;
    noFade: Booleanish;
    zIndex: string | number;
    noWrap: Booleanish;
    bgColor: string;
    noCenter: Booleanish;
    noSpinner: Booleanish;
    overlayTag: string;
    spinnerSmall: Booleanish;
    spinnerType: SpinnerType;
    spinnerVariant: keyof import("../../types").BaseColorVariant | null;
    wrapTag: string;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
    overlay?: ((props: {
        type: SpinnerType;
        variant: keyof import("../../types").BaseColorVariant | null | undefined;
        small: boolean;
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
