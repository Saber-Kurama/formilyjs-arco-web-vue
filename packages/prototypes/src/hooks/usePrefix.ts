import { computed, unref } from 'vue'
import { useLayout } from './useLayout'

export const usePrefix = (after = '') => {
  const layoutRef = useLayout()
  const prefixRef = computed(() => unref(layoutRef)?.prefixCls + after)
  return prefixRef
}
