import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { FormItem as AFormItem } from '@arco-design/web-vue'
import { defineComponent, h } from 'vue'
import { isVoidField } from '@formily/core'

const _AFormItem = defineComponent({
  name: 'FAFormItem',
  props: {
    label: String,
    // required: Boolean,
  },
  setup(props, { attrs, slots }) {
    // 如何判断
    return () => {
      return h(AFormItem, { ...props, ...attrs }, slots)
    }
  },
})

export const FormItem = connect(
  _AFormItem,
  mapProps(
    {
      title: 'label',
      required: 'required',
    },
    (props, field) => {
      const getValidateStatus = (field) => {
        if (!isVoidField(field) && field.selfErrors?.[0]) {
          return {
            'validate-status': 'error',
            help: field.selfErrors?.[0],
          }
        }
        return {}
      }
      return {
        ...getValidateStatus(field),
      }
    }
  )
)

export default FormItem
