import type { BTableSimpleProps } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BTableSimpleProps>, {
    borderVariant: null;
    tableClass: undefined;
    variant: null;
    bordered: boolean;
    borderless: boolean;
    captionTop: boolean;
    dark: boolean;
    hover: boolean;
    id: undefined;
    noBorderCollapse: boolean;
    outlined: boolean;
    fixed: boolean;
    responsive: boolean;
    stacked: boolean;
    striped: boolean;
    stripedColumns: boolean;
    small: boolean;
    stickyHeader: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BTableSimpleProps>, {
    borderVariant: null;
    tableClass: undefined;
    variant: null;
    bordered: boolean;
    borderless: boolean;
    captionTop: boolean;
    dark: boolean;
    hover: boolean;
    id: undefined;
    noBorderCollapse: boolean;
    outlined: boolean;
    fixed: boolean;
    responsive: boolean;
    stacked: boolean;
    striped: boolean;
    stripedColumns: boolean;
    small: boolean;
    stickyHeader: boolean;
}>>>, {
    dark: import("../../types").Booleanish;
    small: import("../../types").Booleanish;
    id: string;
    variant: keyof import("../../types").BaseColorVariant | null;
    fixed: import("../../types").Booleanish;
    striped: import("../../types").Booleanish;
    borderVariant: keyof import("../../types").BaseColorVariant | null;
    stacked: import("../../types").Booleanish | import("../../types").Breakpoint;
    bordered: import("../../types").Booleanish;
    borderless: import("../../types").Booleanish;
    captionTop: import("../../types").Booleanish;
    hover: import("../../types").Booleanish;
    noBorderCollapse: import("../../types").Booleanish;
    outlined: import("../../types").Booleanish;
    responsive: import("../../types").Booleanish | import("../../types").Breakpoint;
    stickyHeader: import("../../types").Booleanish;
    stripedColumns: import("../../types").Booleanish;
    tableClass: any;
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
