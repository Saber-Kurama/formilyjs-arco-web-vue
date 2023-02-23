<script setup lang="ts">
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import { FormItem, Input, Submit, Form } from '@dangojs/formily-arco-web-vue'

const form = createForm()
const { SchemaField, SchemaStringField } = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

const log = (value) => {
  console.log(value)
}
</script>

<template>
  <FormProvider :form="form">
    <Form>
      <SchemaField>
        <SchemaStringField
          name="input"
          title="输入框"
          x-decorator="FormItem"
          x-component="Input"
        />
        <SchemaStringField
          name="name[0]"
          title="名称1"
          x-decorator="FormItem"
          x-component="Input"
        />
        <SchemaStringField
          name="name[1]"
          title="名称2"
          x-decorator="FormItem"
          x-component="Input"
        />
      </SchemaField>
      <FormItem><Submit @submit="log">提交</Submit></FormItem>
    </Form>
  </FormProvider>
</template>
