<span style="font-size: 64px">☕️</span>

# new c('.BigCoffee')

**BigCoffee** is a next generation DOM toolbox, written in EcmaScript 6 and inspired by (but unlike) jQuery.

## Install

You can add this library using our CDN:

```html
<script async src="//missing">
```

Or just include this in your Node project:

```bash
$ npm install bigcoffee
```

```bash
$ yarn add bigcoffee
```

## Usage

First of all, instance the library passing a CSS selector to constructor:

```javascript
const elements = new c('div') // or new BigCoffee('div')
```

### `.find(selector)`

You can find elements inside inputing a new selector across `query` method:

```javascript
const links = elements.find('li a')
```

### `.first()`

Return the first element.

```javascript
elements.first()
```

### `.index(index)`

Return element by the index.

```javascript
elements.index(2)
```

### `.last()`

Return the last element.

```javascript
elements.last()
```

## Loading BigCoffee

Before start DOM manipulation, you'll need to listen the `ready` static method in order to wait DOM load.

```javascript
function onReady () {
  BigCoffee.ready(function (event) {
    // Your code goes here.
  })
}
```

We encourage you to load the library asynchronously, so BigCoffee always fire `window.BigCoffeeReady` after load.

```javascript
if (BigCoffee) {
  onReady()
} else {
  window.BigCoffeeReady = onReady
}
```

## Writing a Module

A module will add methods into the **BigCoffee** root. There is a native method called `extends` which must be invoked to merge your custom methods with the library.

In the example below we'll implement two custom methods which will paint the `color` and the `background-color` with a custom color respectively.

```javascript
BigCoffee.extends({
  color (color) {
    for (let element of this) {
      element.style.color = color
    }

    return this
  },

  fill (color) {
    for (let element of this) {
      element.style.backgroundColor = color
    }

    return this
  }
})
```

As you can see, we have returned `this` in the methods to enable chaining, so you can use like this to paint all `div`'s:

```javascript
// First of all, store the elements.
const elements = new c('div')

// Now you can chain the methods.
elements.color('red').fill('yellow')
```

There is a _one more thing_ stuff: you can also input a `function` to `extends` which must return an `object` with the methods:

```javascript
BigCoffee.extends(function () {
  function borderColor (color) {
    for (let element of this) {
      element.style.borderColor = color
    }

    return this
  }

  return {
    borderColor
  }
})
```

Note that we always loop the elements (`for (let element of this) {}`) to apply the changes for all.

## Understaing this repository.

- `dist` contains compiled versions of the library and the modules.
- `docs` contains docs for all modules.
- `src` contains the source code.

## Contributing

You can help this project in several ways.

### Roadmap

We would like to:

- Create a website.
- Create more native and custom modules.
- Publicize and implement the library wherever as possible.
- Separate modules into single packages.

About the native modules, we want provide these:

- [ ] Ajax
- [ ] Animations
- [x] Attributes
- [x] Classes
- [ ] Elements
- [ ] Events
- [ ] Forms
- [ ] Styles

Please keep the code pattern.

### Building

We use Gulp to generate all the versions.

_Missing._