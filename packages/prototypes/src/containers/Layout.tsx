import { each } from '@formily/shared'
import { defineComponent, PropType, ref, watch } from 'vue'
import { DesignerLayoutSymbol, useContext } from '../context'
import { IDesignerLayoutContext, IDesignerLayoutProps } from '../types'

export const Layout = defineComponent({
  name: 'DnLayout',
  props: {
    theme: {
      type: String as PropType<IDesignerLayoutProps['theme']>,
      default: 'light',
    },
    prefixCls: {
      type: String as PropType<IDesignerLayoutProps['prefixCls']>,
      default: 'dn-',
    },
    variables: {
      type: Object as PropType<IDesignerLayoutProps['variables']>,
      default: () => {
        return {}
      },
    },
    position: {
      type: String as PropType<IDesignerLayoutProps['position']>,
      default: 'fixed',
    },
  },
  setup(props, { slots }) {
    const layoutRef = useContext<IDesignerLayoutContext>(DesignerLayoutSymbol)
    const containerRef = ref<HTMLDivElement>()

    watch(containerRef, () => {
      if (containerRef.value) {
        // 设置css变量
        each(props.variables!, (value, key) => {
          containerRef.value?.style?.setProperty(`--${key}`, value)
        })
      }
    })

    if (layoutRef.value) {
      return () => {
        return slots.default?.()
      }
    }

    return () => {
      return (
        <div
          ref={containerRef}
          class={{
            [`${props.prefixCls}app`]: true,
            [`${props.prefixCls}${props.theme}`]: props.theme,
          }}
        >
          {slots.default?.()}
        </div>
      )
    }
  },
})

// import React, { useContext, Fragment, useRef, useLayoutEffect } from 'react'
// import { each } from '@designable/shared'
// import { DesignerLayoutContext } from '../context'
// import { IDesignerLayoutProps } from '../types'
// import cls from 'classnames'
// // 布局组件
// export const Layout: React.FC<IDesignerLayoutProps> = (props) => {
//   // 如果有布局的话
//   const layout = useContext(DesignerLayoutContext)
//   const ref = useRef<HTMLDivElement>()

//   useLayoutEffect(() => {
//     if (ref.current) {
//       // 设置css变量
//       each(props.variables, (value, key) => {
//         ref.current.style.setProperty(`--${key}`, value)
//       })
//     }
//   }, [])

//   if (layout) {
//     return <Fragment>{props.children}</Fragment>
//   }
//   return (
//     <div
//       ref={ref}
//       className={cls({
//         [`${props.prefixCls}app`]: true,
//         [`${props.prefixCls}${props.theme}`]: props.theme,
//       })}
//     >
//       <DesignerLayoutContext.Provider
//         value={{
//           theme: props.theme,
//           prefixCls: props.prefixCls,
//           position: props.position,
//         }}
//       >
//         {props.children}
//       </DesignerLayoutContext.Provider>
//     </div>
//   )
// }

// Layout.defaultProps = {
//   theme: 'light',
//   prefixCls: 'dn-',
//   position: 'fixed',
// }
