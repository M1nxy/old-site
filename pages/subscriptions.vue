<template>
  <div class="bg-base-300 h-full w-full flex flex-col">
    <NavBar />
    <div class="content flex justify-center items-center h-full overflow-auto">
      <div class="container justify-between m-auto px-8 md:px-14 lg:px-24 w-full">
        <div class="content flex flex-wrap justify-between items-center h-full overflow-auto p-0.5">
          <h2 class="text-5xl font-bold py-6">Subscriptions</h2>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost rounded-btn">Dropdown</label>
            <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </div>
        <div class="flex gap-6 flex-wrap pb-4">
          <CreatorCard :name=creator.name :description=creator.description :tags=creator.tags :image=creator.image v-for="creator in creators" :key="creator.name"/>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "subscriptions",
  data() {
    return {
      creators: require(`~/static/creators/data.json`)
    }
  }
}



</script>

<style>
  #__layout {
    height: 100vh;
  }
</style>
