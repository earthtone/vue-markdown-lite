import test from 'ava'
import { shallowMount } from '@vue/test-utils'
import MarkdownLite from '../vue-markdown-lite.vue'

test('renders expected', assert => {
  const wrapper = shallowMount(MarkdownLite, {
    slots: {
      default: `
# Wassup World!!!

## Header Two

- this is
- a list
- of list
- items

[google](http://google.com)

You destroyed me. And better causes to die for. A row of cabbages! Watchmaker's Daughter: The door was open. Number Two's Assistant: There are methods we haven't used yet, of course. No. Nor of being reduced. You're still as pompous as ever... Danvers.
      `
    }
  })
  assert.snapshot(wrapper.html())
})
