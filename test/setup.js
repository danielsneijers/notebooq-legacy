function mockCSSModule (module, path) {
  // old style Proxy, enabled with the --harmony_proxies flag
  // https://developer.mozilla.org/en-US/docs/Archive/Web/Old_Proxy_API
  // returns the asked property name, so we can test classNames from the CSS Module
  if (Proxy.create) {
    const cssModuleProxy = Proxy.create({
      getOwnPropertyDescriptor: () => undefined,
      has: () => true,
      get: (target, name) => name
    })

    module.exports = Object.create(cssModuleProxy)
    return
  }

  // new style Proxy, since node 6
  module.exports = new Proxy({}, {
    has: () => true,
    get: (target, name) => name
  })
}

function enhanceRequire () {
  // make sure `components/MyComponent` will be resolved
  // require('app-module-path').addPath(SOURCE_PATH)

  // mock CSS response, since we're doing node-based testing this is OK
  require.extensions['.css'] = mockCSSModule

  // parse all JS files with Babel
  require('babel-register')({
    ignore (filename) {
      // ignore node_modules, except lodash and axios
      if (!filename.match(/lodash\-es|axios/) && filename.match(/node_modules/)) {
        return true
      }
      return false
    }
  })
}

function setupJSDOM () {
  const jsdom = require('jsdom')

  const doc = jsdom.jsdom('<!doctype html><html><body><div id="app"></div></body></html>')
  const win = doc.defaultView

  // set globals for mocha that make access to document and window feel
  // natural in the test environment
  global.document = doc
  global.window = win

  // take all properties of the window object and also attach it to the
  // mocha global object
  propagateToGlobal(win)

  // JSDom has no support for localStorage, so mock this
  mockLocalStorage(win)
}

function mockLocalStorage (window) {
  window.localStorage = {
    __values: {},
    get length() { // eslint-disable-line
      return Object.keys(this.__values).length
    },
    clear () {
      this.__values = {}
    },
    key (key) {
      return (key in this.__values)
    },
    getItem (key) {
      return this.key(key) ? this.__values[key] : null
    },
    setItem (key, value) {
      this.__values[key] = value
    },
    removeItem (key) {
      this.key(key) && delete this.__values[key]
    }
  }
}

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal (window) {
  for (var key in window) {
    if (!window.hasOwnProperty(key)) continue
    if (key in global) continue

    global[key] = window[key]
  }
}

enhanceRequire()
setupJSDOM()
