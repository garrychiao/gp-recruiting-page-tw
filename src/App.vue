<template>
  <div id="app">
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="{span: 19, offset: 3}" :xl="{span: 18, offset: 3}">
        <Navbar></Navbar>
      </el-col>
      <el-col :md="4" :xl="3" :offset="3" class="hidden-sm-and-down">
        <Sidebar></Sidebar>
      </el-col>
      <el-col :xs="24" :sm="24" :md="14" :xl="12">
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
  margin-top: -7.5px;
}

</style>
