# Vue Markdown Lite

A Lightweight [markdown-it](https://github.com/markdown-it/markdown-it) wrapper for Vue, inspired by [vue-markdown](https://github.com/miaolz123/vue-markdown).

## Installation

### Browser globals

> The **dist** folder contains `vue-markdown-lite.js` with the component exported in the `window.VueMarkdownLite` object.

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

After installing via Yarn or NPM, use the following snippet in the script portion of the Vue component which you wish to render the Markdown.

```js
import VueMarkdownLite from 'vue-markdown-lite'

new Vue({
  components: {
    VueMarkdownLite
  }
})
```

## Usage

### Slots

```html
<vue-markdown-lite>this is the default slot</vue-markdown-lite>
```

After setting up the middleware in your vue component above, using the embedded markdown is as easy as writing it between the `vue-markdown-lite` tags.

VueMarkdownLite has a default slot which is used to write the `markdown` source.

TIP: The default slot only renders **once** at the beginning, and it will overwrite the prop of `source`!
