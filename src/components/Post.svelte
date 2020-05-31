<script>
  export let post
</script>

<div class="rounded overflow-hidden shadow">
  <a rel='prefetch' href='blog/post/{post.slug}'>
    <img class="block h-32 w-full object-cover" src="{ post.img }" alt="{ post.title }">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{ post.title }</div>
      <p class="text-gray-700 text-base">
        { post.summary }
      </p>
    </div>
    <div class="px-6 py-4">
      {#each post.categories as category}
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{ category }</span>
      {/each}
    </div>
  </a>
</div>