import { globalThisPolyfill } from '@formily/shared'
import { ComputedRef, inject, ref } from 'vue'
import { DesignerLayoutSymbol } from '../context'
import { IDesignerLayoutContext } from '../types'

export const useLayout = (): ComputedRef<IDesignerLayoutContext> => {
  return globalThisPolyfill['__DESIGNABLE_LAYOUT__']
    ? ref(globalThisPolyfill['__DESIGNABLE_LAYOUT__'])
    : inject(DesignerLayoutSymbol, ref())
}

// import { useContext } from 'react'
// import { DesignerLayoutContext } from '../context'
// import { IDesignerLayoutContext } from '../types'
// import { globalThisPolyfill } from '@designable/shared'

// export const useLayout = (): IDesignerLayoutContext => {
//   return (
//     globalThisPolyfill['__DESIGNABLE_LAYOUT__'] ||
//     useContext(DesignerLayoutContext)
//   )
// }
