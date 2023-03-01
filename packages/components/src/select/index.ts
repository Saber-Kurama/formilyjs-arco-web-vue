import { transformComponent } from '../__builtins__'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { Select as ASelect } from '@arco-design/web-vue'

export type SelectProps = typeof ASelect

const TransformAInput = transformComponent<SelectProps>(ASelect, {
  change: 'update:modelValue',
})

export const Input = connect(
  TransformAInput,
  mapProps({
    value: 'modelValue',
    readOnly: 'readonly',
  }),
  mapReadPretty({})
)

export default Input
