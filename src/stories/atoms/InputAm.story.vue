<template lang="pug">
story(
  title='InputAm' 
  :layout={
    type: 'grid',
    width: 200,
  }
)
  variant(
    title='text' 
  )
    InputAm(
      type="text"
      placeholder="text"
      @input="logEvent('Input', $event)"
    )
  variant(
    title='number' 
  )
    InputAm(
      type="number"
      placeholder="123"
    )
  variant(
    title='date' 
  )
    InputAm(
      type="date"
      placeholder="2024-02-18"
    )
  variant(
    title='email' 
  )
    InputAm(
      type="email"
      placeholder="text@example.com"
    )
  variant(
    title='password' 
  )
    InputAm(
      type="password"
      placeholder="password"
    )
  variant(
    title='search' 
  )
    InputAm(
      type="search"
      placeholder="search"
    )
  variant(
    title='url' 
  )
    InputAm(
      type="url"
      placeholder="test.jp"
    )

</template>

<script lang='ts' setup>
import InputAm from '@/components/atoms/InputAm.vue'
import { logEvent } from 'histoire/client'

</script>

<docs lang="md">
  # InputAm
  
  `<input>`についてのコンポーネントです。  
  [チケット](https://www.notion.so/HOME-a5cfd10d185b446187ab78551d8a3af2?p=c3801a972d8049ed97f2fd35fc8a8b79&pm=s&pvs=31)
  
  ## Props
  
  | Name        | Type                         | Default   | Description                    |
  | --------    | ---------------------------- | --------- | ------------------------------ |
  | type        | 'text', 'number', 'date', 'email', 'password', 'search', 'url' | 'text' |  |
  | value       | String \|\| Number | null     |  |
  | placeholder | String \|\| Number | null     |  |
  | disabled    | boolean                      | false     |  |

  ## Emits

  | Name        | Event type     | Description                    |
  | --------    | -------------- | ------------------------------ |
  | updateInput | input          | 入力された値を返します、 |
 
  </docs>