<template>
  <div class="relative overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
      <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
        <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384"
          fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20"
              patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200 dark:text-gray-800" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
        </svg>
        <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none"
          viewBox="0 0 404 384">
          <defs>
            <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20"
              patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200 dark:text-gray-800" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
        </svg>
      </div>
    </div>
    <img class="h-52 lg:h-96 w-full lg:w-3/4 xl:w-3/5 lg:rounded lg:m-auto lg:mt-4 object-cover" :src="post.mainImage"
      alt="" />
    <div class="relative mt-4 px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <NuxtLink to="/"
          class="font-medium text-indigo-600 dark:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400">
          <ArrowLeftIcon class="inline-block w-4 h-4 mr-1 my-6" />Back to article list
        </NuxtLink>
        <h1 class="mt-2">
          <span
            class="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">{{
                post.title
            }}</span>
        </h1>
        <p class="mt-6 text-xl text-gray-500 dark:text-gray-400 leading-8">{{ post.summary }}</p>

        <div class="mt-2">
          <span v-for="category in post.categories" :key="category"
              class="inline-flex items-center px-2.5 py-0.5 mr-2 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-00 dark:text-indigo-100">
              {{ category }} </span>
        </div>
 
        <div class="mt-8 flex-shrink-0 group block">
          <div class="flex items-center">
            <div>
              <img class="inline-block h-14 w-14 rounded-full" src="/images/headshot-2.webp" alt="" />
            </div>
            <div class="ml-3">
              <p class="ml-2 text-md font-medium text-gray-500 dark:text-gray-400">
                James Vansteenkiste
              </p>
              <p class="ml-2 text-md font-medium text-gray-500 dark:text-gray-400">
              <div class="mt-2 flex space-x-1 text-sm">
                <time :datetime="post.publishedAt">{{ dayjs(post.publishedAt).format('dddd, MMMM D') }}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{{ post.readtime }} read</span>
              </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-14 prose dark:prose-invert prose-indigo prose-lg mx-auto">
        <SanityBlocks :blocks="post.body" />
      </div>

      <ProfileCard></ProfileCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { SanityBlocks } from 'sanity-blocks-vue-component'
import { ArrowLeftIcon } from '@heroicons/vue/solid'

const route = useRoute()

const { data } = await useFetch(`https://942rgs6c.apicdn.sanity.io/v2022-04-08/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%20%26%26%20slug.current%20%3D%3D%20%24slug%5D%5B0%5D%7B%0A%20%20...%2C%22categories%22%3A%20categories%5B%5D-%3Etitle%2C%0A%20%20%22mainImage%22%3A%20mainImage.asset-%3Eurl%0A%7D&%24slug=%22${route.params.id}%22`);
const post = data.value.result

useHead({
  title: post.title,
  meta: [
    { name: 'description', content: post.summary }
  ]
})
</script>