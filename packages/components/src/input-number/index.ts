import { transformComponent } from '../__builtins__'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { InputNumber as AInputNumber } from '@arco-design/web-vue'
import { defineComponent, h, watch } from 'vue'

export type InputNumberProps = typeof AInputNumber

const _TransformElInputNumber = transformComponent<InputNumberProps>(
  AInputNumber,
  {
    change: 'update:modelValue',
  }
)

export const InputNumber = connect(
  _TransformElInputNumber,
  mapProps({
    value: 'modelValue',
    readOnly: 'readonly',
  }),
  mapReadPretty({})
)

export default InputNumber
