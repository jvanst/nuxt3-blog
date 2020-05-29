<script context="module">
  export function preload({ params, query }) {
		return this.fetch('index.json').then(r => r.json()).then(posts => {
      return { posts }
    });
	}
</script>

<script>
	import Post from '../components/Post.svelte'

	export let posts;
</script>

<svelte:head>
	<title>James Vansteenkiste</title>
  <meta name="Description" content="Follow my work, and my thoughts about web applications, frameworks and code.">
</svelte:head>

<div class="container mx-auto mt-6 max-w-3xl px-3">
  <h2 class="text-1xl my-6 ml-2 font-light">
    Recent Posts
  </h2>

	{#each posts as post}
		<Post {post}></Post>
	{/each}
</div>