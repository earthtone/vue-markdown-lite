# Vue Markdown Lite

A Lightweight [markdown-it](https://github.com/markdown-it/markdown-it) wrapper for Vue, inspired by [vue-markdown](https://github.com/miaolz123/vue-markdown).

## Installation

### NPM

```sh
$ npm install --save vue-markdown-lite
```

### CommonJS

```js
var VueMarkdownLite = require('vue-markdown-lite');

new Vue({
  components: {
    'vue-markdown-lite': VueMarkdownLite
  }
})
```

### ES Modules

```js
import VueMarkdownLite from 'vue-markdown-lite'

new Vue({
  components: {
    VueMarkdownLite
  }
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
