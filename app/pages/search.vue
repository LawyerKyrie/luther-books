<script setup lang="ts">
import { h, resolveComponent } from 'vue'
import { upperFirst } from 'scule' /* Visibility */
import type { ContextMenuItem, TableColumn, TableRow } from '@nuxt/ui'
import { type Column, type Row, getPaginationRowModel } from '@tanstack/vue-table'
import { useClipboard /* useInfiniteScroll */ } from '@vueuse/core'

const toast = useToast()
const { copy } = useClipboard()

// const UBadge = resolveComponent('UBadge')
const UButton = resolveComponent('UButton')
const UDropdownMenu = resolveComponent('UDropdownMenu')

const { data: page } = await useAsyncData('searching', () => queryCollection('searching').first())

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

type RowCells = {
  id: string
  tags: string
  category: string
  title: string
  description: string
  sources: string
  urls: string
  formats: string
}

const { data: rows, pending } = await useFetch<RowCells[]>(
  '/api/book-table',
  { /* the following line isn't in use, and can be deleted
    key: 'table-rows',
    transform: (data) => {
      return (data?.map(row => ({ ...row })) || [])
    } // server: false, lazy: true, immediate: false */
  }
)

const columns: TableColumn<RowCells>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => getHeader(column, '#'),
    cell: ({ row }) => `${row.getValue('id')}`
  },
  /* // Hiding - Only showing this on expanded rows
  {
    accessorKey: 'tags',
    header: ({ column }) => getHeader(column, 'Tag'),
    cell: ({ row }) => `${row.getValue('tags')}`
  },
  */
  {
    accessorKey: 'category',
    header: ({ column }) => getHeader(column, 'Category'),
    cell: ({ row }) => `${row.getValue('category')}`
  },
  {
    accessorKey: 'title',
    header: ({ column }) => getHeader(column, 'Title'),
    cell: ({ row }) => `${row.getValue('title')}`
  },
  {
    accessorKey: 'description',
    header: ({ column }) => getHeader(column, 'Description'),
    cell: ({ row }) => `${row.getValue('description')}`
  },
  /* // Hiding - Only showing this on expanded rows
  {
    accessorKey: 'sources',
    header: ({ column }) => getHeader(column, 'Source(s)'),
    cell: ({ row }) => {
      const sourceArray = JSON.stringify(row.original.sources)
      return h('div', { class: 'text-right font-medium' }, sourceArray)
    }
  },
  {
    accessorKey: 'urls',
    header: ({ column }) => getHeader(column, 'Url(s)'),
    cell: ({ row }) => {
      const urlArray = JSON.stringify(row.original.urls)
      return h('div', { class: 'text-right font-medium' }, urlArray)
    }
  },
  {
    accessorKey: 'formats',
    header: ({ column }) => getHeader(column, 'Format(s)'),
    cell: ({ row }) => {
      const formatArray = JSON.stringify(row.original.formats)
      return h('div', { class: 'text-right font-medium' }, formatArray)
    }
  },
  */
  {
    id: 'action'
  }
]

const globalFilter = ref('') // Start with this filter

/* Sorting */
function getHeader(column: Column<RowCells>, label: string) {
  const isSorted = column.getIsSorted()

  return h(
    UDropdownMenu,
    {
      'content': {
        align: 'start'
      },
      'aria-label': 'Actions dropdown',
      'items': [
        {
          label: 'Asc',
          type: 'checkbox',
          icon: 'i-lucide-arrow-up-narrow-wide',
          checked: isSorted === 'asc',
          onSelect: () => {
            if (isSorted === 'asc') {
              column.clearSorting()
            } else {
              column.toggleSorting(false)
            }
          }
        },
        {
          label: 'Desc',
          icon: 'i-lucide-arrow-down-wide-narrow',
          type: 'checkbox',
          checked: isSorted === 'desc',
          onSelect: () => {
            if (isSorted === 'desc') {
              column.clearSorting()
            } else {
              column.toggleSorting(true)
            }
          }
        }
      ]
    },
    () =>
      h(UButton, {
        'color': 'neutral',
        'variant': 'ghost',
        label,
        'icon': isSorted
          ? isSorted === 'asc'
            ? 'i-lucide-arrow-up-narrow-wide'
            : 'i-lucide-arrow-down-wide-narrow'
          : 'i-lucide-arrow-up-down',
        'class': '-mx-2.5 data-[state=open]:bg-elevated',
        'aria-label': `Sort by ${isSorted === 'asc' ? 'descending' : 'ascending'}`
      })
  )
}

const sorting = ref([
  {
    id: 'id',
    desc: false
  }
])
/* Visibility */
const table = useTemplateRef('table') // Pagination also uses uses this ref.

const columnVisibility = ref({
  id: false,
  tags: false,
  category: false,
  description: false,
  sources: false,
  urls: false,
  formats: false
})

/* Start Action (Slots) */
function getDropdownActions(row: Row<RowCells>) {
  // Using this function instead of getRowCellsItems(row) {}

  let arrLength = true
  if (row.original.sources.length === 1)
    arrLength = false

  const urlSourceArr = []
  for (let i = 0; i < row.original.urls.length; i++) {
    const objLoop = {
      label: arrLength ? `${row.original.tags[i]}` : `${row.original.sources[i]}`,
      icon: 'i-lucide-copy',
      title: `Format: ${row.original.formats[i]}`,
      onSelect: () => {
        copy(`${row.original.urls[i]}`)
        toast.add({
          title: 'URL copied to clipboard!',
          color: 'success',
          icon: 'i-lucide-circle-check'
        })
      }
    }
    urlSourceArr.push(objLoop)
  } // End For Loop

  // Transferring urlSourceArr down to "Click to copy URL"

  return [
    [
      {
        type: 'label' as const,
        label: `About ID ${row.original.id}`,
        icon: 'i-lucide-info'
      }
    ],
    [
      {
        label: `${row.original.category}`,
        title: 'Category',
        icon: 'i-material-symbols-category-outline',
        onSelect: () => {
          copy(row.original.category)

          toast.add({
            title: 'Category copied to clipboard!',
            color: 'success',
            icon: 'i-lucide-circle-check'
          })
        }
      },
      {
        label: arrLength ? `${row.original.title}` : `${row.original.tags}`,
        title: 'Tag',
        icon: arrLength ? 'i-lucide-subtitles' : 'i-lucide-tag',
        onSelect: () => {
          copy(row.original.tags)

          toast.add({
            title: 'Tag copied to clipboard!',
            color: 'success',
            icon: 'i-lucide-circle-check'
          })
        }
      },
      {
        label: `Source(s):`,
        icon: 'i-lucide-folder-symlink',
        children: [
          [
            {
              type: 'label' as const,
              label: 'Click to copy URL',
              icon: 'i-lucide-mouse-pointer-click'
            }
          ],
          urlSourceArr
        ]
      }
    ],
    [
      {
        label: row.getIsExpanded() ? 'Collapse' : 'Expand',
        title: JSON.stringify(row.original),
        icon: 'i-lucide-expand',
        onSelect() {
          row.toggleExpanded()
        }
      }
    ]
  ]
}
/* End of action (slots) */

/* Start RowCells context menu event */
const items = ref<ContextMenuItem[]>([])
/* function getRowCellsItems(row: TableRow<RowCells>) {
  return [
    // All the Objects in getDropdownActions - without arrays
  ]
} */
function onContextmenu(_e: Event, row: TableRow<RowCells>) {
  items.value = getDropdownActions(row) // getRowCellsItems(row)
}
/* End RowCells context menu event */

/* Start Hover */
const anchor = ref({ x: 0, y: 0 })

const reference = computed(() => ({
  getBoundingClientRect: () =>
    ({
      width: 0,
      height: 0,
      left: anchor.value.x,
      right: anchor.value.x,
      top: anchor.value.y,
      bottom: anchor.value.y,
      ...anchor.value
    }) as DOMRect
}))

const open = ref(false)
const openDebounced = refDebounced(open, 10)
const selectedRow = ref<TableRow<RowCells> | null>(null)

function onHover(_e: Event, row: TableRow<RowCells> | null) {
  selectedRow.value = row
  open.value = !!row
}
/* End Hover */

/* Start Pagination */
const pagination = ref({
  pageIndex: 0,
  pageSize: 10
})
/* End Pagination */
</script>

<template>
  <div v-if="page">
    <!--
    <UPageHeader
      class="px-4 text-center"
      :title="page.title"
    />
    -->
    <div class="flex justify-between">
      <!--  -->
      <div class="px-4 py-3.5 border-b border-accented">
        <UInput
          v-model="globalFilter"
          icon="i-lucide-search"
          class="max-w-md"
          placeholder="Filter..."
        />
      </div>
      <div class="w-5/16 px-4 py-3.5 justify-end border-b border-accented">
        <!--  -->
        <UDropdownMenu
          :items="
            table?.tableApi
              ?.getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => ({
                label: upperFirst(column.id),
                type: 'checkbox' as const,
                checked: column.getIsVisible(),
                onUpdateChecked(checked: boolean) {
                  table?.tableApi?.getColumn(column.id)?.toggleVisibility(!!checked)
                },
                onSelect(e: Event) {
                  // e.preventDefault()
                }
              }))
          "
          :content="{ align: 'end' }"
        >
          <UButton
            label="Show"
            color="neutral"
            variant="outline"
            trailing-icon="i-lucide-chevron-down"
          />
        </UDropdownMenu>
      </div>
    </div>
    <!--
      original UTable classNames: flex-1 h-80
      original div class="flex flex-col flex-1 w-full"
    -->
    <div class="w-full">
      <UContextMenu :items="items">
        <!-- Activate sticky header with className: max-h-[312px] -->
        <UTable
          ref="table"
          v-model:global-filter="globalFilter"
          v-model:sorting="sorting"
          v-model:column-visibility="columnVisibility"
          v-model:pagination="pagination"
          sticky
          :data="rows || []"
          :columns="columns"
          :loading="pending === true"
          :pagination-options="{
            getPaginationRowModel: getPaginationRowModel()
          }"
          class="flex-1 pl-4"
          :ui="{ td: 'p-1', th: 'p-1' }"
          @pointermove="
            (ev: PointerEvent) => {
              anchor.x = ev.clientX
              anchor.y = ev.clientY
            }
          "
          @hover="onHover"
          @contextmenu="onContextmenu"
        >
          <template #action-cell="{ row }">
            <UDropdownMenu
              :items="getDropdownActions(row)"
            >
              <UButton
                icon="i-lucide-ellipsis-vertical"
                color="neutral"
                variant="ghost"
                aria-label="Actions"
                @click="console.log('Rows DropDown Menu Clicked')"
              />
              <!-- getDropdownActions(row) don't run on click at Drowdown menu button -->
            </UDropdownMenu>
          </template>
          <template #expanded="{ row }">
            <pre>{{ row.original }}</pre>
          </template>
        </UTable>
        <div class="flex justify-center border-t border-default pt-4">
          <UPagination
            :default-page="(table?.tableApi?.getState().pagination.pageIndex || 0) + 1"
            :items-per-page="table?.tableApi?.getState().pagination.pageSize"
            :total="table?.tableApi?.getFilteredRowModel().rows.length"
            @update:page="(p) => table?.tableApi?.setPageIndex(p - 1)"
          />
        </div>
      </UContextMenu>
      <UPopover
        :content="{ side: 'top', sideOffset: 16, updatePositionStrategy: 'always' }"
        :open="openDebounced"
        :reference="reference"
      >
        <template #content>
          <div class="p-4">
            {{ selectedRow?.original?.description }}
          </div>
        </template>
      </UPopover>
    </div>
  </div>
</template>
