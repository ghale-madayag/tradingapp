import type { Slot } from 'vue';
import type { AnimationFrame } from '../types/safeTypes';
/**
 * @deprecated
 */
export declare const isElement: (el: unknown) => el is HTMLElement;
/**
 * @deprecated
 */
export declare const getBCR: (el: HTMLElement) => DOMRect | null;
/**
 * @deprecated
 */
export declare const getActiveElement: (excludes?: never[]) => Element | null;
/**
 * @deprecated
 */
export declare const isActiveElement: (el: HTMLElement) => boolean;
/**
 * @deprecated
 */
export declare const attemptFocus: (el: HTMLElement, options?: {}) => boolean;
/**
 * Attempt to blur an element, and return `true` if successful
 *
 * @param el
 * @returns
 * @deprecated
 */
export declare const attemptBlur: (el: HTMLElement) => boolean;
/**
 * @deprecated
 */
export declare const getStyle: (el: HTMLElement, prop: string) => string | null;
/**
 * @deprecated
 */
export declare const contains: (parent: Node, child: Node) => boolean;
/**
 * @deprecated
 */
export declare const isVisible: (el: HTMLElement) => boolean;
/**
 * @deprecated
 */
export declare const isEmptySlot: (el: Slot | undefined) => boolean;
/**
 * Select a single element, returns `null` if not found
 *
 * @param selector
 * @param root
 * @returns
 * @deprecated
 */
export declare const select: (selector: string, root: Element) => any;
/**
 * @deprecated
 */
export declare const selectAll: (selector: string, root: Element) => any[];
/**
 * @deprecated
 */
export declare const getAttr: (el: HTMLElement | Element, attr: string) => string | null;
/**
 * Get an element given an ID
 * @deprecated
 */
export declare const getById: (id: string) => any;
/**
 * @deprecated
 */
export declare const setAttr: (el: HTMLElement, attr: string, value: string) => void;
/**
 * Remove an attribute from an element
 *
 * @param el
 * @param attr
 * @deprecated
 */
export declare const removeAttr: (el: HTMLElement, attr: string) => void;
/**
 * @deprecated
 */
export declare const isTag: (tag: string, name: string) => boolean;
/**
 * @deprecated
 */
export declare const requestAF: AnimationFrame;
/**
 * @deprecated
 */
export declare const matches: (el: Element, selector: string) => boolean;
/**
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 * @deprecated
 */
export declare const closestEl: {
    <K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null;
    <K_1 extends keyof SVGElementTagNameMap>(selector: K_1): SVGElementTagNameMap[K_1] | null;
    <K_2 extends keyof MathMLElementTagNameMap>(selector: K_2): MathMLElementTagNameMap[K_2] | null;
    <E extends Element = Element>(selectors: string): E | null;
};
/**
 * Finds closest element matching selector. Returns `null` if not found
 *
 * @param selector
 * @param root
 * @param includeRoot
 * @deprecated
 */
export declare const closest: (selector: string, root: Element, includeRoot?: boolean) => Element | null;
/**
 * @deprecated
 */
export declare const getTransitionDelay: (element: HTMLElement) => number;
