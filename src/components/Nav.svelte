<script>
  export let segment
  export let value = false

  function toggleMobileNav () {
    value = !value
  }
</script>

<nav class="flex items-center flex-wrap p-4 fixed w-full bg-white z-10 shadow-md">
  <div class="block mr-2 lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded" on:click={toggleMobileNav}>
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="flex items-center flex-shrink-0 ml-2 mr-6">
    <span class="font-semibold text-xl tracking-tight">James Vansteenkiste</span>
  </div>
  
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" class:hidden="{value === false}" on:click="{ () => value = false }">
    <div class="text-sm lg:flex-grow">
      <a 
        aria-current='{segment === undefined ? "page" : undefined}'
        class="block mt-4 mr-4 lg:inline-block lg:mt-0"
        rel="prefetch"
        href='.'>
        home</a>
      <a
        aria-current='{segment === "about" ? "page" : undefined}'
        class="block mt-4 lg:inline-block lg:mt-0"
        href='about'>
        about
      </a>
    </div>
  </div>
</nav>
