import { transformComponent } from '../__builtins__'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { Input as AInput } from '@arco-design/web-vue'

export type InputProps = typeof AInput

const TransformAInput = transformComponent<InputProps>(AInput, {
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
