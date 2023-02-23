<script setup lang="ts">
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import {
  Form,
  FormItem,
  Input,
  Submit,
  ArraySimpleList,
} from '@dangojs/formily-arco-web-vue/src/index'
import { arrayBuffer } from 'stream/consumers'
import input from 'packages/components/lib/input'
import { type } from 'os'

const schema = {
  type: 'object',
  properties: {
    user: {
      type: 'string',
      title: '用户',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    hobby: {
      type: 'array',
      'x-component': 'ArraySimpleList',
      items: [
        {
          type: 'string',
          title: '爱好',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
      ],
    },
  },
}

const form = createForm({
  initialValues: {
    user: '',
    hobby: ['', ''],
  },
})
const { SchemaField } = createSchemaField({
  components: {
    Form,
    FormItem,
    Input,
    ArraySimpleList,
  },
})

const onSubmit = (value) => {
  console.log(value)
}
</script>

<template>
  <Form :form="form" auto-label-width>
    <SchemaField :schema="schema" />
    <FormItem><Submit @submit="onSubmit">提交</Submit></FormItem>
  </Form>
</template>
