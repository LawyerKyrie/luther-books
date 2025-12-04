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

const templateExpandedHandler = (parent) => {
  // Voluntary start this function when the expanded template is opened
  console.log(`templateExpandedHandler started from ExpandRow.vue. Printing parent row object: `)
  console.log(parent)
  // addingLinkObj2Array(parent)
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

  console.log('urlSourceArr is: ')
  console.log(urlSourceArr)
  // console.log('The length of linkChildren is now: ' + linkChildren.length)
  linkChildren = urlSourceArr
  console.log('The length of linkchildren is after this ' + linkChildren.length)
  console.log('linkChildren = ')
  console.log(linkChildren)
  // urlSourceArr.valu = linkChildren
}
addingLinkObj2Array(props.rowParent?.original) // getting and saving linkChildren

const dropdownLinks = [
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
      leadingIcon: [
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
]
const items = ref<NavigationMenuItem[]>(
  dropdownLinks
)
</script>

<template>
  <div>
    <span class="hidden">{{ templateExpandedHandler(props.rowParent?.original.id) }}</span>
    <UNavigationMenu
      :items="items"
      variant="pill"
      :tooltip="true"
      content-orientation="vertical"
      class="w-full justify-center text-wrap"
      @select="console.log('dropdown expandable is clicked')"
      @click="console.log('testing if clicked')"
      @hover="console.log('hover on dropdown')"
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
