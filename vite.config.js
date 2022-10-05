import { sveltekit } from '@sveltejs/kit/vite';
import { whyframe } from '@whyframe/core';
import { whyframeSvelte } from '@whyframe/svelte';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		whyframe({
			components: [
				{
					name: 'Story'
				}
			]
		}),
		whyframeSvelte()
	]
};

export default config;
