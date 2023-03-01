import { TreeNode, Engine } from '@designable/core'
import { inject, InjectionKey, ref, Ref } from 'vue'
import {
  IDesignerLayoutContext,
  IWorkspaceContext,
  // IDesignerComponents,
} from './types'

// export const DesignerComponentsContext = createContext<IDesignerComponents>({})

// export const DesignerLayoutContext = createContext<IDesignerLayoutContext>(null)

// export const DesignerEngineContext = createContext<Engine>(null)

// export const TreeNodeContext = createContext<TreeNode>(null)

// export const WorkspaceContext = createContext<IWorkspaceContext>(null)

export const DesignerLayoutSymbol: InjectionKey<Ref<IDesignerLayoutContext>> =
  Symbol('DesignerLayoutSymbol')

export const DesignerEngineSymbol: InjectionKey<Ref<Engine>> = Symbol(
  'DesignerEngineSymbol'
)
export const WorkspaceSymbol: InjectionKey<Ref<IWorkspaceContext>> =
  Symbol('WorkspaceSymbol')

export function useContext<T>(key: InjectionKey<Ref<T>>) {
  return inject(key, ref())
}
