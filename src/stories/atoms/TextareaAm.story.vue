<template lang="pug">
story(
  title='TextareaAm' 
  :layout={
    type: 'grid',
    width: 300,
  }
)
  variant(
    title='textarea' 
  )
    TextareaAm(
      placeholder="textarea"
      @input="logEvent('Input', $event)"
    )


</template>

<script lang='ts' setup>
import TextareaAm from '@/components/atoms/TextareaAm.vue'
import { logEvent } from 'histoire/client'

</script>

<docs lang="md">
  # TextareaAm
  
  `<textarea>`についてのコンポーネントです。  
  [チケット](https://www.notion.so/HOME-a5cfd10d185b446187ab78551d8a3af2?p=26d64ef985514cb8913e06123fff3fd6&pm=s)
  
  ## Props
  
  | Name        | Type                         | Default   | Description                    |
  | --------    | ---------------------------- | --------- | ------------------------------ |
  | value       | String \|\| Number | null    |  |
  | placeholder | String \|\| Number | null    |  |
  | disabled    | Boolean                      | false     |  |

  ## Emits

  | Name           | Event type     | Description                    |
  | --------       | -------------- | ------------------------------ |
  | updateTextarea | input          | 入力された値を返します、 |
 
  </docs>