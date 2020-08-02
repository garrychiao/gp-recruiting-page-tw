<template>
  <div class="recruit-info">
    <h1>
      聯絡方式
    </h1>
    <p>
      有意應徵者，請電郵履歷表到相關辦公室或致電相關聯絡人查詢詳情。<br />
      （應徵者提供之全部資料絕對保密及只作招聘之用）
    </p>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="8">
        <el-card>
          <h4>臺北辦公室</h4>
          <p>
            薛紹芸小姐<br />
            02-23612351#213<br />
            <a href="mailto:shau.yun.hsueh@greenpeace.org" target="_blank"
              >shau.yun.hsueh@greenpeace.org</a
            >
          </p>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="8">
        <el-card>
          <h4>臺中辦公室</h4>
          <p>
            廖建閎先生<br />
            0910-857-515<br />
            <a href="mailto:chien.hung.liao@greenpeace.org" target="_blank"
              >chien.hung.liao@greenpeace.org </a
            >
          </p>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="8">
        <el-card>
          <h4>高雄辦公室</h4>
          <p>
            張湘妮小姐<br />
            07-3127588#703<br />
            <a href="mailto:schang@greenpeace.org" target="_blank"
              >schang@greenpeace.org</a
            >
          </p>
        </el-card>
      </el-col>
    </el-row>
    <!-- <img src="https://secured.greenpeace.org/hk/Global/hk/artworks/gp/ddc-recruitment/2015/img/recruit_mv.jpg" width="100%" alt /> -->
    <h4>同時可至官網，了解更多</h4>
    <a href="https://www.greenpeace.org/taiwan/" target="_blank"
      >https://www.greenpeace.org/taiwan/</a
    >
    <!-- <el-divider></el-divider> -->
    <center-btn></center-btn>
  </div>
</template>

<script>
import CenterBtn from './CenterBtn';

export default {
  name: "RecruitInfo",
  components: {
		CenterBtn,
	},
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    resizeIframe(obj) {
      obj.style.height = obj.contentWindow.document.body.scrollHeight + "px";
    }
  }
};
</script>
<style lang="scss">
.recruit-info {
  .el-card {
    margin-bottom: 8px;
    h4 {
      margin: 5px 0;
    }
  }
}
</style>
