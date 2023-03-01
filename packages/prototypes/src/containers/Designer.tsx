import {
  defineComponent,
  onBeforeUnmount,
  PropType,
  provide,
  ref,
  toRef,
  watchEffect,
} from 'vue'
import { Engine, GlobalRegistry } from '@designable/core'
import { useDesigner } from '../hooks'
import { IDesignerProps } from '../types'
import { DesignerEngineSymbol } from '../context'
import { Layout } from './Layout'

export const Designer = defineComponent({
  name: 'DnDesigner',
  props: {
    engine: {
      type: Object as PropType<IDesignerProps['engine']>,
    },
    prefixCls: {
      type: String as PropType<IDesignerProps['prefixCls']>,
      default: 'dn-',
    },
    theme: {
      type: String as PropType<IDesignerProps['theme']>,
      default: 'light',
    },
  },
  setup(props, { slots }) {
    const engine = useDesigner()
    const refInstance = ref<Engine | null>(null)
    provide(DesignerEngineSymbol, toRef(props, 'engine'))
    watchEffect(() => {
      if (props.engine) {
        if (props.engine && refInstance.value) {
          if (props.engine !== refInstance.value) {
            refInstance.value.unmount()
          }
        }
        props.engine.mount()
        refInstance.value = props.engine
      }
    })

    onBeforeUnmount(() => {
      if (props.engine) {
        props.engine.unmount()
      }
    })
    if (engine.value)
      throw new Error(
        'There can only be one Designable Engine Context in the React Tree'
      )
    return () => {
      return (
        <Layout {...{ theme: props.theme, prefixCls: props.prefixCls }}>
          {slots.default?.()}
          开始写界面
        </Layout>
      )
    }
  },
})
// import React, { useEffect, useRef } from 'react'
// import { Engine, GlobalRegistry } from '@designable/core'
// import { DesignerEngineContext } from '../context'
// import { IDesignerProps } from '../types'
// import { GhostWidget } from '../widgets'
// import { useDesigner } from '../hooks'
// import { Layout } from './Layout'
// import * as icons from '../icons'

// GlobalRegistry.registerDesignerIcons(icons)

// export const Designer: React.FC<IDesignerProps> = (props) => {
//   const engine = useDesigner()
//   const ref = useRef<Engine>()
//   useEffect(() => {
//     if (props.engine) {
//       if (props.engine && ref.current) {
//         if (props.engine !== ref.current) {
//           ref.current.unmount()
//         }
//       }
//       props.engine.mount()
//       ref.current = props.engine
//     }
//     return () => {
//       if (props.engine) {
//         props.engine.unmount()
//       }
//     }
//   }, [props.engine])

//   if (engine)
//     throw new Error(
//       'There can only be one Designable Engine Context in the React Tree'
//     )

//   return (
//     <Layout {...props}>
//       <DesignerEngineContext.Provider value={props.engine}>
//         {props.children}
//         <GhostWidget />
//       </DesignerEngineContext.Provider>
//     </Layout>
//   )
// }

// Designer.defaultProps = {
//   prefixCls: 'dn-',
//   theme: 'light',
// }
