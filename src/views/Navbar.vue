<template>
  <div class="navbar">
    <el-row type="flex" justify="space-between">
      <el-col :span="18">
        <img src="@/assets/img/gp_logo.jpg" alt="GP LOGO" class="navbar-logo">
      </el-col>
      <el-col :span="4">
        <el-button size="small" icon="el-icon-more" plain @click="drawer = !drawer"></el-button>
      </el-col>
    </el-row>
    <el-drawer
      :visible.sync="drawer"
      custom-class="drawer"
      size="50%"
      direction="ttb">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span>Navigator Four</span>
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
      drawer: true,
      routers: [
        {
          link: 'home',
          label: '首頁'
        },
        {
          link: 'mission',
          label: '綠色和平的使命'
        },
        {
          link: 'recruit',
          label: '人才招聘'
        },
        {
          link: 'personnel',
          label: '人事制度'
        },
        {
          link: 'fundraiser',
          label: '認識籌款幹事'
        },
        {
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
<style scoped>
.navbar {
  height: 50px;
  padding: 20px 0;
}
.navbar-logo {
  max-width: 200px;
}

</style>
