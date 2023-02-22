<script setup lang="ts">
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import { Button, Space, RadioGroup, Radio } from '@arco-design/web-vue'
import { Form, FormItem, Input } from '@dangojs/formily-arco-web-vue'
import { ref } from 'vue'

const layout = ref('horizontal')

const schema = {
  type: 'object',
  properties: {
    input: {
      type: 'string',
      title: '输入框',
      required: true,
      'x-decorator': 'FormItem',
      'x-decorator-props': {
        tooltip: 'Please enter username',
      },
      'x-component': 'Input',
    },
    textarea: {
      type: 'string',
      title: '文本框',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}

const form = createForm()
const { SchemaField } = createSchemaField({
  components: {
    Form,
    FormItem,
    Input,
  },
})
const onclick = async () => {
  // await form?.validate()
  // console.log('form', form)
  form?.submit(onSubmit)
  console.log('form', form)
}
const onSubmit = (value) => {
  console.log(value)
}
</script>

<template>
  <Space direction="vertical" size="large" :style="{ width: '600px' }">
    <RadioGroup v-model="layout" type="button">
      <Radio value="horizontal">horizontal</Radio>
      <Radio value="vertical">vertical</Radio>
      <Radio value="inline">inline</Radio>
    </RadioGroup>
    <Form :form="form" :layout="layout">
      <SchemaField :schema="schema" />
      <!-- <Submit @submit="onSubmit">提交</Submit> -->
      <FormItem>
        <Button @click="onclick">提交</Button>
      </FormItem>
    </Form>
  </Space>
</template>
