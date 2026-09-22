import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { existsSync } from "node:fs";
import { preferenceBootstrap } from "./src/config/preferences";
import { es } from "./src/i18n/es";
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const domain = env.VITE_SITE_URL?.replace(/\/$/, "") || "";
  if (domain && !/^https:\/\/[a-zA-Z0-9.-]+(?::\d+)?$/.test(domain))
    throw new Error("VITE_SITE_URL must be an HTTPS origin without a path.");
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "portfolio-seo",
        transformIndexHtml(html) {
          return html
            .replace(
              "<!-- preferences -->",
              `<script>${preferenceBootstrap()}</script>`,
            )
            .replaceAll("__SEO_TITLE__", es.seo.title)
            .replaceAll("__SEO_DESCRIPTION__", es.seo.description)
            .replace(
              "<!-- canonical -->",
              domain
                ? `<link rel="canonical" href="${domain}/" /><meta property="og:url" content="${domain}/" />`
                : "",
            );
        },
      },
    ],
    define: {
      __CV_AVAILABLE__: JSON.stringify(
        existsSync("public/leonel-katsikaris-cv.pdf"),
      ),
    },
  };
});
