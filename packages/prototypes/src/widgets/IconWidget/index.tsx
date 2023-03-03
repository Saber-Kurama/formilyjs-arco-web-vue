import { isFn, isPlainObj, isStr } from '@formily/shared'
import { defineComponent, isVNode, PropType, unref, VNode } from 'vue'
import { TooltipInstance } from '@arco-design/web-vue/es/tooltip'
import cls from 'classnames'
import { usePrefix, useRegistry } from '../../hooks'
import { cloneElement, useStyle } from '../../shared'

const isNumSize = (val: any) => /^[\d.]+$/.test(val)

export interface IIconWidgetProps extends HTMLElement {
  tooltip?: TooltipInstance['$props']
  infer: VNode | { shadow: string }
  size?: number | string
}

const __IconWidgetInner = defineComponent({
  name: 'IconWidget',
  props: {
    tooltip: {
      type: Object as PropType<
        TooltipInstance['$props'] & { content: string | VNode }
      >,
    },
    infer: {
      type: [String, Function, Object] as PropType<IIconWidgetProps['infer']>,
    },
    size: { type: [Number, String] },
  },
  setup(props, { attrs, emit }) {
    const themeRef = useTheme()
    const registry = useRegistry()
    const prefixRef = usePrefix('icon')
    return () => {
      const size = isNumSize(props.size)
        ? `${props.size}px`
        : props.size || '1em'

      const style = useStyle()
      const height = style?.height || size
      const width = style?.width || size

      const takeIcon: any = (infer: any) => {
        if (isStr(infer)) {
          const finded = registry.getDesignerIcon(infer)
          if (finded) {
            return takeIcon(finded)
          }
          return <img src={infer} height={height} width={width} />
        } else if (isFn(infer)) {
          return (
            <infer
              {...{ height: height, width: width, fill: 'currentColor' }}
              fill="currentColor"
            ></infer>
          )
        } else if (isVNode(infer)) {
          if (infer.type === 'svg') {
            const Component = cloneElement(infer, {
              height,
              width,
              fill: 'currentColor',
              viewBox: infer.props?.viewBox || '0 0 1024 1024',
              focusable: 'false',
              'aria-hidden': 'true',
            })
            return Component
          } else if (infer.type === 'path' || infer.type === 'g') {
            return (
              <svg
                viewBox="0 0 1024 1024"
                height={height}
                width={width}
                fill="currentColor"
                focusable="false"
                aria-hidden="true"
              >
                {infer}
              </svg>
            )
          }
          return infer
        } else if (isPlainObj(infer)) {
          const theme = unref(themeRef)
          if (infer[theme]) {
            return takeIcon(infer[theme])
          } else if (infer['shadow']) {
            return (
              <IconWidget.ShadowSVG
                width={width}
                height={height}
                content={infer['shadow']}
              />
            )
          }
        }
        return null
      }

      const renderTooltips = (children: any) => {
        //  const IconContext = unref(IconContextRef)
        //  if (!isStr(props.infer) && IconContext?.tooltip) return children
        //  const tooltip =
        //    props.tooltip || registry.getDesignerMessage(`icons.${props.infer}`)
        //  if (tooltip) {
        //    const props = isObj(tooltip) ? tooltip : { content: tooltip }
        //    const { content, ..._props } = props as any
        //    return (
        //      <ElTooltip
        //        showAfter={200}
        //        {..._props}
        //        v-slots={{ content: () => content }}
        //      >
        //        {children}
        //      </ElTooltip>
        //    )
        //  }
        return children
      }
      if (!props.infer) {
        return null
      }
      return renderTooltips(
        <span
          {...attrs}
          class={cls(prefixRef.value)}
          style={{
            cursor: attrs.onClick ? 'pointer' : style?.cursor,
          }}
          onClick={() => emit('click')}
        >
          {/* {takeIcon(props.infer)} */}
        </span>
      )
    }
  },
})

// import React, { createContext, useContext, useEffect, useRef } from 'react'
// import { isStr, isFn, isObj, isPlainObj } from '@designable/shared'
// import { observer } from '@formily/reactive-react'
// import { Tooltip, TooltipProps } from 'antd'
// import { usePrefix, useRegistry, useTheme } from '../../hooks'
// import cls from 'classnames'
// import './styles.less'

// const IconContext = createContext<IconProviderProps>(null)

// const isNumSize = (val: any) => /^[\d.]+$/.test(val)
// export interface IconProviderProps {
//   tooltip?: boolean
// }

// export interface IShadowSVGProps {
//   content?: string
//   width?: number | string
//   height?: number | string
// }
// export interface IIconWidgetProps extends React.HTMLAttributes<HTMLElement> {
//   tooltip?: React.ReactNode | TooltipProps
//   infer: React.ReactNode | { shadow: string }
//   size?: number | string
// }

// export const IconWidget: React.FC<IIconWidgetProps> & {
//   Provider?: React.FC<IconProviderProps>
//   ShadowSVG?: React.FC<IShadowSVGProps>
// } = observer((props: React.PropsWithChildren<IIconWidgetProps>) => {
//   const theme = useTheme()
//   const context = useContext(IconContext)
//   const registry = useRegistry()
//   const prefix = usePrefix('icon')
//   const size = props.size || '1em'
//   const height = props.style?.height || size
//   const width = props.style?.width || size
//   const takeIcon = (infer: React.ReactNode) => {
//     if (isStr(infer)) {
//       const finded = registry.getDesignerIcon(infer)
//       if (finded) {
//         return takeIcon(finded)
//       }
//       return <img src={infer} height={height} width={width} />
//     } else if (isFn(infer)) {
//       return React.createElement(infer, {
//         height,
//         width,
//         fill: 'currentColor',
//       })
//     } else if (React.isValidElement(infer)) {
//       if (infer.type === 'svg') {
//         return React.cloneElement(infer, {
//           height,
//           width,
//           fill: 'currentColor',
//           viewBox: infer.props.viewBox || '0 0 1024 1024',
//           focusable: 'false',
//           'aria-hidden': 'true',
//         })
//       } else if (infer.type === 'path' || infer.type === 'g') {
//         return (
//           <svg
//             viewBox="0 0 1024 1024"
//             height={height}
//             width={width}
//             fill="currentColor"
//             focusable="false"
//             aria-hidden="true"
//           >
//             {infer}
//           </svg>
//         )
//       }
//       return infer
//     } else if (isPlainObj(infer)) {
//       if (infer[theme]) {
//         return takeIcon(infer[theme])
//       } else if (infer['shadow']) {
//         return (
//           <IconWidget.ShadowSVG
//             width={width}
//             height={height}
//             content={infer['shadow']}
//           />
//         )
//       }
//       return null
//     }
//   }
//   const renderTooltips = (children: React.ReactElement): React.ReactElement => {
//     if (!isStr(props.infer) && context?.tooltip) return children as any
//     const tooltip =
//       props.tooltip || registry.getDesignerMessage(`icons.${props.infer}`)
//     if (tooltip) {
//       const title =
//         React.isValidElement(tooltip) || isStr(tooltip)
//           ? tooltip
//           : tooltip.title
//       const props =
//         React.isValidElement(tooltip) || isStr(tooltip)
//           ? {}
//           : isObj(tooltip)
//           ? tooltip
//           : {}
//       return (
//         <Tooltip {...props} title={title}>
//           {children}
//         </Tooltip>
//       )
//     }
//     return children
//   }
//   if (!props.infer) return null
//   return renderTooltips(
//     <span
//       {...props}
//       className={cls(prefix, props.className)}
//       style={{
//         ...props.style,
//         cursor: props.onClick ? 'pointer' : props.style?.cursor,
//       }}
//     >
//       {takeIcon(props.infer)}
//     </span>
//   )
// })

// IconWidget.ShadowSVG = (props) => {
//   const ref = useRef<HTMLDivElement>()
//   const width = isNumSize(props.width) ? `${props.width}px` : props.width
//   const height = isNumSize(props.height) ? `${props.height}px` : props.height
//   useEffect(() => {
//     if (ref.current) {
//       const root = ref.current.attachShadow({
//         mode: 'open',
//       })
//       root.innerHTML = `<svg viewBox="0 0 1024 1024" style="width:${width};height:${height}">${props.content}</svg>`
//     }
//   }, [])
//   return <div ref={ref}></div>
// }

// IconWidget.Provider = (props) => {
//   return (
//     <IconContext.Provider value={props}>{props.children}</IconContext.Provider>
//   )
// }
