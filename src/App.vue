<template>
  <div id="app">
    <el-row :gutter="15">
      <el-col :sm="18" :offset="3">
        <Navbar></Navbar>
      </el-col>
      <el-col :sm="4" :offset="3">
        <Sidebar></Sidebar>
      </el-col>
      <el-col :sm="14">
        <MainContent></MainContent>
      </el-col>
    </el-row>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import MainContent from './views/MainContent.vue'
import Navbar from './views/Navbar.vue'
import Sidebar from './views/Sidebar.vue'

export default {
  name: 'app',
  components: {
    MainContent,
    Sidebar,
    Navbar,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
