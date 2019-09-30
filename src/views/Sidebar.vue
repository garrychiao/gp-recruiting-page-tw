<template>
  <div class="sidebar">
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
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data () {
    return {
      active: '1',
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
    };
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
      // console.log(this.active)
    }
  },
  watch: { 
    '$route.params.section': function() {
      this.bindSection();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-button {
  padding: 10px 25px;
  margin: 0px 10px;
}
.el-button.active, .el-button:hover {
  color: #fff;
  background-color: #409EFF;
}
.sidebar {
  /* text-align: right; */
}
</style>
