# 23.17 website

The placeholder site for [23.17](https://github.com/Leitwolf11/23-17), built with Nuxt 4, Nuxt i18n and Nuxt Content. US English is served at `/`, German at `/de` and French at `/fr`.

```sh
npm ci
npm run dev
```

Edit the landing copy in `content/landing/`. Run `npm run generate` to prerender all three routes to `.output/public`.

## Deploy

From Fish, with `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` exported, run `npm run deploy`. Wrangler uploads the static files to the `23-11` Worker. The site is served at [23-11.leitwolf11.workers.dev](https://23-11.leitwolf11.workers.dev/).
