export default {
  name: 'originallyPosted',
  title: "Originally Posted",
  type: 'object',
  fields: [
    {
      name: 'postLocation', title: "Post Location", type: "string", options: {
        list: [
          { title: 'Medium', value: 'medium' },
          { title: 'Dev.to', value: 'devto' },
          { title: 'Hashnode', value: 'hashnode' },
        ]
      }
    },
    { name: 'postURL', title: 'URL', type: 'url' }
  ],
  options: {
    collapsible: true,
    collapsed: true
  }
}