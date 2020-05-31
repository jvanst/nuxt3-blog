<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/post/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="container mx-auto max-w-3xl">
  <div class="overflow-hidden">
    <img class="block rounded-b h-32 w-full object-cover bg-gray-200" src="{ post.img }" alt="{ post.title }">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{ post.title }</div>
      <p class="text-gray-700 text-base">
        {@html post.html}
      </p>
    </div>
  </div>
</div>
