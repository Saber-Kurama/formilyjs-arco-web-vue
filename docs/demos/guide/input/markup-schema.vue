<template>
  <!-- <FormProvider :form="form">
    <SchemaField>
      <SchemaStringField
        name="input"
        title="输入框"
        x-decorator="FormItem"
        x-component="Input"
      />
      <SchemaStringField
        name="textarea"
        title="文本框"
        x-decorator="FormItem"
        x-component="Input.TextArea"
      />
    </SchemaField>
    <Submit @submit="log">提交</Submit>
  </FormProvider> -->
  <div>markup Scheama 待补充</div>
</template>

<script>
// import { createForm } from '@formily/core'
// import { createSchemaField, FormProvider } from '@formily/vue'
// import { FormItem, Input, Submit } from '@dangojs/formily-arco-web-vue'

// const form = createForm()
// const fields = createSchemaField({
//   components: {
//     FormItem,
//     Input,
//   },
// })

export default {
  // components: { FormProvider, ...fields, Submit },
  data() {
    return {
      // form,
    }
  },
  methods: {
    log(value) {
      console.log(value)
    },
  },
}
</script>
