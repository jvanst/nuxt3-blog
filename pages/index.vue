<template>
  <div class="px-4 sm:px-6 lg:pb-28 lg:px-8">
    <ProfileCard />

    <div class="relative pt-8 pb-20">
      <div class="absolute inset-0">
        <div class="h-1/3 sm:h-2/3" />
      </div>
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h2
            class="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl"
          >
            My Blog
          </h2>
          <p
            class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4"
          >
            Who knows when I will post, or what I will post about!
          </p>
        </div>

        <div
          class="mt-12 mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-none"
        >
          <NuxtLink
            v-for="post in posts"
            :to="`/post/${post.slug.current}`"
            :key="post.title"
            class="flex flex-col dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div class="flex-shrink-0">
              <img
                class="h-48 w-full object-cover"
                :src="post.mainImage"
                alt=""
              />
            </div>
            <div class="flex-1 p-6 flex flex-col justify-between">
              <div class="flex-1">
                <div class="block">
                  <div
                    class="flex space-x-1 text-sm text-gray-500 dark:text-gray-400"
                  >
                    <time :datetime="post.publishedAt">{{
                      dayjs(post.publishedAt).format("dddd, MMMM D")
                    }}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{{ post.readtime }} read</span>
                  </div>
                  <p
                    class="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-2"
                  >
                    {{ post.title }}
                  </p>
                  <p class="mt-3 text-base text-gray-500 dark:text-gray-400">
                    {{ post.summary }}
                  </p>
                </div>
              </div>
              <div class="mt-2">
                <span
                  v-for="category in post.categories"
                  :key="category"
                  class="inline-flex items-center px-2.5 py-0.5 mr-2 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-00 dark:text-indigo-100"
                >
                  {{ category }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProfileCard from "~~/components/ProfileCard.vue";
import dayjs from "dayjs";

// Would like to use the sanity client but currently blocked by a nitro build problem
//
// https://github.com/nuxt/framework/issues/2724
//
// import sanityClient from '@sanity/client';
//
// const client = sanityClient({
//   projectId: '942rgs6c',
//   dataset: 'production',
//   apiVersion: '2022-04-14',
//   useCdn: true,
// })

// const posts = await client.fetch(`*[_type == "post"]{
//   slug,
//   title,
//   publishedAt,
//   readtime,
//   summary,
//   "mainImage": mainImage.asset->url
// }`, {})

const { data } = await useFetch(
  "https://942rgs6c.apicdn.sanity.io/v2022-04-08/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7B%0A%20%20slug%2C%0A%20%20title%2C%0A%20%20publishedAt%2C%0A%20%20readtime%2C%0A%20%20summary%2C%22categories%22%3A%20categories%5B%5D-%3Etitle%2C%0A%20%20%22mainImage%22%3A%20mainImage.asset-%3Eurl%0A%7D"
);
const posts = data.value.result;

useHead({
  title: `Blog - James Vansteenkiste`,
});
</script>
