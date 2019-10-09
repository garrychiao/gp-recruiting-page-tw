<template>
  <main id="app">
    <el-container>
      <el-header class="header">
        <Navbar></Navbar>
      </el-header>
      <!-- header -->
      <el-main>
        <el-row :gutter="15">
          <el-col :md="4" :xl="3" :offset="3" class="hidden-sm-and-down">
            <Sidebar></Sidebar>
          </el-col>
          <el-col :xs="24" :sm="24" :md="14" :xl="12">
            <MainContent></MainContent>
          </el-col>
        </el-row>
      </el-main>
      <!-- main -->
      <el-footer>Footer</el-footer>
      <!-- footer -->
    </el-container>
  </main>
</template>

<script>
import MainContent from "./views/MainContent.vue";
import Navbar from "./views/Navbar.vue";
import Sidebar from "./views/Sidebar.vue";

export default {
  name: "app",
  components: {
    MainContent,
    Sidebar,
    Navbar
  }
};
</script>

<style lang="scss">
.el-container {
  min-height: 100vh;
}
.el-header {
  background-color: #6c0;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
  color: white;
}
.el-main {
  flex: 1;
}
.el-footer {
  padding-top: 60px;
  background-color: #292f47;
  color: white;
}
</style>
