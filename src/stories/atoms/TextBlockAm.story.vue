<template lang="pug">
story(
  title='TextBlockAm' 
  :layout={
    type: 'grid',
    width: 300,
  }
)
  variant(
    title='text' 
  )
    p(:class='modifyClassObject')
      | {{ text }}

</template>

<script lang='ts' setup>
import TextBlockAm from '@/components/atoms/TextBlockAm.vue'

const text = 'テキスト'
const modifyClassObject = 'modifyClassObject'

</script>

<docs lang="md">
  # TextBlockAm
  
  `<p>`についてのコンポーネントです。  
  color, font-size, font-weight は親要素の値を引き継ぎます。  
  class がどうしても必要な際は modifyClassObject を使用してください。  
  [チケット](https://www.notion.so/HOME-a5cfd10d185b446187ab78551d8a3af2?p=aa6b4c0779264f9c8b0a07e0eab8e545&pm=s)
  
  ## Props
  
  | Name        | Type                         | Default   | Description                    |
  | --------    | ---------------------------- | --------- | ------------------------------ |
  | text        | String             | ''       |  |
  |             |                    |          |  |

  </docs>