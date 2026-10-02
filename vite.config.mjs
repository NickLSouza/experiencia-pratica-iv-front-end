import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
    appType: "mpa",

    base: "/experiencia-pratica-iv-front-end/",

    input: {
        index: resolve(import.meta.dirname, "index.html"),
        cadastro: resolve(import.meta.dirname, "cadastro.html"),
        projetos: resolve(import.meta.dirname, "projetos.html")
    },

    build: {
        outDir: "dist",
        emptyOutDir: true
    }
});