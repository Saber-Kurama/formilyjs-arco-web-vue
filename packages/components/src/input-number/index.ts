import { transformComponent } from '../__builtins__'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { InputNumber as AInputNumber } from '@arco-design/web-vue'

export type InputNumberProps = typeof AInputNumber

const TransformAInputNumber = transformComponent<InputNumberProps>(
  AInputNumber,
  {
    change: 'update:modelValue',
  }
)

export const InputNumber = connect(
  TransformAInputNumber,
  mapProps({
    value: 'modelValue',
    readOnly: 'readonly',
  }),
  mapReadPretty({})
)

export default InputNumber
