<template>
  <div class="recruit">
    <el-row>
      <el-col>
        <h1>職務資訊</h1>
        <p><strong>誠徵全職募款與教育專員</strong></p>
        <p>當我們多方努力守護環境的同時，更重要的是讓更多人知道並關注環保議題，才能持續壯大尋求改變的陣營，從而締造綠色成果。籌款幹事站在推動環境保護最前線，面對拒絕與冷漠，以堅持與熱誠傳播環保訊息，凝聚群眾力量。</p>
        <p>
          <strong>您願意成為我們其中一員嗎？</strong>
        </p>
      </el-col>
    </el-row>
    <el-row class="table-data">
      <el-col>
        <el-divider></el-divider>
        <el-card>
          <h2>招聘詳情</h2>
          <p>
            <strong>募款與教育專員工作內容</strong>
          </p>
          <el-row v-for="(item, index) in tableData" :key="index">
            <el-col :span="6">
              <p>{{item.cell1}}</p>
            </el-col>
            <el-col :span="18" :align="item.textAlign">
              <p v-html="item.cell2"></p>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <center-btn></center-btn>
  </div>
</template>

<script>
import CenterBtn from './CenterBtn';

export default {
  name: "recruit",
  components: {
		CenterBtn,
	},
  data() {
    return {
      tableData: [
        {
          cell1: "職務性質",
          cell2: "全職",
          textAlign: "center"
        },
        {
          cell1: "需求人數",
          cell2: "不限",
          textAlign: "center"
        },
        {
          cell1: "職類",
          cell2: "國內業務人員，顧問人員",
          textAlign: "center"
        },
        {
          cell1: "職務說明",
          cell2: `在市區、街頭、捷運站附近等人群聚集的地點，第一線和民眾接觸，宣導環保的重要性及綠色和平推動的專案並且招募捐款會員，為環保工作募集經費。<br>
                  上班時段：上班8小時（含1小時休息用餐時間）/周末需要排班<br>
                  休假制度：週休二日<br>
                  條件要求：<br>
                  <ul style="list-style-type: decimal;">
                    <li>高中或專科以上學歷</li>
                    <li>喜歡與人接觸，有正面、樂觀的個性，擅長溝通</li>
                    <li>關心環境的未來，願意更深入了解環境保護相關的議題和知識</li>
                    <li>有專業行銷經驗，或曾於非營利組織工作更佳</li>
                    <li>須能配合偶爾在外縣市進行募款活動</li>
                  </ul>`,
          textAlign: "left"
        },
        {
          cell1: "工作待遇",
          cell2: `試用期：月薪30,650元 + 目標達成獎金<br>
                  試用期滿：月薪32,750元 + 目標達成獎金<br>
                  額外特別的獎勵`,
          textAlign: "left"
        },
        {
          cell1: "福利制度",
          cell2: `<ul>
                    <li>團體保險 </li>
                    <li>不定期聚餐 </li>
                    <li>內部教育訓練及員工發展計畫 </li>
                    <li>通過試用期，享有一年15天年假，按比例發放</li>
                    <li>通過試用期，享有每年員工健康檢查</li>
                    <li>服務滿一個月，享有一個月2天有薪病假</li>
                    <li>服務滿一年，享有一個月2~4天有薪病假</li>
                  </ul>`,
          textAlign: "left"
        },
        {
          cell1: "注意事項",
          cell2: "若不能配合周末工作及排班者，請勿投遞",
          textAlign: "center"
        },
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table-data {
  text-align: center;
  .el-row {
    border-bottom: 1px solid rgb(245, 245, 245);
  }
  .el-row:hover {
    background-color: rgb(245, 245, 245);
  }
}
</style>
