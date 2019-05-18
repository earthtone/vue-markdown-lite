<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt({ html: true })

export default {
  render (h) {
    const innerHTML = md.render(this.$slots.default[0].text.trim())
    return h('article', {
      domProps: { innerHTML } 
    }, [])
  }
}
</script>
