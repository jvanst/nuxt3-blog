<template>
  <img :src="source" alt="" lazy />
</template>

<script lang="ts" setup>
import imageUrlBuilder from "@sanity/image-url";

interface Props {
  asset: {
    _ref: string;
    _type: string;
  };
  width?: number;
}

const { asset, width = 960 } = defineProps<Props>();

const builder = imageUrlBuilder({
  clientConfig: {
    projectId: "942rgs6c",
    dataset: "production",
  },
});

// https://www.sanity.io/docs/image-url
const source = builder
  .image(asset)
  .auto("format")
  .width(width)
  .fit("crop")
  .quality(75)
  .url();
</script>
