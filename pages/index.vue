<template>
  <div class="bg-base-300 w-full h-full flex flex-col">
    <NavBar />
    <div class="content flex justify-center m-auto h-full overflow-auto">
      <div class="mockup-window border border-base-200 bg-base-400 h-fit mx-4 md:mx-0 shadow">
        <div class="hero bg-base-200 h-full">
          <div class="hero-content flex-col lg:flex-row">
            <img src="../static/M1nx.gif" class="w-full max-w-xs rounded-lg p-5 rounded-full"  alt="profile"/>
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
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default {
  name: 'IndexPage',
  components: { NavBar, Footer }
}
console.log('Made with ❤️ and vue by M1nx 2022')
</script>

<style>
  #__layout {
    height: 100vh;
  }
</style>
