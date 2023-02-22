<script setup lang="ts">
import { createForm } from '@formily/core'
import { FormProvider, Field } from '@formily/vue'
import { Input, FormItem, Submit, Form } from '@dangojs/formily-arco-web-vue'

const form = createForm()

const log = (value) => {
  console.log(value)
}
</script>

<template>
  <FormProvider :form="form">
    <Form>
      <Field
        name="input"
        title="输入框"
        :decorator="[FormItem]"
        :component="[Input]"
      />
      <Field
        name="textarea"
        title="文本框"
        :decorator="[FormItem]"
        :component="[Input]"
      />
      <FormItem><Submit @submit="log">提交</Submit></FormItem>
    </Form>
  </FormProvider>
</template>
