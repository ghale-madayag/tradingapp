import type { Booleanish, PlaceholderAnimation, PlaceholderSize } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    animation?: PlaceholderAnimation | undefined;
    footerAnimation?: PlaceholderAnimation | undefined;
    footerSize?: PlaceholderSize | undefined;
    footerVariant?: keyof import("../../types").BaseColorVariant | null | undefined;
    footerWidth?: string | number | undefined;
    headerAnimation?: PlaceholderAnimation | undefined;
    headerSize?: PlaceholderSize | undefined;
    headerVariant?: keyof import("../../types").BaseColorVariant | null | undefined;
    headerWidth?: string | number | undefined;
    imgBlankColor?: string | undefined;
    imgBottom?: Booleanish | undefined;
    imgHeight?: string | number | undefined;
    imgSrc?: string | undefined;
    noButton?: Booleanish | undefined;
    noFooter?: Booleanish | undefined;
    noHeader?: Booleanish | undefined;
    noImg?: Booleanish | undefined;
    size?: PlaceholderSize | undefined;
    variant?: keyof import("../../types").BaseColorVariant | null | undefined;
}>, {
    animation: undefined;
    footerAnimation: undefined;
    footerSize: string;
    footerVariant: undefined;
    footerWidth: number;
    headerAnimation: undefined;
    headerSize: string;
    headerVariant: undefined;
    headerWidth: number;
    imgBlankColor: string;
    imgBottom: boolean;
    imgHeight: number;
    imgSrc: undefined;
    noButton: boolean;
    noFooter: boolean;
    noHeader: boolean;
    noImg: boolean;
    size: string;
    variant: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    animation?: PlaceholderAnimation | undefined;
    footerAnimation?: PlaceholderAnimation | undefined;
    footerSize?: PlaceholderSize | undefined;
    footerVariant?: keyof import("../../types").BaseColorVariant | null | undefined;
    footerWidth?: string | number | undefined;
    headerAnimation?: PlaceholderAnimation | undefined;
    headerSize?: PlaceholderSize | undefined;
    headerVariant?: keyof import("../../types").BaseColorVariant | null | undefined;
    headerWidth?: string | number | undefined;
    imgBlankColor?: string | undefined;
    imgBottom?: Booleanish | undefined;
    imgHeight?: string | number | undefined;
    imgSrc?: string | undefined;
    noButton?: Booleanish | undefined;
    noFooter?: Booleanish | undefined;
    noHeader?: Booleanish | undefined;
    noImg?: Booleanish | undefined;
    size?: PlaceholderSize | undefined;
    variant?: keyof import("../../types").BaseColorVariant | null | undefined;
}>, {
    animation: undefined;
    footerAnimation: undefined;
    footerSize: string;
    footerVariant: undefined;
    footerWidth: number;
    headerAnimation: undefined;
    headerSize: string;
    headerVariant: undefined;
    headerWidth: number;
    imgBlankColor: string;
    imgBottom: boolean;
    imgHeight: number;
    imgSrc: undefined;
    noButton: boolean;
    noFooter: boolean;
    noHeader: boolean;
    noImg: boolean;
    size: string;
    variant: undefined;
}>>>, {
    size: PlaceholderSize;
    variant: keyof import("../../types").BaseColorVariant | null;
    animation: PlaceholderAnimation;
    footerVariant: keyof import("../../types").BaseColorVariant | null;
    headerVariant: keyof import("../../types").BaseColorVariant | null;
    imgBottom: Booleanish;
    imgHeight: string | number;
    imgSrc: string;
    imgBlankColor: string;
    noHeader: Booleanish;
    footerAnimation: PlaceholderAnimation;
    footerSize: PlaceholderSize;
    footerWidth: string | number;
    headerAnimation: PlaceholderAnimation;
    headerSize: PlaceholderSize;
    headerWidth: string | number;
    noButton: Booleanish;
    noFooter: Booleanish;
    noImg: Booleanish;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
    footer?: ((props: Record<string, never>) => any) | undefined;
    header?: ((props: Record<string, never>) => any) | undefined;
    img?: ((props: Record<string, never>) => any) | undefined;
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
