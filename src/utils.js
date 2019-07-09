import router from './router'

export const registerMFE = (() => {
  const modules = {
    known: ['micro-frontend'],
    registered: []
  }

  /* eslint-disable no-unused-vars */
  return ({ module, component, store, routes }) => {
    if (!modules.known.includes(module)) throw Error('Attempting to register an unknown module')
    if (modules.registered.includes(module)) throw Error('Attempting to register an already registered module')

    router.addRoutes([{
      path: `/${module}`,
      component,
      children: routes
    }])

    // store.registerModule(module, store)

    modules.registered.push(module)
  }
})()
