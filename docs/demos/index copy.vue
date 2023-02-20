<template>
  <AInputNumber :modelValue="refNum"></AInputNumber>
  <FormProvider :form="form">
    <Space>
      <Field
        name="price"
        title="价格"
        :initialValue="5.2"
        :decorator="[FormItem]"
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
      <FormItem>×</FormItem>
      <Field
        name="count"
        title="数量"
        :initialValue="100"
        :decorator="[FormItem]"
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
          <FormItem>
            = {{ `${form.values.price * form.values.count} 元` }}</FormItem
          >
        </template>
      </FormConsumer>
      <FormItem> = {{ `${form.values.price} 元` }}</FormItem>
    </Space>
    <Button @click="onClick">提交</Button>
  </FormProvider>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import {
  FormItem,
  Space,
  Button,
  InputNumber as AInputNumber,
} from '@arco-design/web-vue'
// @ts-ignore
import { InputNumber } from '@formily/arco-web-vue/src/index'
import { FormProvider, FormConsumer, Field } from '@formily/vue'
import { ref } from 'vue'
const refNum = ref(10)

const form = createForm()
const onClick = () => {
  setTimeout(() => {
    // form.values.price = 10
    form.setValuesIn('price', 10)
    console.log('form', form)
  }, 3000)
}
</script>
