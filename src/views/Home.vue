<template>
  <div class="home">
    <el-row>
      <el-col>
        this is home page
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {

  },
  data() {
    return {
      activeTab: 'login',
      isLogOuting: false,
      alert: {
        ifExist: false,
        description: '',
      },
    };
  },
};
</script>
<style scoped>

</style>
