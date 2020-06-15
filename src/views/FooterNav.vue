<template>
  <div style="width: 100%; padding: 0 16px;">
    <div class="footer-nav hidden-sm-and-up">
      <el-menu active-text-color="#fff" :default-active="activeD" class="el-menu">
        <el-menu-item v-for="(item, i) in routersD" :class="item.class" :key="i" :index="(i).toString()" @click="directTo(item.link)">
          <span>
            <i :class="item.icon"></i>
            {{ item.label }}
          </span>
        </el-menu-item>
      </el-menu>
      <el-menu active-text-color="#fff" :default-active="activeS" class="el-menu">
        <el-menu-item v-for="(item, i) in routersS" :class="item.class" :key="i" :index="(i).toString()" @click="directTo(item.link)">
          <span>
            <i :class="item.icon"></i>
            {{ item.label }}
          </span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
	name: "FooterNav",
	props: {
		routers: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
      activeD: "1",
      activeS: "",
			drawer: false,
		};
  },
  computed: {
    routersS: function () {
      return this.routers.filter((item, index) => {
        return index % 2 !== 0
      })
    },
    routersD: function () {
      return this.routers.filter((item, index) => {
        return index % 2 === 0
      })
    },
  },
	mounted() {
		this.bindSection();
	},
	methods: {
		directTo(link) {
			if (link !== this.$route.params.section) {
				this.$router.push({ path: link });
			}
			this.drawer = false;
		},
		bindSection() {
			for (let i in this.routers) {
				if (this.routers[i].link === this.$route.params.section) {
          let index;
          console.log(i);
          console.log(i % 2 === 0);
          if (i % 2 === 0) {
            index = Math.ceil(i / 2);
            this.activeD = index.toString();
            this.activeS = "";
          } else {
            index = Math.floor(i / 2);
            this.activeS = index.toString();
            this.activeD = "";
          }
          // console.log(index);
          window.scrollTo(0,0);
				}
			}
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
<style lang="scss">
.footer-nav {
  border-left: solid 1px #e6e6e6;
  display: flex;
  .el-menu {
    width: 50%;
  }
}
</style>
