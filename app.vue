<template>
  <Html lang="en-US" class="bg-white dark:bg-gray-900">
    <NuxtPage />
    <Footer></Footer>
  </Html>
</template>

<script setup>
import Footer from "~/components/Footer.vue";

useHead({
  titleTemplate: "%s · James Vansteenkiste",
  description:
    "I'm a software developer located in Southwestern Ontario, Canada. My passion is building beautiful, highly scalable web applications",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
});
</script>
