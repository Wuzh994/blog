import fs from 'fs'
import { join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import matter from 'gray-matter'
import Markdown from 'vite-plugin-vue-markdown'
import anchor from 'markdown-it-anchor'
import prism from 'markdown-it-prism'
import TOC from 'markdown-it-table-of-contents'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Unocss(),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.md$/],
      dirs: ['src/components', 'src/demo'],
    }),
    Markdown({
      headEnabled: true,
      markdownItSetup(md) {
        md.use(anchor, {
          slugify() {
            return 'heading'
          },
        })
        md.use(prism)
        md.use(TOC, {
          includeLevel: [1, 2, 3],
          containerClass: 'article-catalog',
          containerHeaderHtml: '<div class="catalog-title">目录</div>',
        })
      },
    }),
    Pages({
      extensions: ['md'],
      dirs: 'src/articles',
      extendRoute(route) {
        const path = join(__dirname, route.component)
        const md = fs.readFileSync(path)
        const { data } = matter(md)
        route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        return route
      },
    }),
  ],
})
