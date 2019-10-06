<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt({ html: true })

export default {
  props: {
    plugins: {
      type: Array,
      default: () => []
    }
  },
  render (h) {
    if (this.plugins.length) {
      this.plugins.forEach(plugin => {
        md.use(...plugin)
      })
    }

    const innerHTML = md.render(this.$slots.default[0].text.trim())
    return h('article', {
      domProps: { innerHTML }
    }, [])
  }
}
</script>
