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
import InputAm from '../../components/atoms/inputAm.vue'
import { logEvent } from 'histoire/client'

</script>