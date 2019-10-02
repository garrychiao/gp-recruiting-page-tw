<template>
  <div class="personnel">
    <el-row type="flex">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 22, offset: 1}">
        <h1>人事制度</h1>
        <p>我們將嚴謹注視每名員工的能力和工作表現，以加薪和晉升來獎勵每名員工的努力。</p>
        <el-divider></el-divider>
      </el-col>
    </el-row>
    
    <el-row class="graph-content">
      <el-col :span="22" :offset="1">
        <el-card shadow="always">
          <h2>晉升機會</h2>
          <img src="https://secured.greenpeace.org/hk/Global/hk/artworks/gp/ddc-recruitment/2015/img/personnel.jpg" width="100%" alt="">      
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'personnel'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.graph-content {
  text-align: center;
}
</style>
