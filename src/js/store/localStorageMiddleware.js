export default ({ log = false, key = 'redux-store', wait = 1000 }) => {
  let timeout

  const middleware = store => next => action => {
    const result = next(action)

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      const storeState = JSON.stringify(store.getState())

      window.localStorage.setItem(key, storeState)

      if (log) {
        console.log(
          '%c store saved ',
          'background-color:#2ecc71; color: white; font-weight: bold; padding: 4px 0;'
        )
      }
    }, wait)

    return result
  }

  middleware.timeout = timeout

  return middleware
}
