import { RecursionField, useField, useFieldSchema } from '@formily/vue'
import type { ArrayField } from '@formily/core'
import { observer } from '@formily/reactive-vue'
import { defineComponent, Fragment, h } from 'vue'
import { ArrayBase } from '../array-base'

const ArrayItemsInner = defineComponent({
  name: 'FArrayItems',
  inheritAttrs: false,
  setup(props, ctx) {
    return () => {
      const renderItems = () => {
        return h('div', {}, 'saber')
      }
      return h(
        'div',
        {},
        {
          default: () => {
            return h(
              'div',
              {},
              {
                default: () => [renderItems()],
              }
            )
          },
        }
      )
    }
  },
})

export const ArraySimpleList = observer(
  defineComponent({
    name: 'FArraySimpleList',
    inheritAttrs: false,
    setup(props, ctx) {
      const fieldRef = useField<ArrayField>()
      const schemaRef = useFieldSchema()
      const { getKey, keyMap } = ArrayBase.useKey(schemaRef.value)
      return () => {
        const field = fieldRef.value
        const schema = schemaRef.value
        const dataSource = Array.isArray(field.value) ? field.value.slice() : []
        if (!schema) throw new Error('can not found schema object')
        const renderItems = () => {
          const items = dataSource?.map((item, index) => {
            const schemaItem = Array.isArray(schema.items)
              ? schema.items[index] || schema.items[0]
              : schema.items
            const key = getKey(item, index)
            return h(Fragment, [
              h(RecursionField, { schema: schemaItem, name: index }, {}),
            ])
          })
          return items
        }
        return h(Fragment, renderItems())
      }
    },
  })
)
