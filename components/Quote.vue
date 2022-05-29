<template>
  <figure>
    <blockquote :cite="url">{{ text }}</blockquote>
    <figcaption v-if="author" class="italic">
      {{ author }} - {{ url }}
    </figcaption>
  </figure>
</template>

<script lang="ts" setup>
const props = defineProps({
  author: String,
  text: String,
  url: String,
});
</script>
