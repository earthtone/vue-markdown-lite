# Vue Markdown Lite

![Travis CI Status](https://travis-ci.org/earthtone/vue-markdown-lite.svg?branch=master)

A Lightweight [markdown-it](https://github.com/markdown-it/markdown-it) wrapper for Vue, inspired by [vue-markdown](https://github.com/miaolz123/vue-markdown).

## Installation

### NPM

```sh
$ npm install --save @earthtone/vue-markdown-lite
```

### CommonJS Module

```js
var VueMarkdownLite = require('@earthtone/vue-markdown-lite');

new Vue({
  components: {
    'vue-markdown-lite': VueMarkdownLite
  }
})
```

### ES Module

```js
import VueMarkdownLite from '@earthtone/vue-markdown-lite'

new Vue({
  components: {
    VueMarkdownLite
  }
})
```

### Globally Registered Component

```js
import VueMarkdownLite from '@earthtone/vue-markdown-lite'
import App from './App.vue'

Vue.use(VueMarkdwonLite)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

### Browser globals

> The **dist** folder contains `vue-markdown-lite.min.js` with the component exported in the `window.VueMarkdownLite` object.

```html
  <body>
    <vue-markdown-lite>i am a **test**.</vue-markdown-lite>
  </body>
  <script src="path/to/vue.js"></script>
  <script src="path/to/vue-markdown-lite.js"></script>
  <script>
    Vue.use(VueMarkdownLite);
    var vm = new Vue({
      el: "body"
    });
  </script>
```

## Usage

Stick some markdown in the between the opening/closing `vue-markdown-lite` brackets!

```html
<template>
  <vue-markdown-lite>
# Hello Markdown!

## This is some generic markdown

- this
- is a
- list
- of a
- few
- items

> This is a quotation, which is a noun, but not a quote, which is a verb.

![image alt](/path/to/image.png)

[link text](/path/to/link/url)
  </vue-markdown-lite>
</template>
```

### Slots

```html
<vue-markdown-lite>this is the default slot</vue-markdown-lite>
```

After setting up the middleware in your vue component above, using the embedded markdown is as easy as writing it between the `vue-markdown-lite` tags.

VueMarkdownLite has a default slot which is used to write the `markdown` source. The default slot only renders **once** at the beginning, and it will overwrite the prop of `source`!

[Read more about Slots in Vue](https://vuejs.org/v2/guide/components-slots.html)

### Plugins

By default, the `vue-markdown-lite` component implements the most limited use case with no additional feature support. It does support loading optional `markdown-it` [plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin) as component props.

The expected prop type is an `Array` of `Array`s, containing a reference to the imported plugin module, and any options or arguments the plugin takes.

```html
<vue-markdown-lite :plugins="computedPluginsList">
  # Foo Bar

  ::: warning
  * here be dragons *
  :::
</vue-markdown-lite>
```

```js
import namedHeaders from 'markdown-it-named-headers'
import customContainers from 'markdown-it-container'

export default {
  name: 'parent-component',
  computed: {
    computedPluginsList () {
      return [
        [ namedHeaders, { slugify: string => string.toLowerCase().replace(/\s*/, '-') ],
        [ customContainers, 'warning' ]
      ]
    }
  }
}
```

The above template and script blocks will yield the following output:

```html
<article>
  <h1 id="foo-bar">Foo Bar</h1>
  <div class="warning">
    <p><em>here be dragons</em></p>
  </div>
</article>
```
