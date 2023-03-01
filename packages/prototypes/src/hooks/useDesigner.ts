import { inject, onBeforeUnmount, Ref, ref } from 'vue'
import { Engine } from '@designable/core'
import { DesignerEngineSymbol } from '../context'
import { isFn, globalThisPolyfill } from '@designable/shared'
export interface IEffects {
  (engine: Engine): void
}

export const useDesigner = (effects?: IEffects): Ref<Engine> => {
  const designer: Ref<Engine> = globalThisPolyfill['__DESIGNABLE_ENGINE__']
    ? ref(globalThisPolyfill['__DESIGNABLE_ENGINE__'])
    : inject(DesignerEngineSymbol, ref())

  const unRef: any = isFn(effects) ? effects(designer.value) : undefined
  onBeforeUnmount(() => {
    unRef?.()
  })
  return designer
}
