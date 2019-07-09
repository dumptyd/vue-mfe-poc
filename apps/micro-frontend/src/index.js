import App from './App.vue';
import { routes } from './router'

const ClaimsPlugin = {
  install(Vue, registerMFE) {
    registerMFE({
      module: 'micro-frontend',
      component: App,
      store: {},
      routes
    })
  }
};

export default ClaimsPlugin
