export default ({ log = false, key = 'redux-store' }) => {
  let timeout

  const middleware = store => next => action => {
    const result = next(action)
    const { debounceSync } = action
    const wait = debounceSync || 0

    clearTimeout(timeout)

    timeout = setTimeout(() => {
      const storeState = JSON.stringify(store.getState())

      try {
        window.localStorage.setItem(key, storeState)
        if (log) console.log('%c store saved ', 'background-color:#2ecc71; color: white; font-weight: bold; padding: 4px 0;')
      } catch (err) {
        console.log('%c store save failed ', 'background-color:#e74c3c; color: white; font-weight: bold; padding: 4px 0;')
        console.log('with the following message: ', err)
      }
    }, wait)

    return result
  }

  middleware.timeout = timeout

  return middleware
}
