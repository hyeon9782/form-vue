<template>
  <label>
    <input
      type="checkbox"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
      v-bind="$attrs"
    />
    <span><slot></slot></span>
  </label>
</template>
<script lang="ts" setup>
const props = defineProps({
  error: String,
  modelValue: String
})

const emit = defineEmits(['update:modelValue', 'blur'])
</script>
<style lang=""></style>
