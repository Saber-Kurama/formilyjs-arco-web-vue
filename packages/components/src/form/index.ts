import { FormProvider, h, useForm } from '@formily/vue'
import { Form as FormType, IFormFeedback } from '@formily/core'
import { defineComponent } from 'vue'
import { Form as AForm } from '@arco-design/web-vue'

export const Form = defineComponent({
  name: 'FForm',
  props: [
    'form',
    // 'component',
    // 'previewTextPlaceholder',
    // 'onAutoSubmit',
    // 'onAutoSubmitFailed',
  ],
  setup(props: any, { attrs, slots }: any) {
    const top = useForm()

    return () => {
      const {
        form,
        // component = 'form',
        // onAutoSubmit = attrs.onAutoSubmit,
        // onAutoSubmitFailed = attrs.autoSubmitFailed,
        // previewTextPlaceholder = slots?.previewTextPlaceholder,
      } = props
      const renderContent = (form: FormType) => {
        return h(AForm, { attrs, model: {} }, slots)
      }
      if (form) {
        return h(
          FormProvider,
          { form },
          {
            default: () => renderContent(form),
          }
        )
      }
      if (!top.value) throw new Error('must pass form instance by createForm')
      return renderContent(top.value)
    }
  },
})

export default Form
