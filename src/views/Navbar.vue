<template>
  <div class="navbar">
    <el-row type="flex" justify="space-between">
      <el-col :xs="{span: 17, offset: 1}" :sm="{span: 17, offset: 1}" :md="{span: 18, offset: 0}" >
        <img src="@/assets/img/gp_logo.jpg" alt="GP LOGO" class="navbar-logo">
      </el-col>
      <el-col :span="4">
        <el-button size="small" icon="el-icon-more" plain @click="drawer = !drawer" class="hidden-md-and-up"></el-button>
      </el-col>
    </el-row>
    <el-drawer
      :visible.sync="drawer"
      custom-class="drawer"
      size="auto"
      direction="ltr">
      <el-menu
      text-color="#000000"
      active-text-color="#fff"
      :default-active="active"
      class="el-menu">
      <el-menu-item 
        v-for="(item, i) in routers" 
        :key="i"
        :index="(i + 1).toString()"
        @click="directTo(item.link)">
        <span>
          <i :class="item.icon"></i>
          {{ item.label }}
        </span>
      </el-menu-item>
    </el-menu>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      active: '1',
      drawer: false,
      routers: [
        {
          icon: "el-icon-s-home",
          link: 'home',
          label: '首頁'
        },
        {
          icon: "el-icon-aim",
          link: 'mission',
          label: '綠色和平的使命'
        },
        {
          icon: "el-icon-user-solid",
          link: 'recruit',
          label: '人才招聘'
        },
        {
          icon: "el-icon-postcard",
          link: 'personnel',
          label: '人事制度'
        },
        {
          icon: "el-icon-s-check",
          link: 'fundraiser',
          label: '認識籌款幹事'
        },
        {
          icon: "el-icon-info",
          link: 'recruitInfo',
          label: '人才招聘訊息'
        }
      ]
    }
  },
  created() {
    this.bindSection();
  },
  methods: {
    directTo (link) {
      if (link !== this.$route.params.section) {
        this.$router.push({ path: link });
      }
      this.drawer = false;
    },
    bindSection() {
      for (let i in this.routers) {
        if (this.routers[i].link === this.$route.params.section) {
          let index = (parseInt(i) + 1).toString();
          this.active = index;
        }
      }
    }
  },
  watch: { 
    '$route.params.section': function() {
      this.bindSection();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navbar {
  height: auto;
  padding: 10px 0;
  .el-button {
    margin-top: -5px;
  }
}
.navbar-logo {
  max-width: 200px;
}
.el-menu {
  background-color: #f9f9f9;
}
</style>
