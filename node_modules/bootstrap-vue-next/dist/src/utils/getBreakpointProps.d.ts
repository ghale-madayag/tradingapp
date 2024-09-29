type PropDefinition = {
    type: unknown[];
    default: unknown;
};
export interface ComponentProps {
    [key: string]: PropDefinition;
}
/**
 * @deprecated
 */
declare const _default: (prefix: string, breakpoints: string[], definition: PropDefinition) => ComponentProps;
export default _default;
