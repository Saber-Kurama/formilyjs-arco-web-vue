<template>
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
      <FormItem>x</FormItem>
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
    </Space>
  </FormProvider>
</template>

<script lang="ts" setup>
import { createForm } from '@formily/core'
import { Space, Button } from '@arco-design/web-vue'
import { InputNumber, FormItem } from '@dangojs/formily-arco-web-vue'
import { FormProvider, FormConsumer, Field } from '@formily/vue'
import { onRenderTracked, onRenderTriggered } from 'vue'

onRenderTracked((event) => {
  debugger
})

onRenderTriggered((event) => {
  debugger
})

const form = createForm()
</script>
