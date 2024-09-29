import { type MaybeRefOrGetter } from 'vue';
declare const _default: <T extends Record<string, unknown>, const B extends readonly PropertyKey[]>(props: MaybeRefOrGetter<T>, pickProps?: MaybeRefOrGetter<B | (keyof T)[]> | undefined) => {
    computedLink: Readonly<import("vue").Ref<boolean>>;
    computedLinkProps: import("vue").ComputedRef<Pick<Record<string, unknown> | T, PropertyKey>>;
};
export default _default;
