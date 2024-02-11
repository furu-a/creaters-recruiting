<script lang="ts" setup>
defineProps({
  color: {
    type: String,
    default: null,
  },

  size: {
    type: String,
    default: null,
  },

  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template lang="pug">
button.btn(
  :disabled="disabled" 
  :class="{ [`btn-color-${color}`]: color, [`btn-size-${size}`]: size }"
)
  slot
</template>

<style scoped lang="sass">
.btn 
  border-radius: 4px
  padding: 4px 8px
  background: #e4e4e4
  cursor: pointer
  &:hover 
    background: #f1f1f1
  &[disabled] 
    opacity: 0.5
    pointer-events: none
  &-color-green 
    background: #94ffc9
  &-color-green:hover 
    background: #acffd6
  &-color-red 
    background: #ff9494
  &-color-red:hover 
    background: #ffa8a8
  &-size-big 
    font-size: 16px
    padding: 8px 16px
  &-size-small 
    font-size: 12px
    padding: 2px 4px
.dark .btn 
  color: black
</style>