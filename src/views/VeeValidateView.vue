<template>
  <main>
    <form @submit="onSubmit">
      <CustomInput v-model="email" v-bind="emailAttrs" :error="errors.email" type="text" />
      <CustomInput
        v-model="password"
        v-bind="passwordAttrs"
        :error="errors.password"
        type="password"
      />

      <span>제출 횟수 : {{ submitCount }}</span>
      <button :disabled="!meta.valid || isSubmitting">
        {{ isSubmitting ? 'Submitting...' : 'Submit' }}
      </button>
      <button @click.prevent="resetForm()">reset</button>
      <button @click.prevent="updateValues">update</button>
    </form>
  </main>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import CustomInput from '@/components/ui/CustomInput.vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().min(8).required()
})

const {
  defineField,
  errors,
  handleSubmit,
  meta,
  isSubmitting,
  submitCount,
  resetForm,
  setFieldValue,
  setFieldError,
  setErrors,
  setValues
} = useForm({
  validationSchema: schema,
  initialValues: {
    email: '',
    password: ''
  }
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

// 만약 제출을 한 후 유효한지 체크해야 한다면?
// handleSubmit의 두 번째 인자로 실패했을 때 함수를 넣어줌
const onSubmit = handleSubmit((values) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Submitited', JSON.stringify(values, null, 2))
      resetForm()
      resolve('Success')
    }, 2000)
  })
})

// 수동으로 값을 업데이트 가능 (정보 불러오기 기능)
const updateValues = () => {
  setValues({
    email: 'test@example.com',
    password: 'p@$$w0rd'
  })
}

// 초기값을 비동기식으로 설정
async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        password: 'dasdsa',
        email: 'test@email.com'
      })
    }, 1500)
  })
}

// // Fetch data on mounted
// onMounted(async () => {
//   const data = await fetchData()

//   resetForm({ values: data })
// })

// setFiledError로 하나의 에러만 설정
// setErrors로 한 번에 많은 에러 설정

// const onSubmit = handleSubmit(async values => {
//   // Send data to the API
//   const response = await client.post('/users/', values);
//   // all good
//   if (!response.errors) {
//     return;
//   }
//   // set single field error
//   if (response.errors.email) {
//     setFieldError('email', response.errors.email);
//   }
//   // set multiple errors, assuming the keys are the names of the fields
//   // and the key's value is the error message
//   setErrors(response.errors);
// });

// 두 번째 인자인 actions를 사용하면 setFiledError와 setErorrs 둘다 사용 가능
// const onSubmit = handleSubmit(async (values, actions) => {
//   // Send data to the API
//   const response = await client.post('/users/', values);
//   // ...
//   // set single field error
//   if (response.errors.email) {
//     actions.setFieldError('email', response.errors.email);
//   }
//   // set multiple errors, assuming the keys are the names of the fields
//   // and the values is the error message
//   actions.setErrors(response.errors);
// });
</script>
<style lang=""></style>
