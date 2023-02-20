<template>
  <FormProvider :form="form">
    <Space>
      <Field
        name="price"
        title="价格"
        :initialValue="5.2"
        :component="[
          InputNumber,
          {
            placeholder: '请输入',
            style: {
              width: 100,
            },
          },
        ]"
      />

      <Field
        name="count"
        title="数量"
        :initialValue="100"
        :component="[
          InputNumber,
          {
            placeholder: '请输入',
            style: {
              width: 100,
            },
          },
        ]"
      />
      <FormConsumer>
        <template #default="{ form }">
          = {{ `${form.values.price * form.values.count} 元` }}
        </template>
      </FormConsumer>
    </Space>
  </FormProvider>
  <Button @click="onClick">提交</Button>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { ElFormItem as FormItem, ElSpace as Space } from 'element-plus'
import { InputNumber } from '@formily/arco-web-vue/src/index'
import { FormProvider, FormConsumer, Field } from '@formily/vue'
import { onRenderTracked, onRenderTriggered } from 'vue'

onRenderTracked((event) => {
  debugger
})

onRenderTriggered((event) => {
  debugger
})

const form = createForm()

const onClick = () => {
  setTimeout(() => {
    // form.values.price = 10
    form.setValuesIn('price', 10)
    console.log('form', form)
  }, 3000)
}
</script>
