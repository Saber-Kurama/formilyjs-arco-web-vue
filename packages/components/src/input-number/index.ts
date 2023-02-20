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
const _AInputNumber = defineComponent({
  name: 'FAInputNumber124',
  inheritAttrs: false,
  props: ['onChange', 'modelValue', 'onBlur', 'value'],
  setup(props, { attrs, slots, emit }) {
    const newAttrs = {
      ...attrs,
    }
    delete newAttrs.value
    watch(
      () => props.value,
      (val) => {
        // console.log('valssss', val)
      }
    )
    watch(props.value, (val) => {
      // console.log('valssssaaa', val)
    })
    return () => {
      return h('div', [`${props.value}`])
      return h(
        AInputNumber,
        {
          ...props,
          ...newAttrs,
          onChange: (val) => {
            // console.log('修改值', val)
            props.onChange(val)
            emit('update:modelValue', val)
          },
          onBlur: (val) => {
            // console.log('xxxx')
          },
        },
        slots
      )
    }
  },
})
export const InputNumber = connect(
  _AInputNumber,
  mapProps(),
  // {
  //   value: 'modelValue',
  //   readOnly: 'readonly',
  // }
  // (props) => {
  //   let controlsPosition = 'right'
  //   if (props.controlsPosition) {
  //     controlsPosition = props.controlsPosition
  //   }
  //   return {
  //     controlsPosition,
  //     modelValue: props.modelValue,
  //   }
  // }
  mapReadPretty({})
)

export default InputNumber
