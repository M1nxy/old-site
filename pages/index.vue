<template>
  <div class="bg-base-300 h-full w-full flex flex-col">
    <NavBar></NavBar>
    <div class="content flex justify-center items-center h-full overflow-auto">
      <div class="mockup-window border border-current bg-base-400 h-fit mx-4 md:mx-0 shadow-2xl">
        <div class="hero bg-base-200 h-full">
          <div class="hero-content flex-col lg:flex-row">
            <img src="../static/m1nx.jpg" class="max-w-xs rounded-lg p-5 rounded-full" />
            <div>
              <h1 class="text-5xl font-bold">M1nx</h1>
              <p class="py-6">I am a fullstack developer with experience using multiple frontend and backend web frameworks.</p>
              <a class="btn btn-ghost bg-base-300 text-current" href="./knowledge">Knowledge</a>
              <a class="btn btn-ghost bg-base-300 text-current" href="./projects">Projects</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer class="w-full text-center text-l">© M1nx 2022</Footer>
  </div>
</template>
<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
  #__layout {
    height: 100vh;
  }
</style>
