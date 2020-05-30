<script>
  export let segment
</script>

<nav class="flex items-center flex-wrap p-4 fixed w-full bg-white z-10 shadow-md">
    <span class="hidden font-semibold text-xl tracking-tight md:hidden">James Vansteenkiste</span>
    <div class="text-sm flex-grow">
      <a 
        aria-current='{segment === undefined ? "page" : undefined}'
        class="block mr-4 inline-block"
        rel="prefetch"
        href='.'>
        Home</a>
      <a
        aria-current='{segment === "about" ? "page" : undefined}'
        class="block inline-block"
        href='about'>
        About
      </a>
    </div>
</nav>
