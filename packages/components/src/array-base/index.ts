import { Schema } from '@formily/json-schema'
import { uid } from '@formily/shared'
import { defineComponent, h, onBeforeUnmount } from 'vue'
import { composeExport } from '../__builtins__/shared'

const isObjectValue: (schema: Schema) => boolean = (schema: Schema) => {
  if (Array.isArray(schema?.items)) return isObjectValue(schema.items[0])

  if (schema?.items?.type === 'array' || schema?.items?.type === 'object') {
    return true
  }
  return false
}
const useKey = (schema: Schema) => {
  const isObject = isObjectValue(schema)
  let keyMap: WeakMap<Record<string, unknown>, string> | string[] | null = null

  if (isObject) {
    keyMap = new WeakMap()
  } else {
    keyMap = []
  }

  onBeforeUnmount(() => {
    keyMap = null
  })

  return {
    keyMap,
    getKey: (record: any, index: number) => {
      if (keyMap instanceof WeakMap) {
        if (!keyMap.has(record)) {
          keyMap.set(record, uid())
        }
        return `${keyMap.get(record)}-${index}`
      }

      if (keyMap && !keyMap[index]) {
        keyMap[index] = uid()
      }
      return keyMap ? `${keyMap[index]}-${index}` : undefined
    },
  }
}

const ArrayBaseInner = defineComponent({
  name: 'FArrayBase',
  setup(props, ctx) {
    return () => {
      return h('div', {}, '这是')
    }
  },
})

export const ArrayBase = composeExport(ArrayBaseInner, { useKey })
