// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian'


import tailwindcss from '@tailwindcss/vite';


import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
    site: 'https://hmrguez.github.io/apiand-docs',
    base: '/',
    integrations: [starlight({
        plugins: [starlightThemeObsidian({
            backlinks: false,
            graph: false,
            graphConfig: {},
            backlinksConfig: {},
            sitemapConfig: {}
        })],
        title: 'Apiand',
        social: {
            github: 'https://github.com/hmrguez/apiand',
        },
        sidebar: [
            {
                label: 'Getting Started',
                autogenerate: {directory: 'getting-started'},
            },
            {
                label: 'Generate',
                autogenerate: {directory: 'generate'},
            },
            {
                label: 'Templates',
                autogenerate: {directory: 'templates'},
            },
            {
                label: 'Collaborate',
                autogenerate: {directory: 'collaborate'},
            },
            {
                label: 'Reference',
                autogenerate: {directory: 'reference'},
            }
        ],
    }), react()],

    vite: {
        plugins: [tailwindcss()],
    },
});