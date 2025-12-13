<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit() {
  console.log('Install @vue-email/nuxt to fullfill code for email subscribing!')
  // https://nuxt.com/modules/vue-email
  loading.value = true
  toast.add({
    title: 'NOT Subscribed!',
    description: 'You\'ve NOT been subscribed because of missing code for email subscription.'
  })
}

const items: NavigationMenuItem[] = [
  {
    label: 'Docs',
    title: 'Docs & About',
    icon: 'i-lucide-book-open',
    to: '/docs'
  },
  {
    label: 'Search',
    title: 'Search in table overview of books',
    icon: 'i-lucide-search',
    to: '/search'
  },
  {
    label: 'Blog',
    title: 'Blog with Luther books',
    icon: 'i-lucide-graduation-cap',
    to: '/blog'
  }
]
</script>

<template>
  <USeparator
    icon="i-simple-icons-nuxtdotjs"
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <!-- // Add @vue-email/nuxt to activate email subscription! -->
    <template #top>
      <UContainer>
        <form @submit.prevent="onSubmit">
          <UFormField
            name="email"
            label="Subscribe to our newsletter"
            size="lg"
          >
            <UInput
              v-model="email"
              type="email"
              class="w-full"
              placeholder="Enter your email"
            >
              <template #trailing>
                <UButton
                  type="submit"
                  size="xs"
                  color="neutral"
                  label="Subscribe"
                />
              </template>
            </UInput>
          </UFormField>
        </form>
      </UContainer>
    </template>

    <template #left>
      <p class="text-muted text-sm">
        @LawyerKyrie • © {{ new Date().getFullYear() }}
      </p>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UButton
        to="https://github.com/LawyerKyrie/"
        target="_blank"
        icon="i-el-github-text"
        aria-label="LawyerKyrie on GitHub"
        title="LawyerKyrie on GitHub"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://github.com/LawyerKyrie/luther-books/discussions/categories/comments"
        target="_blank"
        icon="i-fluent-comment-add-24-regular"
        aria-label="Comment on GitHub"
        title="Comment on GitHub"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://github.com/LawyerKyrie/luther-books"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="Luther Books on GitHub"
        title="Luther Books on GitHub"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
