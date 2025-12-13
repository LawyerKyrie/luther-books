export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'slate'
    },
    accordion: {
      slots: {
        item: 'border-b border-default last:border-b-0'
      }
    },
    button: {
      variants: {
        active: {
          true: {
            base: 'font-bold'
          }
        }
      }
    }
  },
  typescript: {
    typeCheck: true
  }
})
