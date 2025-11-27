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
    }
    // Set a global default padding in the table
    // td: 'p-2',
    // th: 'p-2'
  }
})
