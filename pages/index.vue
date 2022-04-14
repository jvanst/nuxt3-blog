<template>
  <div class="px-4 sm:px-6 lg:pb-28 lg:px-8">
    <div class="bg-white">
      <ProfileCard />
    </div>

    <div class="relative pt-8 pb-20">
      <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">My Blog</h2>
          <p
            class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
          >Who knows when I will post, or what I will post about!</p>
        </div>

        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <NuxtLink
            v-for="post in posts"
            :to="`/post/${post.slug.current}`"
            :key="post.title"
            class="flex flex-col rounded-lg shadow-lg overflow-hidden"
          >
            <div class="flex-shrink-0">
              <img
                class="h-48 w-full object-cover"
                :src="post.mainImage"
                alt=""
              />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <div class="block">
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time :datetime="post.publishedAt">{{ post.publishedAt }}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{{ post.readtime }} read</span>
                  </div>
                  <p class="text-xl font-semibold text-gray-900 mt-2">{{ post.title }}</p>
                  <p class="mt-3 text-base text-gray-500">
                    {{ post.summary }}
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProfileCard from '~~/components/ProfileCard.vue';

const { data } = await useFetch("https://942rgs6c.apicdn.sanity.io/v2022-04-08/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7B%0A%20%20slug%2C%0A%20%20title%2C%0A%20%20publishedAt%2C%0A%20%20readtime%2C%0A%20%20summary%2C%0A%20%20%22mainImage%22%3A%20mainImage.asset-%3Eurl%0A%7D");
const posts = data.value.result

useMeta({
  title: `Blog - James Vansteenkiste`
})
</script>