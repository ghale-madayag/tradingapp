import { type ComponentInternalInstance, type Ref } from 'vue';
export declare const useSharedModalStack: () => {
    registry: Ref<ComponentInternalInstance[]>;
    stack: Ref<ComponentInternalInstance[]>;
    lastStack: Readonly<Ref<ComponentInternalInstance>>;
    countStack: Readonly<Ref<number>>;
    pushStack: (modal: ComponentInternalInstance) => void;
    removeStack: (modal: ComponentInternalInstance) => void;
    pushRegistry: (modal: ComponentInternalInstance) => void;
    removeRegistry: (modal: ComponentInternalInstance) => void;
    dispose: (modal: ComponentInternalInstance) => void;
};
declare const _default: (modalOpen: Ref<boolean>) => {
    activePosition: import("vue").ComputedRef<number>;
    activeModalCount: Readonly<Ref<number>>;
};
export default _default;
