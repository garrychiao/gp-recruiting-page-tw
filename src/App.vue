<template>
  <main id="app" class="main">
    <el-container>
      <el-header class="header">
        <header class="header">
          <div class="container">
            <Navbar></Navbar>
          </div>
        </header>
      </el-header>
      <!-- header -->
      <el-main>
        <el-container>
          <el-row style="width: 100%;">
            <el-col :md="6" class="hidden-sm-and-down">
              <Sidebar></Sidebar>
            </el-col>
            <el-col :md="17">
              <MainContent></MainContent>
            </el-col>
          </el-row>
        </el-container>
      </el-main>
      <!-- main -->
      <el-footer class="footer" height="auto">
        <AppFooter />
      </el-footer>
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
.main {
  > .el-container {
    min-height: 100vh;
  }
  .el-header {
    background-color: #6c0;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
    color: white;
    .header {
      .container {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  .el-main {
    flex: 1;
    .el-container {
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .el-footer {
    height: auto;
    margin-top: 60px;
    background-color: #292f47;
  }
  .fix-btn {
    z-index: 1200;
    position: fixed;
    bottom: 16px;
    right: 16px;
    font-size: 2rem !important;
  }
}
</style>
