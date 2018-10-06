class BigCoffee {
  constructor (selector, context) {
    if (this === window) {
      return new BigCoffee(selector)
    }

    context = context || document

    const elements = context.querySelectorAll(selector)
    elements.__proto__ = BigCoffee.methods

    return elements
  }

  static extends (object) {
    if (typeof object === 'function') {
      object = object.call(this)
    }

    if (!this.isObject(object)) {
      throw new Error('A module must be a valid object.')
    }

    return Object.assign(this.methods, object)
  }

  static isObject (object) {
    if (!object) {
      return false
    }

    return object.constructor.name === 'Object'
  }

  static get version () {
    return '0.1.0'
  }
}

BigCoffee.methods = {
  find (selector) {
    //
  },

  first () {
    return this[0]
  },

  index (index) {
    return this[index]
  },

  last () {
    return this[this.length - 1]
  },

  ready (callback) {
    //
  }
}

window.BigCoffee = window.c = BigCoffee
