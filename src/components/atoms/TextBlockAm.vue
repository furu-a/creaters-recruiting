<template lang="pug">
p(:class='modifyClassObject')
  | {{ text }}
</template>

<script lang='ts' setup>
import { computed } from 'vue'
const props = defineProps({
  text: { 
    type: String, 
    default: ''
  },
});

const classCheck1 = true
const classCheck2 = false

const modifyClassObject = computed(() => {
  return [
    {'className1': classCheck1}, 
    {'className2': classCheck2}, 
  ]
})
</script>

<style lang="sass" scoped>
p 
  margin: 0
  padding: 0
  color: inherit
  font-size: inherit
  font-weight: inherit
  line-height: 1.3

</style>