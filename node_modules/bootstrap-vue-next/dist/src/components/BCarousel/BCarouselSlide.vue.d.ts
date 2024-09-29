import type { Booleanish } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    background?: string | undefined;
    caption?: string | undefined;
    captionHtml?: string | undefined;
    captionTag?: string | undefined;
    contentTag?: string | undefined;
    contentVisibleUp?: string | undefined;
    id?: string | undefined;
    imgAlt?: string | undefined;
    imgBlank?: Booleanish | undefined;
    imgBlankColor?: string | undefined;
    imgHeight?: string | number | undefined;
    imgSrc?: string | undefined;
    imgSrcset?: string | string[] | undefined;
    imgWidth?: string | number | undefined;
    interval?: string | number | undefined;
    text?: string | undefined;
    textHtml?: string | undefined;
    textTag?: string | undefined;
}>, {
    background: undefined;
    caption: undefined;
    captionHtml: undefined;
    captionTag: string;
    contentTag: string;
    contentVisibleUp: undefined;
    id: undefined;
    imgAlt: undefined;
    imgBlank: boolean;
    imgBlankColor: string;
    imgHeight: undefined;
    imgSrc: undefined;
    imgSrcset: undefined;
    imgWidth: undefined;
    interval: undefined;
    text: undefined;
    textHtml: undefined;
    textTag: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    background?: string | undefined;
    caption?: string | undefined;
    captionHtml?: string | undefined;
    captionTag?: string | undefined;
    contentTag?: string | undefined;
    contentVisibleUp?: string | undefined;
    id?: string | undefined;
    imgAlt?: string | undefined;
    imgBlank?: Booleanish | undefined;
    imgBlankColor?: string | undefined;
    imgHeight?: string | number | undefined;
    imgSrc?: string | undefined;
    imgSrcset?: string | string[] | undefined;
    imgWidth?: string | number | undefined;
    interval?: string | number | undefined;
    text?: string | undefined;
    textHtml?: string | undefined;
    textTag?: string | undefined;
}>, {
    background: undefined;
    caption: undefined;
    captionHtml: undefined;
    captionTag: string;
    contentTag: string;
    contentVisibleUp: undefined;
    id: undefined;
    imgAlt: undefined;
    imgBlank: boolean;
    imgBlankColor: string;
    imgHeight: undefined;
    imgSrc: undefined;
    imgSrcset: undefined;
    imgWidth: undefined;
    interval: undefined;
    text: undefined;
    textHtml: undefined;
    textTag: string;
}>>>, {
    caption: string;
    text: string;
    background: string;
    id: string;
    interval: string | number;
    imgAlt: string;
    imgHeight: string | number;
    imgSrc: string;
    imgWidth: string | number;
    captionHtml: string;
    captionTag: string;
    contentTag: string;
    contentVisibleUp: string;
    imgBlank: Booleanish;
    imgBlankColor: string;
    imgSrcset: string | string[];
    textHtml: string;
    textTag: string;
}, {}>, Readonly<{
    caption?: ((props: Record<string, never>) => any) | undefined;
    default?: ((props: Record<string, never>) => any) | undefined;
    img?: ((props: Record<string, never>) => any) | undefined;
    text?: ((props: Record<string, never>) => any) | undefined;
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
