<template lang="pug">
story(
  title='ButtonAm' 
  :layout={
    type: 'grid',
    width: 200,
  }
)
  variant(
    title='button' 
  )
    ButtonAm(
      type='text-only'
      @click="logEvent('Click', $event)"

      :text="text"
    )
  variant(
    title='icon-button' 
  )
    ButtonAm(
      type='icon-only'
      :text="text"
    )
  variant(
    title='icon-prefix-button' 
  )
    ButtonAm(
      type='icon-prefix'
      :text="text"
    )
  variant(
    title='icon-suffix-button' 
  )
    ButtonAm(
      type='icon-suffix'
      :text="text"
    )

</template>

<script lang='ts' setup>
import ButtonAm from '@/components/atoms/ButtonAm.vue'
import { logEvent } from 'histoire/client'

const text = 'ボタン'
</script>

<docs lang="md">
  # ButtonAm

  ToDo アイコンを追加して差し替え
  
  `<button>`についてのコンポーネントです。  
  [チケット](https://www.notion.so/HOME-a5cfd10d185b446187ab78551d8a3af2?p=52bb97218e1049e987554b08da1dcf1a&pm=s)
  
  ## Props
  
  | Name        | Type                         | Default   | Description                    |
  | --------    | ---------------------------- | --------- | ------------------------------ |
  | type        | 'text-only', 'icon-only', 'icon-prefix', 'icon-suffix' | 'text-only' |  |
  | text        | String                       | ''        |  |
  | disabled    | Boolean                      | false     |  |

  ## Emits

  | Name        | Event type     | Description                    |
  | --------    | -------------- | ------------------------------ |
  | onClick     | click          | クリックを検知します、 |
 
  </docs>