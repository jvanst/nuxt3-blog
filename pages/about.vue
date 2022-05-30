<template>
  <div>
    <div class="overflow-hidden">
      <div class="relative max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/"
          class="font-medium text-indigo-600 dark:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400"
        >
          <ArrowLeftIcon class="inline-block w-4 h-4 mr-1" />Back to my Blog
        </NuxtLink>
        <h3
          class="mt-3 text-3xl leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl"
        >
          Hello 👋, I'm James
        </h3>
        <div class="mt-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div class="hidden lg:block relative lg:row-start-1 lg:col-start-3">
            <svg
              class="absolute top-0 right-0 -mt-20 -mr-20"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200 dark:text-gray-800"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div
              class="relative text-base text-center mx-auto max-w-prose lg:max-w-none"
            >
              <div class="hidden lg:block">
                <img
                  class="rounded-lg shadow-lg object-cover object-center"
                  src="/images/headshot.webp"
                  alt=""
                />
              </div>
              <a
                href="./james-vansteenkiste-resume.pdf"
                class="mt-5 inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 shadow-sm text-base font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Download Resume
                <DownloadIcon class="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
          <div
            class="mt-8 lg:mt-0 prose dark:prose-invert col-span-2 space-y-3"
          >
            <p>
              I'm a software developer located in Southwestern Ontario, Canada.
              My passion is building modern, highly scalable web applications
              with Typescript using
              <a href="https://nestjs.com" rel="nofollow">NestJS</a>, and
              <a href="https://nuxtjs.org" rel="nofollow">NuxtJS</a>.
            </p>
            <p>
              From a young age, my parents knew I would have a future with
              technology. This idea probably formed from the many instances they
              had to ground me after finding me on the computer past curfew.
            </p>
            <p>
              While in elementary school I was fortunate to have access to
              computers at home, as well as the support of my parents to build
              my own computer. My passion for software development was first
              sparked by the world of video games, but quickly transformed into
              excitement around hosting and managing dedicated linux game
              servers. After understanding the difficulties of managing servers
              from the command line I began my journey into web development by
              creating tools that would help friends manage server instances
              from webpages.
            </p>
            <p>
              In junior year of high school, I realized that software
              development was the career path I wanted to pursue. With an
              interest in web development and server administration I was keen
              on studying computer science at university. A background in
              computer science has primed me with tools and the knowledge to
              build web applications that exceed expectations.
            </p>
            <p>
              Now working in industry, this passion remains. I constantly push
              myself to understand new technologies to deliver the best
              experiences possible. There is certainly a mountain more to learn,
              and more problems to solve; knowing this is what keeps me
              enthusiastic and drives me everyday.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DownloadIcon, ArrowLeftIcon } from "@heroicons/vue/solid";

useHead({
  title: "About",
});
</script>
