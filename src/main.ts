import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/index.scss'
import 'uno.css'

export const createApp = ViteSSG(
  App,
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.

  },
)

