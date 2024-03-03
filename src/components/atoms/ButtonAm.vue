<template lang="pug">
button(
  :disabled='disabled'
  :class='modifyClassObject'
  @click='handleButtonEvent'
)
  template(v-if="hasText")
    template(v-if="type === 'icon-prefix'")
      span アイコン
    TextInlineAm(
      :text='text'
    )
    template(v-if="type === 'icon-suffix'")
      span アイコン
  template(v-if="type === 'icon-only'")
    span アイコンだけ
</template>

<script lang='ts' setup>
import { computed } from 'vue'
import TextInlineAm from '@/components/atoms/TextInlineAm.vue'
const props = defineProps({
  type: {
    type: String,
    default: 'text-only',

    validator: (value: string) => {
      return ['text-only', 'icon-only', 'icon-prefix', 'icon-suffix'].includes(
        value
      )
    }
  },
  text: { 
    type: String, 
    default: ''
  },
  disabled: { 
    type: Boolean, 
    default: false
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

const hasText = computed(() => {
  return ([
    'text-only', 
    'icon-prefix', 
    'icon-suffix'
  ].includes(props.type))
})

const emit = defineEmits<{
  (e: 'onClick'): void
}>()

const handleButtonEvent = () => {
  emit('onClick')
}
</script>

<style lang="sass" scoped>
button 
  background-color: var(--def-background-color-box)
  border: 1px solid var(--def-border-color)
  cursor: pointer
  outline: none
  padding: 8px 16px
  border-radius: 16px
  appearance: none
  font-size: 1.4rem

</style>