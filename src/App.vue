<template>
  <div id="app">
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="{span: 18, offset: 3}">
        <Navbar></Navbar>
      </el-col>
      <el-col :md="4" :offset="3" class="hidden-sm-and-down">
        <Sidebar></Sidebar>
      </el-col>
      <el-col :md="12">
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
}
</style>
