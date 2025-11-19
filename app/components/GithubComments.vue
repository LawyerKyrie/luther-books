<!-- components/GithubComments.vue -->
<script setup lang="ts">
import Giscus from '@giscus/vue'
import { useOnline } from '@vueuse/core'

const online = useOnline().value

const time2load = ref(false)
const timer = setTimeout(() => {
  time2load.value = true
  clearTimeout(timer)
}, 1000)
</script>

<template>
  <span
    v-if="online"
    class="relative"
  >
    <!-- CHANGE THE FOLLOWING DATA ON https://giscus.app/ -->
    <Giscus
      repo="LawyerKyrie/luther-books"
      repo-id="R_kgDOQYepuw"
      category="Comments"
      category-id="DIC_kwDOQYepu84Cx8mS"
      mapping="url"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="bottom"
      theme="noborder_dark"
      lang="en"
      crossorigin="anonymous"
      async
    />
  <!-- <ConfirmCookies v-if="time2load" /> -->
  </span>
</template>
