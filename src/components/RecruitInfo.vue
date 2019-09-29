<template>
  <div class="recruit-info">
    <el-row>
      <el-col :sm="{span: 22, offset: 1}">
        <h1>人才招聘資訊</h1>
        <p>有意應徵者，歡迎將履歷電郵至 david.lau@greenpeace.org 或 whatsapp 54603080 劉先生了解詳情。<br>(應徵者提供之全部資料絕對保密及只作招聘之用)</p>
      </el-col>
      <el-col :sm="{span: 22, offset: 1}">
        <img src="https://secured.greenpeace.org/hk/Global/hk/artworks/gp/ddc-recruitment/2015/img/recruit_mv.jpg" width="100%" alt="">
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row class="graph-content">
      <el-col :span="22" :offset="1">
        <h2>了解我們更多的工作使命，可觀看以下短片或瀏覧我們的網址</h2>
        <el-tabs type="border-card" :stretch="true">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-caret-right"></i> 影片 1</span>
            <iframe 
              class="video"
              src="https://www.youtube.com/embed/sffAL_fzUnU?enablejsapi=1" 
              width="100%"
              scrolling="no"
              frameborder="0"></iframe>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-caret-right"></i> 影片 2</span>
            <iframe 
              class="video"
              src="https://www.youtube.com/embed/hdfQbf6W2sc?enablejsapi=1" 
              width="100%"
              scrolling="no"
              frameborder="0"></iframe>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-caret-right"></i> 影片 3</span>
            <iframe 
              class="video"
              src="https://www.youtube.com/embed/dm27NgZwJdA?enablejsapi=1" 
              width="100%"
              scrolling="no"
              frameborder="0"></iframe>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'RecruitInfo',
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    resizeIframe(obj) {
      obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video {
  height: 600px;
}
@media (min-width: 992px) and (max-width: 1919px) {
  .video {
    height: 430px;
  } 
}
</style>
