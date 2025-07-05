import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

// 數學公式渲染
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://eswdiary.github.io",
  base: "/",
  integrations: [tailwind(), sitemap(), mdx(), pagefind()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
