<template>
  <div class="max-w-3xl mx-auto py-6 sm:py-14">
    <div class="border p-8 rounded dark:border-gray-700">
      <p
        class="mt-2 text-xl leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl"
      >
        Welcome 👋, I'm James
      </p>

      <div class="flex">
        <p class="mt-3 mr-2 prose dark:prose-invert sm:mt-4">
          Thanks for visiting my blog! I'm a software developer located in
          Southwestern Ontario, Canada. My passion is building modern, highly
          scalable web applications with Typescript using
          <a href="https://nestjs.com" rel="nofollow">NestJS</a>, and
          <a href="https://nuxtjs.org" rel="nofollow">NuxtJS</a>.
        </p>
        <img
          class="w-28 hidden md:block rounded-lg shadow-lg object-cover object-center"
          src="/images/headshot-2.webp"
          alt=""
        />
      </div>

      <div class="w-full text-center mt-4">
        <NuxtLink
          to="/about"
          class="font-medium text-indigo-600 dark:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400"
        >
          View resume
          <ArrowRightIcon class="inline-block w-4 h-4 ml-1" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowRightIcon } from "@heroicons/vue/solid";
</script>
