/**
 * @deprecated
 */
export declare const parseEventOptions: (options: boolean | EventListenerOptions | undefined) => boolean | EventListenerOptions | undefined;
/**
 * @deprecated
 */
export declare const eventOn: (el: Element, eventName: string, handler: EventListener, options: boolean | EventListenerOptions | undefined) => void;
/**
 * @deprecated
 */
export declare const eventOff: (el: Element, eventName: string, handler: EventListener, options: boolean | EventListenerOptions | undefined) => void;
/**
 * @deprecated
 */
export declare const eventOnOff: (on: boolean, eventParams: [el: Element, eventName: string, handler: EventListener, options: boolean | EventListenerOptions | undefined]) => void;
/**
 * @deprecated
 */
export declare const stopEvent: (event: Event, { preventDefault, propagation, immediatePropagation }?: {
    preventDefault?: boolean | undefined;
    propagation?: boolean | undefined;
    immediatePropagation?: boolean | undefined;
}) => void;
