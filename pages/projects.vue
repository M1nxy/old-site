<template>
  <div class="bg-base-300 h-full w-full flex flex-col">
    <NavBar />
    <div class="content flex justify-center items-center h-full overflow-auto">
      <div class="container justify-between m-auto px-8 md:px-14 lg:px-24 w-full">
        <h2 class="text-5xl font-bold py-6">Projects</h2>
        <div class="flex gap-6 flex-wrap pb-4">
          <ProjectCard
            month="Oct 2022"
            title="TS-Lib-Create"
            description="A tool to create Typescript libraries faster."
            link="https://github.com/M1nxy/ts-lib-create"
          />
          <ProjectCard
            month="Oct 2022"
            title="Selene"
            description="A class based Command / Event handler for discord.js."
            link="https://github.com/M1nxy/Selene"
          />
          <ProjectCard
            month="Oct 2022"
            title="Gib"
            description="A nodejs project manager with license generation, dependency management and other QOL tools."
            link="https://github.com/M1nxy/gib"
          />
          <ProjectCard
            month="Oct 2022"
            title="Helios"
            description="A successor to ScamBeGone with extended multimedia functionality and other features."
            link="https://github.com/M1nxy/helios"
         />
          <ProjectCard
            month="Jul 2022"
            title="Repository Aggregator"
            description="A small tool for aggregating data from multiple iOS Tweak repository databases."
            link="https://github.com/M1nxy/repository-aggregator"
         />
          <ProjectCard
            month="Feb 2022"
            title="ScamBeGone"
            description="A multipurpose discord bot with scam avoidance and other moderation tools."
            link="https://github.com/M1nxy/scambegone"
         />
          <ProjectCard
            month="Feb 2022"
            title="String Flagger"
            description="An npm package to check if a string contains any string or domain from a filter array."
            link="https://github.com/M1nxy/string-flagger"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar"
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
export default {
  name: "projects",
  components: {ProjectCard, NavBar, Footer }
}
</script>

<style>
  #__layout {
    height: 100vh;
  }
</style>
