<template>
  <div class="home">
    <el-row>
      <el-col>
        <div>
          <h1>誠聘綠色和平籌款幹事</h1>
          <h2>以實際行動推動積極改變</h2>
        </div>
        <el-carousel :interval="6000">
          <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
            <img :src="item.imgUrl" width="100%" alt />
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-divider class="hidden-xs-only"></el-divider>
        <p>街頭籌款團隊往往站在環境保護的最前線，面對大眾，以堅持與熱誠傳播環保訊息，尋找支持的力量。你願意成為我們其中一員嗎？</p>
        <p>加入綠色和平，以實際行動推動積極改變。</p>
        <p>脆弱的地球需要你我去守護，作為綠色和平的一員，你將有機會直接參與重要的環保項目。不論年齡或性別，綠色和平只著重員工的能力和成長，更承諾提供晉升機會和完善薪酬制度，讓員工發揮所長，為環境帶來更多改變，開拓新里程。</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      carouselItems: [
        {
          imgUrl:
            "https://secured-static.greenpeace.org/hk/Global/hk/artworks/gp/ddc-recruitment/2015/img/index_mv1.jpg"
        },
        {
          imgUrl:
            "https://secured.greenpeace.org/hk/Global/hk/artworks/gp/ddc-recruitment/2015/img/index_mv2_new.jpg"
        },
        {
          imgUrl:
            "https://secured.greenpeace.org/hk/Global/hk/artworks/gp/ddc-recruitment/2015/img/index_mv3_new.jpg"
        },
        {
          imgUrl:
            "https://secured-static.greenpeace.org/hk/Global/hk/artworks/gp/ddc-recruitment/2015/img/index_mv4.jpg"
        }
      ]
    };
  }
};
</script>
