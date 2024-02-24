<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import InputAm from "./atoms/InputAm.vue"

const handleInput = (value: String | Number) => {
  console.log('update', value)
}
</script>

<template lang="pug">
WelcomeItem
  slot(icon)
    DocumentationIcon
  slot(heading)
  | Documentation
  |     Vue&rsquo;s
  a(href='https://vuejs.org/' target='_blank' rel='noopener') 
    | official documentation
  |     provides you with all information you need to get started.

WelcomeItem
  slot(icon)
    ToolingIcon
  slot(heading)
    | Tooling
  |     This project is served and bundled with
  a(
    href='https://vitejs.dev/guide/features.html' 
    target='_blank' 
    rel='noopener'
  )
    | Vite
  | . The
  |     recommended IDE setup is
  a(
    href='https://code.visualstudio.com/' 
    target='_blank' 
    rel='noopener'
  ) 
    | VSCode
  |  +
  a(
    href='https://github.com/johnsoncodehk/volar' 
    target='_blank' 
    rel='noopener'
  ) 
    | Volar
  | . If
  |     you need to test your components and web pages, check out
  a(
    href='https://www.cypress.io/' 
    target='_blank' 
    rel='noopener'
  )
    | Cypress
  |  and
  a(
    href='https://on.cypress.io/component' 
    target='_blank' 
    rel='noopener'
  ) 
    | Cypress Component Testing
  | .
  br
  |     More instructions are available in 
  code README.md
  | .
WelcomeItem
  slot(icon)
    EcosystemIcon
  slot(heading)
    | Ecosystem
  |     Get official tools and libraries for your project:
  a(
    href='https://pinia.vuejs.org/' 
    target='_blank' 
    rel='noopener'
  ) 
    | Pinia
  | ,
  a(
    href='https://router.vuejs.org/' 
    target='_blank' 
    rel='noopener'
  ) 
    | Vue Router
  | ,
  a(
    href='https://test-utils.vuejs.org/' 
    target='_blank' 
    rel='noopener'
  ) 
    | Vue Test Utils
  | , and
  a(
    href='https://github.com/vuejs/devtools' 
    target='_blank' 
    rel='noopener'
  ) 
    | Vue Dev Tools
  | . If
  |     you need more resources, we suggest paying
  a(
    href='https://github.com/vuejs/awesome-vue' 
    target='_blank' 
    rel='noopener'
  ) 
    | Awesome Vue
  |     a visit.
WelcomeItem
  slot(icon)
    CommunityIcon
  slot(heading)
    | Community
  |     Got stuck? Ask your question on
  a(
    href='https://chat.vuejs.org' 
    target='_blank' 
    rel='noopener'
  ) 
    | Vue Land
  | , our official
  |     Discord server, or
  a(
    href='https://stackoverflow.com/questions/tagged/vue.js' 
    target='_blank' 
    rel='noopener'
  ) 
    | StackOverflow
  | . You should also subscribe to
  a(
    href='https://news.vuejs.org' 
    target='_blank' 
    rel='noopener'
  ) 
    | our mailing list
  |  and follow
  |     the official
  a(
    href='https://twitter.com/vuejs' 
    target='_blank' 
    rel='noopener'
  ) 
    | @vuejs
  |     twitter account for latest news in the Vue world.
WelcomeItem
  slot(icon)
    SupportIcon
  slot(heading)
    | Support Vue
  |     As an independent project, Vue relies on community backing for its sustainability. You can help
  |     us by
  a(href='https://vuejs.org/sponsor/' target='_blank' rel='noopener') becoming a sponsor
  | .
InputAm(
  type='text'
  @update-input="handleInput"
)

</template>
