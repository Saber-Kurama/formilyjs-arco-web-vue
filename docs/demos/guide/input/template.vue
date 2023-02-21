<template>
  <FormProvider :form="form">
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
    <Button @submit="log">提交</Button>
  </FormProvider>
</template>

<script>
import { createForm } from '@formily/core'
import { FormProvider, Field } from '@formily/vue'
import { FormItem, Button } from '@arco-design/web-vue'
import { Input } from '@formily/arco-web-vue/src/index'

const form = createForm()

export default {
  components: { FormProvider, Field, Button },
  data() {
    return {
      FormItem,
      Input,
      form,
    }
  },
  methods: {
    log(value) {
      console.log(value)
    },
  },
}
</script>
