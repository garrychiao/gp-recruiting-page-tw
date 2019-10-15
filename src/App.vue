<template>
  <main id="app" class="main">
    <el-container>
      <el-header class="header">
        <Navbar></Navbar>
      </el-header>
      <!-- header -->
      <el-main>
        <el-container>
          <el-row :gutter="20">
            <el-col :md="6" :xl="4" class="hidden-sm-and-down">
              <Sidebar></Sidebar>
            </el-col>
            <el-col :md="18" :xl="20">
              <MainContent></MainContent>
            </el-col>
          </el-row>
        </el-container>
      </el-main>
      <!-- main -->
      <el-footer class="footer" height="auto">
        <!--
        <div class="footer-top">
          <el-row>
            <el-col :md="12">
              <img
                src="https://www.greenpeace.org/hongkong/wp-content/themes/planet4-child-theme-hongkong/static/images/logo_zh_gp_w footer.svg"
                width="100%"
                style="max-width: 200px;"
              />
              <el-divider></el-divider>
              <p>綠色和平是獨立的國際環保組織，通過科學研究、政策倡議及和平行動，揭露全球環境問題並提出相應解決方案。 我們從不接受任何政府、企業或政治團體的資助，只接受個人的直接捐款，以維持公正獨立。</p>
            </el-col>
            <el-col :md="12">
              <ul>
                <li>
                  <a href="https://www.greenpeace.org/hongkong/about/overview/">簡介</a>
                </li>
                <li>
                  <a href="https://www.greenpeace.org/hongkong/about/mission/">核心使命</a>
                </li>
                <li>
                  <a href="https://www.greenpeace.org/hongkong/about/how-we-act/">行動理念</a>
                </li>
                <li>
                  <a href="https://www.greenpeace.org/hongkong/about/contact/">聯絡我們</a>
                </li>
              </ul>
            </el-col>
          </el-row>
        </div>
        -->
        <div class="footer-bot">
          <el-row>
            <p class="logo-box">© GREENPEACE 2019</p>
          </el-row>
        </div>
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
    Navbar
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
  }
  .el-main {
    flex: 1;
    .el-container {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
  .el-footer {
    height: auto;
    margin-top: 60px;
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
}
</style>
