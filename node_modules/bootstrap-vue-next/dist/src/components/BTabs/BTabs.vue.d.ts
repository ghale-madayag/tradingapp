import { BvEvent } from '../../utils';
import type { AlignmentJustifyContent, Booleanish } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    activeId?: string | undefined;
    activeNavItemClass?: any;
    activeTabClass?: any;
    align?: AlignmentJustifyContent | undefined;
    card?: Booleanish | undefined;
    contentClass?: any;
    end?: Booleanish | undefined;
    fill?: Booleanish | undefined;
    id?: string | undefined;
    justified?: Booleanish | undefined;
    lazy?: Booleanish | undefined;
    modelValue?: number | undefined;
    navClass?: any;
    navWrapperClass?: any;
    noFade?: Booleanish | undefined;
    noNavStyle?: Booleanish | undefined;
    pills?: Booleanish | undefined;
    small?: Booleanish | undefined;
    tag?: string | undefined;
    vertical?: Booleanish | undefined;
}>, {
    activeId: undefined;
    activeNavItemClass: undefined;
    activeTabClass: undefined;
    align: undefined;
    card: boolean;
    contentClass: undefined;
    end: boolean;
    fill: boolean;
    id: undefined;
    justified: boolean;
    lazy: boolean;
    modelValue: number;
    navClass: undefined;
    navWrapperClass: undefined;
    noFade: boolean;
    noNavStyle: boolean;
    pills: boolean;
    small: boolean;
    tag: string;
    vertical: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number) => void;
    click: () => void;
    "activate-tab": (v1: number, v2: number, v3: BvEvent) => void;
    "update:activeId": (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    activeId?: string | undefined;
    activeNavItemClass?: any;
    activeTabClass?: any;
    align?: AlignmentJustifyContent | undefined;
    card?: Booleanish | undefined;
    contentClass?: any;
    end?: Booleanish | undefined;
    fill?: Booleanish | undefined;
    id?: string | undefined;
    justified?: Booleanish | undefined;
    lazy?: Booleanish | undefined;
    modelValue?: number | undefined;
    navClass?: any;
    navWrapperClass?: any;
    noFade?: Booleanish | undefined;
    noNavStyle?: Booleanish | undefined;
    pills?: Booleanish | undefined;
    small?: Booleanish | undefined;
    tag?: string | undefined;
    vertical?: Booleanish | undefined;
}>, {
    activeId: undefined;
    activeNavItemClass: undefined;
    activeTabClass: undefined;
    align: undefined;
    card: boolean;
    contentClass: undefined;
    end: boolean;
    fill: boolean;
    id: undefined;
    justified: boolean;
    lazy: boolean;
    modelValue: number;
    navClass: undefined;
    navWrapperClass: undefined;
    noFade: boolean;
    noNavStyle: boolean;
    pills: boolean;
    small: boolean;
    tag: string;
    vertical: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onClick?: (() => any) | undefined;
    "onActivate-tab"?: ((v1: number, v2: number, v3: BvEvent) => any) | undefined;
    "onUpdate:activeId"?: ((value: string) => any) | undefined;
}, {
    fill: Booleanish;
    tag: string;
    end: Booleanish;
    small: Booleanish;
    id: string;
    align: AlignmentJustifyContent;
    lazy: Booleanish;
    modelValue: number;
    noFade: Booleanish;
    vertical: Booleanish;
    card: Booleanish;
    contentClass: any;
    justified: Booleanish;
    pills: Booleanish;
    activeTabClass: any;
    activeId: string;
    activeNavItemClass: any;
    navClass: any;
    navWrapperClass: any;
    noNavStyle: Booleanish;
}, {}>, Readonly<{
    default?: ((props: Record<string, never>) => any) | undefined;
    empty?: ((props: Record<string, never>) => any) | undefined;
    'tabs-end'?: ((props: Record<string, never>) => any) | undefined;
    'tabs-start'?: ((props: Record<string, never>) => any) | undefined;
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
