import type { AlignmentJustifyContent, Booleanish } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    align?: AlignmentJustifyContent | undefined;
    fill?: Booleanish | undefined;
    justified?: Booleanish | undefined;
    small?: Booleanish | undefined;
    tag?: string | undefined;
}>, {
    align: undefined;
    fill: boolean;
    justified: boolean;
    small: boolean;
    tag: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    align?: AlignmentJustifyContent | undefined;
    fill?: Booleanish | undefined;
    justified?: Booleanish | undefined;
    small?: Booleanish | undefined;
    tag?: string | undefined;
}>, {
    align: undefined;
    fill: boolean;
    justified: boolean;
    small: boolean;
    tag: string;
}>>>, {
    fill: Booleanish;
    tag: string;
    small: Booleanish;
    align: AlignmentJustifyContent;
    justified: Booleanish;
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
