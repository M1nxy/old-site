<template>
  <div class="basis-1/1 grow lg:basis-1/3 shadow bg-base-100 rounded-lg p-10 flex flex-row flex-wrap-reverse justify-center">
    <div class="flex flex-col grow test w-4/5">
      <h2 id="work" class="text-3xl font-bold text-current">{{ name }}</h2>
      <p class="section-paragraph">{{ description }}</p>
      <div class="w-full basis-1/1 grow lg:basis-1/3 flex flex-row flex-wrap gap-1 content-end">
        <div class="badge badge-outline badge-lg rounded" v-for="tag in tags" :key="tag">{{ tag }}</div>
      </div>
    </div>
    <div class="avatar p-2">
      <div class="rounded-full w-20 h-20">
        <img :src=imageURL() alt="creator profile">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatorCard",
  props: ['name', 'description', 'tags', 'image'],
  methods: {
    imageURL ()  {
      return require(`~/static/creators/images/${this.image}`);
    }
  }
}
</script>

<style scoped>
</style>
