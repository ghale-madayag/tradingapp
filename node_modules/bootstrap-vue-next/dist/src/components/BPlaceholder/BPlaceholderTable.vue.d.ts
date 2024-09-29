import type { Booleanish, PlaceholderAnimation, PlaceholderSize } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    animation?: PlaceholderAnimation | undefined;
    cellWidth?: string | number | undefined;
    columns?: string | number | undefined;
    footerAnimation?: PlaceholderAnimation | undefined;
    footerCellWidth?: string | number | undefined;
    footerColumns?: string | number | undefined;
    footerSize?: PlaceholderSize | undefined;
    footerVariant?: keyof import("../../types").BaseColorVariant | null | undefined;
    headerAnimation?: PlaceholderAnimation | undefined;
    headerCellWidth?: string | number | undefined;
    headerColumns?: string | number | undefined;
    headerSize?: PlaceholderSize | undefined;
    headerVariant?: keyof import("../../types").BaseColorVariant | null | undefined;
    hideHeader?: Booleanish | undefined;
    rows?: string | number | undefined;
    showFooter?: Booleanish | undefined;
    size?: PlaceholderSize | undefined;
    variant?: keyof import("../../types").BaseColorVariant | null | undefined;
}>, {
    animation: undefined;
    cellWidth: number;
    columns: number;
    footerAnimation: undefined;
    footerCellWidth: number;
    footerColumns: undefined;
    footerSize: string;
    footerVariant: undefined;
    headerAnimation: undefined;
    headerCellWidth: number;
    headerColumns: undefined;
    headerSize: string;
    headerVariant: undefined;
    hideHeader: boolean;
    rows: number;
    showFooter: boolean;
    size: string;
    variant: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    animation?: PlaceholderAnimation | undefined;
    cellWidth?: string | number | undefined;
    columns?: string | number | undefined;
    footerAnimation?: PlaceholderAnimation | undefined;
    footerCellWidth?: string | number | undefined;
    footerColumns?: string | number | undefined;
    footerSize?: PlaceholderSize | undefined;
    footerVariant?: keyof import("../../types").BaseColorVariant | null | undefined;
    headerAnimation?: PlaceholderAnimation | undefined;
    headerCellWidth?: string | number | undefined;
    headerColumns?: string | number | undefined;
    headerSize?: PlaceholderSize | undefined;
    headerVariant?: keyof import("../../types").BaseColorVariant | null | undefined;
    hideHeader?: Booleanish | undefined;
    rows?: string | number | undefined;
    showFooter?: Booleanish | undefined;
    size?: PlaceholderSize | undefined;
    variant?: keyof import("../../types").BaseColorVariant | null | undefined;
}>, {
    animation: undefined;
    cellWidth: number;
    columns: number;
    footerAnimation: undefined;
    footerCellWidth: number;
    footerColumns: undefined;
    footerSize: string;
    footerVariant: undefined;
    headerAnimation: undefined;
    headerCellWidth: number;
    headerColumns: undefined;
    headerSize: string;
    headerVariant: undefined;
    hideHeader: boolean;
    rows: number;
    showFooter: boolean;
    size: string;
    variant: undefined;
}>>>, {
    size: PlaceholderSize;
    variant: keyof import("../../types").BaseColorVariant | null;
    animation: PlaceholderAnimation;
    columns: string | number;
    footerVariant: keyof import("../../types").BaseColorVariant | null;
    headerVariant: keyof import("../../types").BaseColorVariant | null;
    rows: string | number;
    hideHeader: Booleanish;
    footerAnimation: PlaceholderAnimation;
    footerSize: PlaceholderSize;
    headerAnimation: PlaceholderAnimation;
    headerSize: PlaceholderSize;
    cellWidth: string | number;
    footerCellWidth: string | number;
    footerColumns: string | number;
    headerCellWidth: string | number;
    headerColumns: string | number;
    showFooter: Booleanish;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
    tfoot?: ((props: Record<string, never>) => any) | undefined;
    thead?: ((props: Record<string, never>) => any) | undefined;
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
