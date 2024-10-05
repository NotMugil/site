import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkEmoji from "remark-emoji"

export default defineConfig({
  site: "http://notmugil.me",
  integrations: [tailwind(), sitemap(), mdx()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [rehypeKatex, rehypeHeadingIds],
    remarkPlugins: [remarkMath, remarkEmoji],
  },
});