// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ryu-s.github.io',
	integrations: [
		starlight({
			title: 'コメビュとかツールとか',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ryu-s' }],
			pagefind: false,
			pagination: false,
			tableOfContents: false,
			customCss: ['./src/styles/simple.css'],
			sidebar: [
				{
					label: 'マルチコメントビューア',
					link: '/app/multicommentviewer/',
				},
				{
					label: '使い方・FAQ',
					items: [
						{ label: '使い方ガイド', slug: 'app/multicommentviewer/guide' },
						{ label: 'FAQ', slug: 'app/multicommentviewer/faq' },
						{ label: 'プラグイン一覧', slug: 'app/multicommentviewer/plugins' },
					],
				},
				{
					label: '配布終了アプリ',
					collapsed: true,
					items: [
						{ label: 'ツイキャスコメントビューア', slug: 'app/twicascommentviewer' },
						{ label: 'OPENRECコメントビューア', slug: 'app/openreccommentviewer' },
						{ label: 'ふわっちコメントビューア', slug: 'app/whowatchcommentviewer' },
						{ label: 'YouTube Liveコメントビューア', slug: 'app/youtubelivecommentviewer' },
					],
				},
			],
		}),
	],
});
