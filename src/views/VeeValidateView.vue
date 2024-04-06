<template>
  <main>
    <form @submit.prevent="onSubmit">
      <input v-model="email" v-bind="emailAttrs" type="text" />
      <CustomInput v-model="password" v-bind="passwordAttrs" type="password" />
      <pre>{{ errors }}</pre>
      <pre> {{ values }}</pre>
      <button>Sign up for newsletter</button>
    </form>
  </main>
</template>
<script lang="ts" setup>
import CustomInput from '@/components/ui/CustomInput.vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required()
})

const { defineField, errors, values } = useForm({
  validationSchema: schema
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const onSubmit = () => {}
</script>
<style lang=""></style>
