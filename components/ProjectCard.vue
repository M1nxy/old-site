<template>
  <div class="w-full basis-1/1 grow lg:basis-1/3 shadow bg-base-100 rounded-lg p-10 flex flex-col justify-between">
    <h2 class="font-sm font-bold text-highlight">{{ month }}</h2>
    <h2 id="work" class="text-3xl font-bold text-current">{{ title }}</h2>
    <p class="section-paragraph">{{ description }}</p>
    <br>
    <a :href="link"  target="_blank" class="text-gray-400 hover:text-selected-text after:content-['_↗']">Visit the project</a>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: ['month', 'title', 'description', 'link'],
}
</script>

<style scoped>

</style>
