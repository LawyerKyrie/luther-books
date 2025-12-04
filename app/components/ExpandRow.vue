<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const props = defineProps({
  rowParent: Object
})

const links = props.rowParent?.original.urls.length

const column = {
  id: props.rowParent?.original.id,
  category: props.rowParent?.original.category,
  title: props.rowParent?.original.title,
  description: props.rowParent?.original.description,
  urlLink: links === 1 ? props.rowParent?.original.urls[0] : ''
}

let linkChildren

function addingLinkObj2Array(orig) {
  // similar function in: getDropdownActions in search.vue (luther-books)
  const urlSourceArr = []
  for (let i = 0; i < orig.urls.length; i++) {
    const objLoop = {
      label: orig.sources[i],
      title: orig.urls[i],
      icon: 'i-arcticons-moondrop-link',
      description: orig.formats[i],
      to: orig.urls[i],
      target: '_blank'
    }
    urlSourceArr.push(objLoop)
  } // End For Loop

  linkChildren = urlSourceArr
}
addingLinkObj2Array(props.rowParent?.original) // getting and saving linkChildren

const items = ref<NavigationMenuItem[]>(
  // const dropdownLinks =
  [
    {
      label: '',
      title: `ID: ${column.id}`,
      icon: 'i-fluent-emoji-high-contrast-id-button',
      badge: column.id
    },
    {
      icon: 'i-carbon-category',
      title: `Category: ${column.category}`,
      children: [
        {
          label: 'Category',
          icon: 'i-carbon-category-new',
          description: column.category
        }
      ]
    },
    {
      label: 'Description',
      // icon: 'i-mdi-read-more-outline',
      title: `${column.description}`,
      children: [
        {
          label: `${column.title.slice(0, 20)} ...`,
          icon: 'i-fluent-slide-text-title-24-regular',
          description: column.description
        }
      ]
    },
    {
      title: links === 1 ? props.rowParent?.original.urls[0] : 'Links to source(s)',
      icon: 'i-octicon-link-24',
      to: column.urlLink,
      target: '_blank',
      slot: 'components' as const,
      ui: {
        leadingIcon: [ // This error in MS Code can be ignored
          'transition-transform',
          links === 1 ? 'duration-200 rotate-180' : 'collapsed-manually'
        ]
      },
      children: linkChildren
    }
    /*
    {
      title: 'Help',
      icon: 'i-lucide-circle-help',
      disabled: true
    }
    */
    /*
    If linkChildren is made as constant then the error message on leadingIcon disappear,
    but then there is a new similar error on the const name dropdownLinks
    - inside const items.
    */
  ]
)

// const templateExpandedHandler = (rowPa) => { }
</script>

<template>
  <div>
    <!-- <span class="hidden">{{ templateExpandedHandler(props.rowParent) }}</span> -->
    <UNavigationMenu
      :items="items"
      variant="pill"
      :tooltip="true"
      content-orientation="vertical"
      class="w-full justify-center text-wrap"
    >
      <template #components-trailing>
        <UBadge
          :label="props.rowParent?.original.tags.length"
          variant="subtle"
          size="sm"
        />
        <!--
        <UBadge
          :icon="links === 1 ? 'i-arcticons-moondrop-link' : 'i-lucide-chevron-down'"
          variant="subtle"
          size="lg"
        />
        -->
      </template>
    </UNavigationMenu>
  </div>
</template>
