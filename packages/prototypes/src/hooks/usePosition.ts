import { computed, unref } from 'vue'
import { useLayout } from './useLayout'

export const usePosition = () => {
  const layoutRef = useLayout()
  const positionRef = computed(() => unref(layoutRef)?.position)
  return positionRef
}
