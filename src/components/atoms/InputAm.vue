<template lang="pug">
input(
  :type="type"
  :value="value"
  :placeholder="placeholder"
  :disabled="disabled"
  @input="handleInput"
)
</template>

<script lang='ts' setup>
const props = defineProps({
  type: {
    type: String,
    default: 'text',

    validator: (value: string) => {
      return ['text', 'number', 'date', 'email', 'password', 'search', 'url'].includes(
        value
      )
    }
  },
  value: { 
    type: String || Number, 
    default: null
  },
  placeholder: {
    type: String || Number, 
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits<{
  (e: 'updateInput', value: string): void
}>()

const handleInput = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value
  emit('updateInput', inputValue)
}
</script>

<style lang="sass" scoped>
input 
  margin: 0
  padding: 8px 16px
  background-color: var(--def-background-color-box-light)
  border: none
  border-bottom: 2px solid var(--def-border-color-light)
  border-radius: 16px 16px 0 0
  outline: none
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none
  color: var(--def-font-color-light)
  font-size: 1.6rem
  &[type="date"]::-webkit-inner-spin-button,
  &[type="date"]::-webkit-clear-button,
  &[type="date"]::-webkit-calendar-picker-indicator
    filter: invert(50%)
  &::placeholder
    color: var(--de-emph-font-color-light) 
  &:focus
    border-bottom: 2px solid var(--emph-border-color-light)
  &:disabled
    color: var(--de-emph-font-color-light)  
    background-color: var(--de-emph-background-color-box-light) 
    
@media (prefers-color-scheme: dark)
  input 
    background-color: var(--def-background-color-box-dark)
    color: var(--def-font-color-dark)
    border-bottom: 2px solid var(--def-border-color-dark)
    &[type="date"]::-webkit-inner-spin-button,
    &[type="date"]::-webkit-clear-button,
    &[type="date"]::-webkit-calendar-picker-indicator
      filter: invert(50%)
    &::placeholder
      color: var(--de-emph-font-color-dark)
    &:focus
      border-bottom: 2px solid var(--emph-border-color-dark)
    &:disabled
      background-color: var(--de-emph-background-color-box-dark)
      color: var(--de-emph-font-color-dark)

</style>