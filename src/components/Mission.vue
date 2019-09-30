<template>
  <div class="mission">
    <el-row>
      <el-col :span="22" :offset="1">
        <h1>綠色和平的使命</h1>
        <p>我們是一個獨立的國際環保組織，致力以實際行動推動積極的改變，保護地球環境與世界和平。</p>
        <p>我們透過研究、教育、行動和游說工作，推動政府、企業和社會大眾共同尋求環境問題的解決方案。</p>
        <el-divider></el-divider>
        <h1>綠色和平的IDEAL</h1>
        <h2>綠色和平推動環保項目時 奉行「IDEAL」核心價值，配合不同行動策略，實踐環境理想。</h2>
        <el-divider></el-divider>
        <div v-for="(item, index) in cardData" :key="index" class="card-data">
          <el-card :body-style="cardStyle" shadow="hover">
            <el-row>
              <el-col :xs="{span: 24, offset: 0}" :sm="{span: 9, offset: 0}" :xl="{span: 8, offset: 0}" class="hide-overflow">
                <img :src="item.img" alt="" width="100%">
              </el-col>
              <el-col :xs="{span: 22, offset: 1}" :sm="{span: 14, offset: 1}" :xl="{span: 15, offset: 1}">
                <h2>{{item.title}}</h2>
                <p>{{ item.content }}</p>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name: 'Mission',
  data() {
    return {
      cardStyle: {
        padding: '0px',
      },
      cardData: [
        {
          title: "Investigate (調查)",
          content: "綠色和平有許多科學家和環境專家，運用專業知識去調查環境罪行。我們會實地採集樣本送往獨立實驗室化驗，或利用衛星導航探測數據，或深入分析公開資料，確保分析結果準確和公正才向公眾發表。",
          img: "https://secured.greenpeace.org/hk/Global/hk/artworks/gp/ddc-recruitment/2015/img/mission_1.jpg"
        },
        {
          title: "Document (記錄)",
          content: "綠色和平其中一個核心價值是「見證」環境破壞。換句話說，就是記錄環境災害及受害者的故事，將真相公開，免被公眾遺忘。",
          img: "https://secured.greenpeace.org/hk/Global/hk/artworks/gp/ddc-recruitment/2015/img/mission_2.jpg"
        },
        {
          title: "Expose (揭露)",
          content: "許多企業刻意向公眾隱瞞破壞環境的罪證，但綠色和平會通過嚴謹和深思熟慮的調查及研究，向消費者揭露每件產品的背後，如何破壞環境。",
          img: "https://secured.greenpeace.org/hk/Global/hk/artworks/gp/ddc-recruitment/2015/img/mission_3.jpg"
        },
        {
          title: "Act (行動)",
          content: "「行動，帶來改變」是綠色和平的核心價值之一。我們的「非暴力直接行動」，有助喚起廣泛關注，把積極求變的訊息帶給企業、政府和公眾。",
          img: "https://secured.greenpeace.org/hk/Global/hk/artworks/gp/ddc-recruitment/2015/img/mission_4.jpg"
        },
        {
          title: "Lobby (游說)",
          content: "綠色和平會游說各國政府和企業一起合作，防治有毒化學物污染、減緩氣候變化、確保食品安全、停止砍伐森林和保護海洋。",
          img: "https://secured.greenpeace.org/hk/Global/hk/artworks/gp/ddc-recruitment/2015/img/mission_5.jpg"
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-data {
  margin-bottom: 20px;
}
.hide-overflow {
  overflow: hidden;
}
</style>
