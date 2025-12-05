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

const dropdownLinks = [
  {
    icon: 'i-carbon-category',
    label: `Details Row (${column.id})`,
    title: `Details Row Id ${column.id}`,
    children: [
      {
        label: 'Category',
        icon: 'i-carbon-category-new',
        description: column.category
      },
      {
        label: `Description`,
        icon: 'i-fluent-slide-text-title-24-regular',
        description: column.description
      }
    ]
  },
  {
    icon: 'i-octicon-link-16',
    label: `Links (${links})`,
    title: links === 1 ? props.rowParent?.original.urls[0] : 'Links to source(s)',
    children: linkChildren
  }
]

// const items: CustomNavigationMenuItem[] = dropdownLinks // OK
const items = ref<NavigationMenuItem[]>(dropdownLinks)

// function templateExpandedHandler(rowPa) {}
</script>

<template>
  <div class="w-full">
    <!-- <span class="hidden">{{ templateExpandedHandler(props.rowParent) }}</span> -->
    <!-- @vue-expect-error Types of property 'path' are incompatible. Type 'unknown' is not assignable to type 'undefined'. -->
    <UNavigationMenu
      :items="items"
      variant="pill"
      :tooltip="true"
      color="secondary"
      content-orientation="vertical"
      class="justify-center text-wrap"
    />
  </div>
</template>
