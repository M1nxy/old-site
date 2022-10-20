<template>
  <div class="bg-base-300 h-full w-full flex flex-col">
    <NavBar />
    <div class="content flex justify-center items-center h-full overflow-auto">
      <div class="container justify-between m-auto px-8 md:px-14 lg:px-24 w-full">
        <h2 class="text-5xl font-bold pb-10 py-2">My Knowledge</h2>
        <div class="flex gap-6 flex-wrap">
          <KnowledgeCard title="Language" language="HTML" />
          <KnowledgeCard title="Language" language="JavaScript" />
          <KnowledgeCard title="Language" language="TypeScript" />
          <KnowledgeCard title="Language" language="Python" />
          <KnowledgeCard title="Framework" language="NodeJS" />
          <KnowledgeCard title="Framework" language="Svelte" />
          <KnowledgeCard title="Framework" language="Vue" />
          <KnowledgeCard title="Database" language="MongoDB" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar"
import Footer from "../components/Footer";
import KnowledgeCard from "../components/KnowledgeCard";
export default {
  name: "knowledge",
  components: {KnowledgeCard, NavBar, Footer }
}
</script>

<style>
  #__layout {
    height: 100vh;
  }
</style>
