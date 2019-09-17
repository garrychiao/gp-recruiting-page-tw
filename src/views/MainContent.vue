<template>
  <div>
    <el-row>
      <el-col>
        main
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  created() {
    console.log(this.$route.params.section);
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
