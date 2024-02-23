import './src/assets/main.sass'
import './src/assets/histoire.sass'

import { createPinia } from 'pinia'
import { defineSetupVue3 } from '@histoire/plugin-vue'

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {

  const pinia = createPinia()
  app.use(pinia)
})