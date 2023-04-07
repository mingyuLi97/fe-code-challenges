import { defineConfig } from "vitepress";
import VitePluginAutoSidebar from "@limy-org/vite-plugin-vitepress-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FE Code Challenges",
  base: "/fe-code-challenges/",
  vite: {
    plugins: [
      VitePluginAutoSidebar({
        sidebarResolved(value) {
          // console.log(JSON.stringify(value, null, 2));
          for (const item of value["/questions/"]) {
            // 把最后一层向上提，避免出现 `手写new / 手写new` 这种嵌套
            item.items = item.items?.map((i) => {
              return i.items?.[0] ? i.items[0] : i;
            });
          }
        },
      }),
    ],
  },
  markdown: {
    theme: "one-dark-pro",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "code", link: "/questions/JS-API/手写new/index" }],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
