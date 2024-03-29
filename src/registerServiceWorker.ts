/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    //   confirm("New content found! web will reload in a few")
    //   alert('New version is available, App will Update itself')
    },
    updated (registration) {
    //   console.log('New content is available; please refresh.')
      let confirmationResult = confirm("New update Available! Update App?")
    // registration.waiting.postMessage({action: "skipWaiting"})
      if (confirmationResult) registration.waiting.postMessage({action: "skipWaiting"})
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration!', error)
    }
  })

  let refreshing: boolean
  navigator.serviceWorker.addEventListener("controllerchange", e=>{
    if (refreshing) return 
    window.location.reload();
    refreshing = true
  })
}
