// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'

// https://astro.build/config
export default defineConfig({
	site: 'https://oamk-tietotekniikka.github.io',
	base: '/docs/',
	integrations: [
		starlight({
			plugins: [
				// Generate the OpenAPI documentation pages.
				starlightOpenAPI([
					{
						base: 'api',
						schema: 'src/assets/openapi.yaml',
					},
				]),
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/OAMK-tietotekniikka/ProjectsMS' }],
			editLink: {
				baseUrl: 'https://github.com/OAMK-tietotekniikka/docs/edit/main/project_ms/',
			},
			title: {
				en: 'Project MS Docs',
			},
			defaultLocale: 'en',
			locales: {
				en: { label: 'English' },
			},
			sidebar: [
				{
					label: 'Quickstart',
					items: [
						'intro/about',
						'intro/installation',
						'explanation/architecture'
					]
				},
				{
					label: 'How-to',
					autogenerate: { directory: 'how-to' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				...openAPISidebarGroups,
			],
		}),
	],
});
