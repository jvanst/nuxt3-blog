<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<Nav {segment}/>

<main class="pt-16">
  <slot></slot>
</main>