<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = ref<NavigationMenuItem[]>([{
  label: 'Docs',
  to: '/docs',
  active: route.path.startsWith('/docs'),
  children: [
    {
      label: 'About',
      to: '/docs/about',
      title: 'Docs with about page etc.'
    },
    {
      label: 'Nuxt UI SaaS',
      to: '/docs/getting-started',
      children: [
        {
          label: 'Getting Started',
          to: '/docs/getting-started'
        },
        {
          label: 'Template',
          to: '/docs/getting-started/template'
        },
        {
          label: 'Usage',
          to: '/docs/getting-started/usage'
        }
      ]
    },
    {
      label: 'Essentials',
      to: '/docs/essentials',
      children: [
        {
          label: 'Markdown Syntax',
          to: '/docs/essentials'
        },
        {
          label: 'Code Blocks',
          to: '/docs/essentials/code-blocks'
        },
        {
          label: 'Prose Components',
          to: '/docs/essentials/prose-components'
        },
        {
          label: 'Images Embeds',
          to: '/docs/essentials/images-embeds'
        }
      ]
    }
  ]
}, {
  label: 'Search',
  to: '/search',
  title: 'Search for Luther Books'
}, {
  label: 'Blog',
  to: '/blog',
  children: [
    {
      label: 'The 95 Theses',
      to: '/blog/the-95-theses'
    },
    {
      label: 'The small catechism',
      to: '/blog/the-small-catechism'
    },
    {
      label: 'Church Postil',
      to: '/blog/church-postil'
    },
    {
      label: 'House Postil',
      to: '/blog/house-postil'
    },
    {
      label: 'Book of Concord',
      to: '/blog/book-of-concord'
    },
    {
      label: 'Christian Dogmatics',
      to: '/blog/christian-dogmatics'
    },
    {
      label: 'Luther Writings',
      to: '/blog/luther-writings'
    }
  ]
}
])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
      <TemplateMenu />
    </template>

    <!--
    :items="items"
     variant="link"
    -->
    <UNavigationMenu
      :items="items"
      variant="pill"
      :tooltip="true"
      content-orientation="vertical"
    />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        type="single"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
