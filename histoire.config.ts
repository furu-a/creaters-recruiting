import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  setupFile: './histoire.setup.ts',
  plugins: [
    HstVue(),
  ],
  storyMatch: ['src/**/*.story.vue']
  // storyMatch: ['@/stories/*.story.vue']
})