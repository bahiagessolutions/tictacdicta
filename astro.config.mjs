import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.tictacdicta.es",
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    // --- INICIO DE LA MODIFICACIÓN ---
    // Hemos expandido icon() para añadirle un objeto de configuración
    icon({
      // La propiedad "include" actúa como una lista blanca de permisos
      include: {
        // Aquí permitimos TODOS los iconos de la colección "ic" (Material Symbols)
        ic: ["*"],
        tabler: ["*"],
        logos: ["*"],
        // Consejo: Si mañana quieres usar otro, como "mdi", solo añádelo a la lista:
        // mdi: ["*"],
      },
    }),
    // --- FIN DE LA MODIFICACIÓN ---
  ],
});