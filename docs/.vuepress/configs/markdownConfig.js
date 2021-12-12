module.exports = {
    extendMarkdown: md => {
        md.set({ breaks: true })
        // md.use(require('markdown-it-plantuml'))
    },
}