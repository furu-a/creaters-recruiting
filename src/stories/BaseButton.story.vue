<script lang="ts" setup>
import BaseButton from '@/components/BaseButton.vue'

function initState () {
  return {
    disabled: false,
    color: undefined,
    size: undefined,
  }
}
</script>

<template lang="pug">
story(
  title='BaseButton' 
  :layout={
    type: 'grid',
    width: 200,
  }
)
  variant(
    title='playground' 
    :init-state='initState'
  )
    template(#default='{ state }')
      BaseButton(
        :disabled='state.disabled' 
        :color='state.color' 
        :size='state.size'
      )
        | Click me
  variant(
    title='big green button' 
    icon='el:resize-full'
  )
    BaseButton(
      color='green' 
      size='big'
    )
      | Click me
  variant(
    title='small red button' 
    icon-color='#F43F5E'
  )
    BaseButton(
      color='red' 
      size='small'
    )
      | Click me!
  //- variant(
  //-   title='button inside div' 
  //-   icon-color='#F43F5E'
  //- )
  //-   div
  //-     BaseButton
  //-       | Click me!

</template>