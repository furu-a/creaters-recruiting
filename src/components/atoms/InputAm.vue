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
  width: 100%
  margin: 0
  padding: 8px 16px
  background-color: var(--def-background-color-box)
  border: none
  border-bottom: 2px solid var(--def-border-color)
  border-radius: 16px 16px 0 0
  outline: none
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none
  font-size: 1.6rem
  &[type="date"]::-webkit-inner-spin-button,
  &[type="date"]::-webkit-clear-button,
  &[type="date"]::-webkit-calendar-picker-indicator
    filter: invert(50%)
  &::placeholder
    color: var(--de-emph-font-color) 
  &:focus
    border-bottom: 2px solid var(--emph-border-color)
    
</style>