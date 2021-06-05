<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>James Vansteenkiste</title>
  <meta name="Description" content="Learn more about me. This is my resume in webpage format.">
</svelte:head>

<div class="relative" style="height: 500px">
  <img src="./computer_background.webp" class="w-full h-full object-cover absolute z-0" alt="">
  <div class="relative h-full flex items-end pb-10">
    <div class="flex-1 text-center">
      <h1 class="text-4xl text-white font-medium">James Vansteenkiste</h1>
      <h2 class="text-2xl text-white">Software Developer</h2>
    </div>
  </div>
</div>

<section class="py-10">
  <div class="text-center">
    <h1 class="text-3xl font-medium">About</h1>
  </div>
  <div class="container mx-auto max-w-3xl px-4 my-8">
    <p class="pb-3">
      From a young age, my parents knew I would have a future with technology.
      This idea probably formed from the many instances they had to ground me after finding me on the computer past curfew.
    </p>
     <p class="pb-3">
      While in elementary school I was fortunate to have access to computers at home, 
      as well as the support of my parents to build my own computer. 
      My passion for software development was first sparked by the world of video games, 
      but quickly transformed into excitement around hosting and managing dedicated linux game servers. 
      After understanding the difficulties of managing servers from the command line I began my journey into web development
      by creating tools that would help friends manage server instances from webpages.
    </p>
    <p class="pb-3">
      In junior year of high school, I realized that software development was the career path I wanted to pursue.
      With an interest in web development and server administration I was keen on studying computer science at university.
      A background in computer science has primed me with tools and the knowledge to build web applications that exceed expectations.
    </p>
    <p class="pb-3">
      Now working in industry, this passion remains. 
      I constantly push myself to understand new technologies to deliver the best experiences possible. 
      There is certainly a mountain more to learn, and more problems to solve; 
      knowing this is what keeps me enthusiastic and drives me everyday.
    </p>
    <div class="flex flex-wrap mt-3">
      <div class="w-full sm:w-1/2 text-center">
        <img src="./profile.jpeg" class="w-9/12 mx-auto my-8 rounded-lg" alt="">
        <a href="./resume.pdf" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" download>
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>Download Resume</span>
        </a>
      </div>
      <div class="w-full sm:w-1/2">
        <ul class="mt-6 mx-5">
          <li>
            <div class="flex">
              <div class="flex-shrink mr-4 mt-2">
                <img src="./icons/vuejs.svg" class="w-8" alt="vuejs">
              </div>
              <div class="flex-none">
                <div class="text-lg">Vue.js, Svelte & React</div>
                <span class="text-sm text-gray-700">Frontend Technology</span>
              </div>
            </div>
          </li>
          <li>
            <div class="flex mt-3">
              <div class="flex-shrink mr-4 mt-2">
                <img src="./icons/nodejs.svg" class="w-8" alt="vuejs">
              </div>
              <div class="flex-none">
                <div class="text-lg">NodeJs & PHP</div>
                <span class="text-sm text-gray-700">Backend Technology</span>
              </div>
            </div>
          </li>
          <li>
            <div class="flex mt-3">
              <div class="flex-shrink mr-4 mt-2">
                <img src="./icons/api.svg" class="w-8" alt="vuejs">
              </div>
              <div class="flex-none">
                <div class="text-lg">RESTful JSON</div>
                <span class="text-sm text-gray-700">API Design</span>
              </div>
            </div>
          </li>
          <li>
            <div class="flex mt-3">
              <div class="flex-shrink mr-4 mt-2">
                <img src="./icons/database.svg" class="w-8" alt="vuejs">
              </div>
              <div class="flex-none">
                <div class="text-lg">MySQL</div>
                <span class="text-sm text-gray-700">Database</span>
              </div>
            </div>
          </li>
          <li>
            <div class="flex mt-3">
              <div class="flex-shrink mr-4 mt-2">
                <img src="./icons/kubernetes.svg" class="w-8" alt="vuejs">
              </div>
              <div class="flex-none">
                <div class="text-lg">Kubernetes & Docker</div>
                <span class="text-sm text-gray-700">Devops</span>
              </div>
            </div>
          </li>
          <li>
            <div class="flex mt-3">
              <div class="flex-shrink mr-4 mt-2">
                <img src="./icons/git.svg" class="w-8" alt="vuejs">
              </div>
              <div class="flex-none">
                <div class="text-lg">Git & Github</div>
                <span class="text-sm text-gray-700">Version control</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="bg-gray-100 py-10">
  <div class="text-center">
    <h1 class="text-3xl font-medium">Experience</h1>
  </div>
  <div class="container mx-auto max-w-3xl px-4 my-8">
    <ul>
      <li>
        
      </li>
      <li class="flex">
        <div class="flex-initial pt-7 mr-3">
          <img src="/images/raceroster.jpg" alt="RaceRoster logo" class="rounded" width="50px">
        </div>
        <div class="flex-1">
          <span class="text-xs text-gray-800 uppercase">March 2020 - Present</span>
          <h2 class="text-2xl">RaceRoster</h2>
          <h3 class="text-lg text-gray-800">Software Developer</h3>
          <p class="mt-2">
            At RaceRoster, I spend time where needed to refactor and push the code base into more modern technologies and design patterns. 
            I'm particularly excited to help improve the developer experience in newer projects by containerizing applications, 
            improving continuous integration, and automate testing.
            <br><br>
            Common tools include React for the front-end experience, and PHP for backend with increasing shift to Node.js serving RESTful JSON.
          </p>
          <span class="border-vertical"></span>
        </div>
      </li>
      <li class="flex">
        <div class="flex-initial pt-7 mr-3">
          <img src="/images/sport-travel.png" alt="Sport-Travel logo" class="rounded" width="50px">
        </div>
        <div class="flex-1">
          <span class="text-xs text-gray-800 uppercase">NOVEMBER 2018 - MARCH 2020</span>
          <h2 class="text-2xl">Sport-Travel</h2>
          <h3 class="text-lg text-gray-800">Lead Software Developer</h3>
          <p class="mt-2">
            I led the software department at Sport-Travel where I pushed the team to develop scalable lightweight, progressive web applications. 
            I approached leadership by encouraging idea sharing and regular employee participation. While also trying to lead by going above and beyond.
            <br><br>
            Our stack was built on Vue.js, Node.js deployed with CircleCI to Kubernetes on Google Cloud. 
            Our data was stored relationally in MySQL with additional request caching and idempotency keys managed by redis.
          </p>
          <span class="border-vertical"></span>
        </div>
      </li>
      <li class="flex">
        <div class="flex-initial pt-7 mr-3">
          <img src="/images/sport-travel.png" alt="Sport-Travel logo" class="rounded" width="50px">
        </div>
        <div class="flex-1">
          <span class="text-xs text-gray-800 uppercase">MAY 2017 - NOVEMBER 2018</span>
          <h2 class="text-2xl">Sport-Travel</h2>
          <h3 class="text-lg text-gray-800">Software Developer</h3>
          <p class="mt-2">
            Hired alongside two developers to help shape the future at Sport-Travel, and the companies endeavour into a technology first business approach. 
            I adopted and owned the legacy codebase and the transition into more sustainable development patterns and technologies. 
          </p>
          <span class="border-vertical"></span>
        </div>
      </li>
      <li class="flex">
        <div class="flex-initial pt-7 mr-3">
          <img src="/images/duketoyco.jpeg" alt="DukeToyCo logo" class="rounded" width="50px">
        </div>
        <div class="flex-1">
          <span class="text-xs text-gray-800 uppercase">2015 - 2016</span>
          <h2 class="text-2xl">DukeToyCo</h2>
          <h3 class="text-lg text-gray-800">Web Developer Consultant</h3>
          <p class="mt-2">
            Responsible for web design, CMS, server administration, and analytics www.duketoyco.com is a toy company based in Toronto Ontario.
          </p>
          <span class="border-vertical"></span>
        </div>
      </li>
      <li class="flex">
        <div class="flex-initial pt-7 mr-3">
          <img src="/images/uwo.jpeg" alt="University of Western Ontario logo" class="rounded" width="50px">
        </div>
        <div class="flex-1">
          <span class="text-xs text-gray-800 uppercase">2013 - 2017</span>
          <h2 class="text-2xl">University of Western Ontario</h2>
          <h3 class="text-lg text-gray-800">Studied Computer Science</h3>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="py-10">
  <div class="text-center">
    <h1 class="text-3xl font-medium">Portfolio</h1>
  </div>
  <div class="container mx-auto max-w-3xl px-4 my-8">
    <div class="grid grid-cols-1 gap-4 pb-3">
      <div class="flex relative shadow-xs bg-gray-50 p-4">
        <div class="flex-initial mr-3">
          <img src="/images/radiantsgg.svg" alt="Radiants.gg logo" class="rounded" width="50px">
        </div>
        <div class="flex-1">
          <span class="text-lg font-bold pb-2">Radiants.gg</span>
          <p class="text-sm pb-10">
            An A.I. driven insight platform for esport players. I am building a product that doesn't just post raw data with no applicability for players but allows players to delve deeper. We plan to provide analysis and insight to users to help increase their rank, adapt to the latest meta changes, and build dynamic team composition.
          </p>
        </div>
        <p class="absolute bottom-0 w-full text-right pb-4 pr-8">
          <a href="https://radiants.gg" target="_blank" rel="noopener" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-sm py-1 px-3 rounded inline-flex items-center">
            <span>View</span>
            <img src="./icons/open-in-new.svg" class="w-4 ml-2" alt="Open in new tab">
          </a>
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="relative shadow-xs p-4">
        <span class="text-lg font-bold pb-2">jamesvan-ca</span>
        <p class="text-sm pb-10">
          A server-side rendered Svelte/Sapper app deployed to Google App Engine. 
        </p>
        <p class="absolute bottom-0 w-full text-right pb-4 pr-8">
          <a href="https://github.com/jvanst/jamesvan-ca" target="_blank" rel="noopener" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-sm py-1 px-3 rounded inline-flex items-center">
            <span>Source</span>
            <img src="./icons/open-in-new.svg" class="w-4 ml-2" alt="Open in new tab">
          </a>
        </p>
      </div>
      <div class="relative shadow-xs p-4">
        <span class="text-lg font-bold pb-2">vue-vuetify-ssr</span>
        <p class="text-sm pb-10">
          A template for building server-side rendered Vue apps with the Vuetify component library.
        </p>
        <p class="absolute bottom-0 w-full text-right pb-4 pr-8">
          <a href="https://github.com/jvanst/vue-vuetify-ssr" target="_blank" rel="noopener" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-sm py-1 px-3 rounded inline-flex items-center">
            <span>Source</span>
            <img src="./icons/open-in-new.svg" class="w-4 ml-2" alt="Open in new tab">
          </a>
        </p>
      </div>
      <div class="relative shadow-xs p-4">
        <span class="text-lg font-bold pb-2">battalion-dedicated-server</span>
        <p class="text-sm pb-10">
          A Battalion1944 linux server installation and update command line tool written in python.
        </p>
        <p class="absolute bottom-0 w-full text-right pb-4 pr-8">
          <a href="https://github.com/jvanst/battalion-dedicated-server" target="_blank" rel="noopener" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-sm py-1 px-3 rounded inline-flex items-center">
            <span>Source</span>
            <img src="./icons/open-in-new.svg" class="w-4 ml-2" alt="Open in new tab">
          </a>
        </p>
      </div>
      <div class="relative shadow-xs p-4">
        <span class="text-lg font-bold pb-2">banksole</span>
        <p class="text-sm pb-10">
          A mock banking console application for Linux.
        </p>
        <p class="absolute bottom-0 w-full text-right pb-4 pr-8">
          <a href="https://github.com/jvanst/banksole" target="_blank" rel="noopener" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-sm py-1 px-3 rounded inline-flex items-center">
            <span>Source</span>
            <img src="./icons/open-in-new.svg" class="w-4 ml-2" alt="Open in new tab">
          </a>
        </p>
      </div>
    </div>
  </div>
</section>

<section class="bg-gray-800 py-10">
  <div class="text-center">
    <h1 class="text-3xl font-medium text-white">Even more</h1>
  </div>
  <div class="container mx-auto max-w-4xl px-4 my-8">
    <div class="grid md:grid-cols-3 grid-cols-1 gap-4 m-auto text-white text-lg">
      <div class="text-center">
        <a href="https://ca.linkedin.com/in/jamesvansteenkiste"><img src="./icons/linkedin.svg" class="w-6 mr-2 pb-1 inline-block" alt="">Connect with me</a>
      </div>
      <div class="text-center">
        <a href="https://github.com/jvanst"><img src="./icons/github.svg" class="w-6 mr-2 pb-1 inline-block" alt="">Explore my code</a>
      </div>
      <div class="text-center">
        <a href="https://twitter.com/jrvansteenkiste"><img src="./icons/twitter.svg" class="w-6 mr-2 pb-1 inline-block" alt="">Tweet at me</a>
      </div>
    </div>
  </div>
</section>

<style>
.border-vertical {
  border-left: solid medium #000000;
  display: block;
  margin: auto;
  width: 0px;
  height: 2px;
  padding-bottom: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
