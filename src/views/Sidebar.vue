<template>
  <div>
    <el-button type="text" class="active">Text Button</el-button>
    <el-button type="text">Text Button</el-button>
    <el-button type="text">Text Button</el-button>
    <el-button type="text">Text Button</el-button>
    
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data () {
    return {
      radio1: "New York"
    };
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
</style>
