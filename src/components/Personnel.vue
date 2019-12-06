<template>
  <div class="personnel">
    <el-row>
      <el-col>
        <h1>升遷制度</h1>
        <p>
          為求增進員工發展性及進步意識、維持架構穩定性，訂定多元並透明的升遷制度。透過公開的條件設定，讓員工明確了解目標，以利規劃自身職涯，朝設定目標邁進。
        </p>
        <el-divider></el-divider>
        <h2>晉升機會</h2>
        <img
          src="../assets/img/2019_05_DD handbook_graphic-06.png"
          width="100%"
          alt
        />
      </el-col>
    </el-row>
    <center-btn></center-btn>
  </div>
</template>

<script>
import CenterBtn from './CenterBtn';

export default {
  name: "personnel",
  components: {
		CenterBtn,
	},
};
</script>
