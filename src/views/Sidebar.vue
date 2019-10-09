<template>
  <div class="sidebar">
    <el-menu text-color="#000000" active-text-color="#fff" :default-active="active" class="el-menu">
      <el-menu-item
        v-for="(item, i) in routers"
        :class="item.class"
        :key="i"
        :index="(i + 1).toString()"
        @click="directTo(item.link)"
      >
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
  data() {
    return {
      active: "1",
      routers: [
        {
          class: "",
          icon: "el-icon-s-home",
          link: "home",
          label: "首頁"
        },
        {
          class: "",
          icon: "el-icon-aim",
          link: "mission",
          label: "綠色和平的使命"
        },
        {
          class: "",
          icon: "el-icon-user-solid",
          link: "recruit",
          label: "人才招聘"
        },
        {
          class: "",
          icon: "el-icon-postcard",
          link: "personnel",
          label: "人事制度"
        },
        {
          class: "",
          icon: "el-icon-s-check",
          link: "fundraiser",
          label: "認識籌款幹事"
        },
        {
          class: "",
          icon: "el-icon-info",
          link: "recruitInfo",
          label: "人才招聘訊息"
        },
        {
          class: "apply-btn",
          icon: "el-icon-document-checked",
          link: "applyForm",
          label: "立即申請"
        }
      ]
    };
  },
  created() {
    this.bindSection();
  },
  methods: {
    directTo(link) {
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
    "$route.params.section": function() {
      this.bindSection();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sidebar {
  .el-menu-item {
    display: flex;
    align-items: center;
  }
  .apply-btn {
    i {
      color: #67c23a !important;
    }
    color: #67c23a !important;
    font-weight: bolder;
    /* background-color: #67C23A; */
  }
  .apply-btn.is-active {
    i {
      color: white !important;
    }
    color: white !important;
    font-weight: bolder;
    background-color: #f56c6c;
  }
}
</style>
