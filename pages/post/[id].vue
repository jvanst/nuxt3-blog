<template>
  <div class="relative py-8 bg-white overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
      <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
        <svg
          class="absolute top-12 left-full transform translate-x-32"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
        </svg>
        <svg
          class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
        </svg>
        <svg
          class="absolute bottom-12 left-full transform translate-x-32"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="d3eb07ae-5182-43e6-857d-35c643af9034"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
        </svg>
      </div>
    </div>
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <NuxtLink to="/" class="font-medium text-indigo-600 hover:text-indigo-500">
          <ArrowLeftIcon class="inline-block w-4 h-4 mr-1" />Back to article list
        </NuxtLink>
        <div class="mt-8 flex space-x-1 text-sm text-gray-500">
          <time :datetime="post.datetime">{{ post.date }}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{{ post.readingTime }} read</span>
        </div>
        <h1 class="mt-2">
          <span
            class="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >{{ post.title }}</span>
        </h1>
        <p class="mt-6 text-xl text-gray-500 leading-8">{{ post.description }}</p>
        <img class="my-6 h-96 w-full object-cover rounded" :src="post.imageUrl" alt="" />
      </div>
      <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto" v-html="post.content"></div>
      <ProfileCard></ProfileCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowLeftIcon } from '@heroicons/vue/solid'

const route = useRoute()

// Get post
let { data: post } = await useFetch<Post>(`/api/post?id=${route.params.id}`)

useMeta({
  title: post.value.title,
  meta: [
    { name: 'description', content: post.value.description }
  ]
})
</script>