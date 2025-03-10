import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import _version from "./src/lib/json/version.json" assert { type: "json" };
import { redirects } from "./src/routes/redirects.js";

const version = _version.version;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		prerender: {
			crawl: true,
			entries: [
				"*",
				`/${version}/docs`,
				`/${version}/guides`,
				`/${version}/docs/js`,
				`/${version}/docs/js/storybook`,
				`/${version}/docs/js/`,
				`/main/docs`,
				`/main/guides`,
				`/main/docs/js`,
				...Object.keys(redirects)
			]
		},
		files: {
			lib: "src/lib"
		},
		adapter: adapter()
	}
};

export default config;
