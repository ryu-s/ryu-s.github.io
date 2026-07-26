# ryu-s.github.io

マルチコメントビューア(MCV)の配布・使い方・FAQサイトです。[Astro](https://astro.build) + [Starlight](https://starlight.astro.build) で構築しています。

## 開発

```sh
npm install
npm run dev
```

`http://localhost:4321` でプレビューできます。

## ビルド

```sh
npm run build
```

`dist/` に静的ファイルが出力されます。`master` ブランチへの push で GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) が自動的にビルド・GitHub Pages へのデプロイを行います。

## ページの追加・編集

- `src/content/docs/` 以下に Markdown ファイルを置くとそのままページになります（パスがそのまま URL になります）
- サイドバーの並び順・グループは [astro.config.mjs](astro.config.mjs) の `sidebar` で設定します
- スクリーンショットなどの画像は `public/images/` 以下に置き、Markdown からは `![説明](/images/xxx.png)` のように絶対パスで参照してください
