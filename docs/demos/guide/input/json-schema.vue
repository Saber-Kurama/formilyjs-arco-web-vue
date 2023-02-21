<template>
  <Form :form="form" auto-label-width>
    <SchemaField :schema="schema" />
    <!-- <Submit @submit="onSubmit">提交</Submit> -->
  </Form>
  <div>asdasd</div>
</template>

<script>
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import { Form, FormItem, Input } from '@formily/arco-web-vue/src/index'

const schema = {
  type: 'object',
  properties: {
    input: {
      type: 'string',
      title: '输入框',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    textarea: {
      type: 'string',
      title: '文本框',
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

export default {
  components: { Form, SchemaField, FormProvider },
  data() {
    return {
      form,
      schema,
    }
  },
  methods: {
    onSubmit(value) {
      console.log(value)
    },
  },
}
</script>
