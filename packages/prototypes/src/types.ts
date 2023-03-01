import { Engine, IResource, IBehavior } from '@designable/core'

export interface IDesignerLayoutProps {
  // 样式前缀
  prefixCls?: string
  theme?: 'dark' | 'light' | (string & object)
  // 变量
  variables?: Record<string, string>
  // 定位
  position?: 'fixed' | 'absolute' | 'relative'
}
export interface IDesignerProps extends IDesignerLayoutProps {
  // 引擎
  engine: Engine
}

// export interface IDesignerComponents {
//   [key: string]: DnFC<any> | DnComponent<any>
// }

export interface IDesignerLayoutContext {
  theme?: 'dark' | 'light' | (string & object)
  prefixCls: string
  position: 'fixed' | 'absolute' | 'relative'
}

export interface IWorkspaceContext {
  id: string
  title?: string
  description?: string
}

// export type DnFC<P = {}> = React.FC<P> & {
//   Resource?: IResource[]
//   Behavior?: IBehavior[]
// }

// export type DnComponent<P = {}> = React.ComponentType<P> & {
//   Resource?: IResource[]
//   Behavior?: IBehavior[]
// }
