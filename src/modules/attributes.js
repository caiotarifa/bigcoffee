BigCoffee.extends({
  getAttribute (attribute) {
    return this[0].getAttribute(attribute)
  },

  hasAttribute () {
    for (let element of this) {
      for (let attribute of arguments) {
        if (!element.hasAttribute(attribute)) {
          return false
        }
      }
    }

    return true
  },

  removeAttribute () {
    for (let element of this) {
      arguments.forEach(attribute => element.removeAttribute(attribute))
    }

    return this
  },

  setAttribute (attributes, value) {
    for (let element of this) {
      if (typeof attributes !== 'object') {
        element.setAttribute(attributes, value)
        continue
      }

      for (let key in attributes) {
        element.setAttribute(key, attributes[key])
      }
    }

    return this
  }
})