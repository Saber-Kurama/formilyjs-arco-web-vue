import { defineComponent, PropType, unref } from 'vue'
import cls from 'classnames'
import { Layout } from '../containers'
import { IDesignerLayoutProps } from '../types'
import { usePosition, usePrefix } from '../hooks'

const StudioPanelInternal = defineComponent({
  name: 'StudioPanelInternal',
  setup(props, { attrs, slots }) {
    const prefixRef = usePrefix('main-panel')
    const positionRef = usePosition()

    return () => {
      const position = unref(positionRef)
      const prefix = unref(prefixRef)
      if (slots.logo || slots.actions) {
        return (
          <div {...attrs} class={cls(prefix + '-container', 'root', position)}>
            <div class={prefix + '-header'}>
              <div class={prefix + '-header-logo'}>{slots.logo?.()}</div>
              <div class={prefix + '-header-actions'}>{slots.actions?.()}</div>
            </div>
            <div class={prefix}>{slots.default?.()}</div>
          </div>
        )
      }
      return (
        <div {...attrs} class={cls(prefixRef.value, 'root', position)}>
          {slots.default?.()}
        </div>
      )
    }
  },
})

export const StudioPanel = defineComponent({
  name: 'StudioPanel',
  props: {
    theme: {
      type: String as PropType<IDesignerLayoutProps['theme']>,
      default: 'light',
    },
    prefixCls: { type: String, default: 'dn-' },
    position: {
      type: String as PropType<IDesignerLayoutProps['position']>,
      default: 'fixed',
    },
  },
  setup(props, { slots }) {
    return () => (
      <Layout
        {...{
          theme: props.theme,
          prefixCls: props.prefixCls,
          position: props.position,
        }}
      >
        <StudioPanelInternal {...props} v-slots={slots} />
      </Layout>
    )
  },
})
// import React from 'react'
// import { usePrefix, usePosition } from '../hooks'
// import { Layout } from '../containers'
// import cls from 'classnames'
// export interface IStudioPanelProps {
//   style?: React.CSSProperties
//   className?: string
//   logo?: React.ReactNode
//   actions?: React.ReactNode
//   prefixCls?: string
//   theme?: string
//   position?: React.ComponentProps<typeof Layout>['position']
// }

// const StudioPanelInternal: React.FC<IStudioPanelProps> = ({
//   logo,
//   actions,
//   ...props
// }) => {
//   const prefix = usePrefix('main-panel')
//   const position = usePosition()
//   const classNameBase = cls('root', position, props.className)
//   if (logo || actions) {
//     return (
//       <div {...props} className={cls(`${prefix}-container`, classNameBase)}>
//         <div className={prefix + '-header'}>
//           <div className={prefix + '-header-logo'}>{logo}</div>
//           <div className={prefix + '-header-actions'}>{actions}</div>
//         </div>
//         <div className={prefix}>{props.children}</div>
//       </div>
//     )
//   }
//   return (
//     <div {...props} className={cls(prefix, classNameBase)}>
//       {props.children}
//     </div>
//   )
// }

// export const StudioPanel: React.FC<IStudioPanelProps> = (props) => {
//   return (
//     <Layout
//       theme={props.theme}
//       prefixCls={props.prefixCls}
//       position={props.position}
//     >
//       <StudioPanelInternal {...props} />
//     </Layout>
//   )
// }
