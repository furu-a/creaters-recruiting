<template lang="pug">
textarea(
  :rows="rows"
  :value="value"
  :placeholder="placeholder"
  :disabled="disabled"
  @input="handleTextarea"
)
</template>

<script lang='ts' setup>
const props = defineProps({
  rows: { 
    type: Number, 
    default: 3
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
  (e: 'updateTextarea', value: string): void
}>()

const handleTextarea = (event: Event) => {
  const textareaValue = (event.target as HTMLInputElement).value
  emit('updateTextarea', textareaValue)
}
</script>

<style lang="sass" scoped>
textarea 
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
  color: var(--def-font-color)
  font-size: 1.6rem
  &::placeholder
    color: var(--de-emph-font-color) 
  &:focus
    border-bottom: 2px solid var(--emph-border-color)
  &:disabled
    color: var(--de-emph-font-color)  
    background-color: var(--de-emph-background-color-box)
    cursor: not-allowed 
    
</style>