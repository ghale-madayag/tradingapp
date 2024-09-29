import type { Booleanish } from '../types';
import { type ComputedRef, type MaybeRefOrGetter } from 'vue';
/**
 * Resolves a Booleanish type reactively to type boolean
 */
declare const _default: <T>(el: MaybeRefOrGetter<T>) => ComputedRef<T extends Booleanish ? boolean : T>;
export default _default;
