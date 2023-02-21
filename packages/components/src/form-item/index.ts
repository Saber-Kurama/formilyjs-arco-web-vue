import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { FormItem as AFormItem } from '@arco-design/web-vue'
import { defineComponent, h } from 'vue'

const _AFormItem = defineComponent({
  name: 'FAFormItem',
  props: {
    label: String,
  },
  setup(props, { attrs, slots }) {
    console.log('props----', props)
    console.log('attrs----', attrs)
    console.log('slots----', slots)
    return () => {
      return h(AFormItem, { ...props, ...attrs }, slots)
    }
  },
})

export const FormItem = connect(
  _AFormItem,
  mapProps({
    title: 'label',
  })
)

export default FormItem
