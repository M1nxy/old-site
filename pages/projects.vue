<template>
  <div class="bg-base-300 h-full w-full flex flex-col">
    <NavBar></NavBar>
    <div class="content flex justify-center items-center h-full overflow-auto">
      <div class="container justify-between m-auto px-8 md:px-14 lg:px-24 w-full">
        <h2 class="text-5xl font-bold py-6">My Projects</h2>
        <div class="flex gap-6 flex-wrap pb-4">
          <div class="w-full basis-1/1 grow lg:basis-1/3 shadow-2xl bg-base-100 rounded-lg p-10 flex flex-col justify-between">
            <h2 class="font-sm font-bold text-highlight">Oct 2022</h2>
            <h2 id="work" class="text-3xl font-bold text-current">Gib</h2>
            <p class="section-paragraph">A nodejs project manager with license generation, dependency management and other QOL tools.</p>
            <br>
            <a href="https://github.com/M1nxy/gib" target="_blank" class="text-gray-400 hover:text-selected-text after:content-['_↗']">Visit the project</a>
          </div>
          <div class="w-full basis-1/1 grow lg:basis-1/3 shadow-2xl bg-base-100 rounded-lg p-10 flex flex-col justify-between">
            <h2 class="font-sm font-bold text-highlight">Oct 2022</h2>
            <h2 id="work" class="text-3xl font-bold text-current">Helios</h2>
            <p class="section-paragraph">A successor to ScamBeGone with extended multimedia functionality and other features.</p>
            <br>
            <a href="https://github.com/M1nxy/helios" target="_blank" class="text-gray-400 hover:text-selected-text after:content-['_↗']">Visit the project</a>
          </div>
          <div class="w-full basis-1/1 grow lg:basis-1/3 shadow-2xl bg-base-100 rounded-lg p-10 flex flex-col justify-between">
            <h2 class="font-sm font-bold text-highlight">Jul 2022</h2>
            <h2 id="work" class="text-3xl font-bold text-current">Repository Aggregator</h2>
            <p class="section-paragraph">A small tool for aggregating data from multiple iOS Tweak repository databases</p>
            <br>
            <a href="https://github.com/M1nxy/repository-aggregator" target="_blank" class="text-gray-400 hover:text-selected-text after:content-['_↗']">Visit the project</a>
          </div>
          <div class="w-full basis-1/1 grow lg:basis-1/3 shadow-2xl bg-base-100 rounded-lg p-10 flex flex-col justify-between">
            <h2 class="font-sm font-bold text-highlight">Feb 2022</h2>
            <h2 id="work" class="text-3xl font-bold text-current">ScamBeGone</h2>
            <p class="section-paragraph">A multipurpose discord bot with scam avoidance and other moderation tools.</p>
            <br>
            <a href="https://github.com/M1nxy/scambegone" target="_blank" class="text-gray-400 hover:text-selected-text after:content-['_↗']">Visit the project</a>
          </div>
          <div class="w-full basis-1/1 grow lg:basis-1/3 shadow-2xl bg-base-100 rounded-lg p-10 flex flex-col justify-between">
            <h2 class="font-sm font-bold text-highlight">Feb 2022</h2>
            <h2 id="work" class="text-3xl font-bold text-current">String Flagger</h2>
            <p class="section-paragraph">An npm package to check if a string contains any string or domain from a filter array.</p>
            <br>
            <a href="https://github.com/M1nxy/string-flagger" target="_blank" class="text-gray-400 hover:text-selected-text after:content-['_↗']">Visit the project</a>
          </div>

        </div>
      </div>
    </div>
    <Footer class="w-full text-center text-l">© M1nx 2022</Footer>
  </div>
</template>

<script>
export default {
  name: "projects"
}
</script>

<style>
  #__layout {
    height: 100vh;
  }
</style>
