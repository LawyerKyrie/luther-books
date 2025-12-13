<script setup lang="ts">
import type { SelectMenuItem, TabsItem } from '@nuxt/ui'

const props = defineProps({
  rowParent: Object
})

const links = props.rowParent?.original.urls.length
const selectedOption = ref({ label: `Select 1 of ${links} Net versions` })

/* // Didn't get useFetch api to work - Try this code later in search.vue
const { data: linkInfo, status } = await useFetch('/api/book-table', {
  key: 'link-info',
  transform: (data: { tags: string, urls: string, formats: string }[]) => {
    // const rowId = props.rowParent?.original.id
    return data?.map(useurl => ({
      label: String(useurl.tags),
      value: String(useurl.urls),
      format: String(useurl.formats)
    }))
  }
})
*/

proxy2ArrayObj.tags = []
function proxy2ArrayObj(proxyArray) {
  // Input arg is a proxyArray
  // Output is an array of objects to show in urlMenu
  // const simpleArrExample = ['domain1', 'domain2', 'domain3']
  const simpleArray = [...proxyArray] // URLs
  const newArrayOfObjects = simpleArray.map((value, index) => {
    const tag = props.rowParent?.original.tags[index]
    // const domain = getHostnameFromUrl(value)
    const format = props.rowParent?.original.formats[index]

    return {
      ['label']: tag as string,
      ['value']: `option${index + 1}`,
      ['tooltip']: format,
      ['icon']: 'i-arcticons-moondrop-link',
      ['title']: 'If this showing in a tooltip?',
      ['onSelect']: () => {
        selectedOption.value = { label: `Option ${index}` }
        // showToast(`${domain} selected`, ` with ${tag}`)
        toastPopupOnUrlSelect(props.rowParent?.original, index)
        navigateTo(`${value}`, { // runs only if links > 1
          external: true,
          open: {
            target: '_blank',
            windowFeatures: { width: 800, height: 600 }
          }
        })
        // console.log('Running on clicked select')
      }
    }
  })
  return newArrayOfObjects
}

const items = ref<SelectMenuItem[]>(
  // return UrlArrayObj items
  proxy2ArrayObj(props.rowParent?.original.urls)
)

const popoverBtn1 = `Details Row ${props.rowParent?.original.id}`
const popoverBtn2 = `(${props.rowParent?.original.urls.length}) Url Links`

const detailsTabs = ref<TabsItem[]>([
  {
    label: 'Category',
    icon: 'i-lucide-user',
    content: props.rowParent?.original.category
  },
  {
    label: 'Description',
    icon: 'i-lucide-lock',
    content: props.rowParent?.original.description
  }
])

function addSpacesInArray(arrArg) {
  // Use map() to create a new array with the formatted strings
  const formattedArray = arrArg.map((str) => {
    // Regex explanation:
    // /,'(?=[^\\s"])/g  - Match a comma (,) or a quote (")
    //                      that is followed by a non-whitespace character ([^\\s"])
    //                      using a positive lookahead (?=...)
    // $&              - Inserts the matched substring (the comma or quote)
    // " "             - Inserts a space after the matched character

    // We can use a simpler regex if the only issue is a missing space after a comma/quote
    return str.replace(/,(\S)/g, ', $1').replace(/"(\S)/g, '"$1') // (alternative:) str.replace(/,([^\\s])/g, ', $1');
  })
  return formattedArray
}

const linkTabs = ref<TabsItem[]>([
  {
    label: links === 1 ? 'Format' : 'Formats',
    icon: 'i-carbon-pdf-reference',
    content: links === 1 ? props.rowParent?.original.formats[0] : addSpacesInArray(props.rowParent?.original.formats) // JSON.stringify(props.rowParent?.original.formats).slice(1, -1)
  },
  {
    label: links === 1 ? 'Tag' : 'Tags',
    icon: 'i-tabler-tag',
    class: 'min-w-24 max-w-3xs break-normal',
    content: links === 1 ? props.rowParent?.original.tags[0] : addSpacesInArray(props.rowParent?.original.tags)
  }
])

const toast = useToast()
function showToast(title, description) {
  toast.add({
    title: title,
    description: description,
    icon: 'i-lucide-wifi',
    close: {
      color: 'primary',
      variant: 'outline',
      class: 'rounded-full'
    }
  })
}
const toastPopupOnUrlSelect = (original, arrId) => { // runs if links === 1
  const description = 'Tag(s): ' + original.tags[arrId]
    + '... Format(s): ' + original.formats[arrId]
  // `Format: ${original.formats[arrId]} <br> Tag: ${original.tags[arrId]}`
  showToast(`${getHostnameFromUrl(original.urls[arrId])} selected`, description)
  window.open(original.urls[arrId], '_blank', 'height=600,width=800,scrollbars=yes,resizable=yes')
}

/* Start to Extract hostname (domain) from URL */
function getHostnameFromUrl(urlString) {
  try {
    const url = new URL(urlString)
    return url.hostname
  } catch (error) {
    console.error('Invalid URL:', error)
    return null
  }
} // Used in getDropdownActions()
/* Finish with Extracting hostname (domain) from URL */

/* // getPopoverWidth testing activated at click on popoverBtn2 or UTabs (2)
// 1. Define a ref for the popover element
const popoverRef = ref(null)
const popoverDim = ref({ width: 0 })

const getPopoverWidth = async () => {
  // 2. Wait for the DOM to update
  await nextTick()

  // 3. Access the element and get dimensions
  if (popoverRef.value) {
    const { offsetWidth } = popoverRef.value
    popoverDim.value = { width: offsetWidth }
    console.log(`Popover Width: ${offsetWidth}px`)
  }
}
*/
</script>

<template>
  <div
    class="flex w-full space-x-2"
  >
    <UPopover
      modal
      arrow
      mode="click"
      :dismissible="true"
      :ui="{ content: 'p-4 whitespace-normal break-normal max-w-xs' }"
    >
      <UButton
        icon="i-carbon-category"
        :label="popoverBtn1"
        color="neutral"
        variant="subtle"
        trailing-icon="i-lucide-arrow-right"
        hide-when-detached="true"
        prioritize-position="true"
        active-color="primary"
        active-variant="solid"
        class="w-1/2 justify-center"
      />
      <template #content="{ close }">
        <UTabs
          :items="detailsTabs"
          default-value="1"
          class="w-full"
        />
        <div class="flex justify-end">
          <UButton
            color="neutral"
            variant="ghost"
            icon="i-lucide-x"
            @click="close"
          />
        </div>
      </template>
    </UPopover>
    <!-- ************** Popover Button 2 ******************* -->
    <UPopover
      arrow
      mode="click"
      :dismissible="true"
      :ui="{ content: 'p-4 whitespace-normal break-normal max-w-xs' }"
    >
      <UButton
        icon="i-octicon-link-16"
        :label="popoverBtn2"
        color="neutral"
        variant="subtle"
        trailing-icon="i-lucide-arrow-right"
        active-class="font-bold"
        inactive-class="font-light"
        class="w-1/2 justify-center"
        @click="console.log('popoverBtn2')"
      />

      <template #content="{ close }">
        <div v-if="links === 1">
          <UTooltip
            :text="'Tag: ' + props.rowParent?.original.tags[0]"
            :content="{ side: 'top' }"
            :ui="{ text: 'whitespace-normal break-word max-w-3xs' }"
          >
            <UButton
              class="w-full justify-center"
              trailing-icon="i-lucide-arrow-right"
              @click.prevent="toastPopupOnUrlSelect(props.rowParent?.original, 0)"
            >
              {{ getHostnameFromUrl(props.rowParent?.original.urls[0]) }}
            </UButton>
          </UTooltip>
          <div class="whitespace-normal break-all max-w-xs">
            <UTabs
              :items="linkTabs"
              default-value="0"
            />
          </div>
          <UButton
            color="neutral"
            variant="ghost"
            icon="i-lucide-x"
            class="flex w-full justify-end"
            @click="close"
          />
        </div>
        <div
          v-else
          ref="popoverRef"
          class="velse popover-element"
        >
          <!-- :loading="status === 'pending'" -->
          <USelectMenu
            v-model="selectedOption"
            :items="items"
            icon="i-lucide-search"
            placeholder="Select Url Link"
            trailing-icon="i-lucide-arrow-down"
            :ui="{ content: 'min-w-fit max-w-3xs' }"
            :search-input="{
              placeholder: 'Filter...',
              icon: 'i-lucide-search'
            }"
            class=""
            @click="console.log('checking if this is running on click')"
          >
            <template #item-label="{ item }">
              <!-- @vue-expect-error  Property 'tooltip' does not exist on type 'AcceptableValue... -->
              <UTooltip :text="item?.tooltip">
                <!-- @vue-expect-error  Property 'label' does not exist on type 'AcceptableValue... -->
                <span v-if="typeof item !== 'string' && 'label' in item">{{ item?.label }}</span>
                <span v-else>Error: No label</span>
              </UTooltip>
            </template>
          </USelectMenu>
          <div
            ref="elementRef"
            class="whitespace-normal break-normal"
          >
            <UTabs
              :items="linkTabs"
              default-value="0"
              class="w-full"
              @click="console.log('linkTabs')"
            />
            <span class="flex justify-end">
              <!--
              <span v-if="popoverDim.width">
                Width: {{ popoverDim.width }}px
              </span>
              -->
              <UButton
                color="neutral"
                variant="ghost"
                icon="i-lucide-x"
                class="mb-0 pt-1 mt-1"
                @click="close"
              />
            </span>
          </div>
        </div>
      </template>
    </UPopover>
  </div>
</template>

<style scope>
.break-after-comma::after {
    content: "\A"; /* Inserts a newline character */
    white-space: pre; /* Tells the browser to respect the newline character */
}
</style>
