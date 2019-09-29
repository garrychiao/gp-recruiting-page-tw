<template>
  <div class="sidebar">
    <el-menu
      text-color="#000000"
      active-text-color="#006837"
      :default-active="active"
      class="el-menu">
      <el-menu-item 
        v-for="(item, i) in routers" 
        :key="i"
        :index="(i + 1).toString()"
        @click="directTo(item.link)">
        <span>{{ item.label }}</span>
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
      console.log(this.active)
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
  text-align: right;
}
</style>
