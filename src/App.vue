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
      <app-footer></app-footer>
      <!-- footer -->
      <el-button
        v-if="fixBtnVisible"
        type="danger"
        icon="el-icon-edit"
        class="hidden-md-and-up fix-btn"
        circle
        @click="directTo('applyForm')"
      ></el-button>
    </el-container>
  </main>
</template>

<script>
import MainContent from "./views/MainContent.vue";
import Navbar from "./views/Navbar.vue";
import Sidebar from "./views/Sidebar.vue";
import AppFooter from "./views/AppFooter.vue";

export default {
  name: "app",
  data() {
    return {
      fixBtnVisible: true
    };
  },
  components: {
    MainContent,
    Sidebar,
    Navbar,
    AppFooter
  },
  created() {
    if (this.$route.params.section == "applyForm") {
      this.fixBtnVisible = false;
    } else {
      this.fixBtnVisible = true;
    }
  },
  methods: {
    directTo(link) {
      if (link !== this.$route.params.section) {
        this.$router.push({ path: link });
      }
      window.scrollTo(0, 0);
    }
  },
  watch: {
    "$route.params.section": function() {
      if (this.$route.params.section == "applyForm") {
        this.fixBtnVisible = false;
      } else {
        this.fixBtnVisible = true;
      }
    }
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
.fix-btn {
  z-index: 1200;
  position: fixed;
  bottom: 16px;
  right: 16px;
  font-size: 2rem !important;
}
</style>
