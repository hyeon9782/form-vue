<template>
  <div>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
      v-bind="$attrs"
    />
    <span class="error-message">{{ error }}</span>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  error: String,
  modelValue: String
})

const emit = defineEmits(['update:modelValue', 'blur'])
</script>
<style lang=""></style>
