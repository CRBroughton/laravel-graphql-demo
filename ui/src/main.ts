import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import urql from '@urql/vue'

const app = createApp(App)

app.use(urql, {
  url: 'http://localhost/graphql',
})

app.mount('#app')
