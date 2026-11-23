<script setup lang="ts">
const { locale, locales, t } = useI18n()
const localeHead = useLocaleHead()
const contentKey = computed(() => `landing-${locale.value}`)
const { data: page } = await useAsyncData(contentKey, () =>
  queryCollection('landing').path(`/landing/${locale.value}`).first(),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useHead(() => ({
  htmlAttrs: localeHead.value.htmlAttrs,
  link: localeHead.value.link,
  meta: localeHead.value.meta,
}))
useSeoMeta({
  title: '23.17',
  description: () => page.value?.description,
})
</script>

<template>
  <div class="site">
    <header class="site-header">
      <nav :aria-label="t('languages')" class="languages">
        <SwitchLocalePathLink
          v-for="language in locales"
          :key="language.code"
          :locale="language.code"
          :lang="language.language"
          :aria-current="locale === language.code ? 'page' : undefined"
        >
          {{ language.name }}
        </SwitchLocalePathLink>
      </nav>
    </header>

    <main class="landing">
      <h1>23<span>.</span>17</h1>
      <ContentRenderer v-if="page" :value="page" class="landing-copy" />
      <a class="source-link" href="https://github.com/Leitwolf11/23-17">
        {{ t('source') }}
      </a>
    </main>
  </div>
</template>
