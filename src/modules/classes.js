BigCoffee.extends({
  addClass () {
    for (let element of this) {
      element.classList.add(arguments)
    }

    return this
  },

  hasClass (classes) {
    for (let element of this) {
      if (element.classList.contains(classes)) {
        return true
      }
    }

    return false
  },

  removeClass () {
    for (let element of this) {
      element.classList.remove(arguments)
    }

    return this
  },

  toggleClass (classes, condition) {
    for (let element of this) {
      element.classList.toggle(classes, condition)
    }

    return this
  }
})