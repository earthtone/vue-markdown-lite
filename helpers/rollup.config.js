import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/wrapper.js',
  output: {
    name: 'VueMarkdownLite',
    exports: 'named'
  },
  plugins: [
    commonjs(),
    resolve({
      preferBuiltins: false
    }),
    json({
      exclude: ['../node_modules/**']
    }),
    vue({
      css: true,
      compileTemplate: true
    }),
    buble({
      exclude: ['../node_modules/**'],
      transforms: {
        // forOf: false
        dangerousForOf: true
      }
    }),
    terser()
  ]
}
