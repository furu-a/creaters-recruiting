<template lang="pug">
story(
  title='TextInlineAm' 
  :layout={
    type: 'grid',
    width: 300,
  }
)
  variant(
    title='text' 
  )
    span(:class='modifyClassObject')
      | {{ text }}

</template>

<script lang='ts' setup>
import TextInlineAm from '@/components/atoms/TextInlineAm.vue'

const text = 'テキスト'
const modifyClassObject = 'modifyClassObject'

</script>

<docs lang="md">
  # TextInlineAm
  
  `<span>`についてのコンポーネントです。  
  color, font-size, font-weight は親要素の値を引き継ぎます。  
  class がどうしても必要な際は modifyClassObject を使用してください。  
  [チケット](https://www.notion.so/HOME-a5cfd10d185b446187ab78551d8a3af2?p=9d920f9105a34c34a6f5a4c8fd04aa32&pm=s)
  
  ## Props
  
  | Name        | Type                         | Default   | Description                    |
  | --------    | ---------------------------- | --------- | ------------------------------ |
  | text        | String             | ''       |  |
  |             |                    |          |  |

  </docs>