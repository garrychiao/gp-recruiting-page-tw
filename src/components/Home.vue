<template>
	<div class="home">
		<el-row>
			<el-col>
				<div>
					<h1>誠聘綠色和平籌款幹事</h1>
					<h2>以實際行動推動積極改變</h2>
				</div>
				<carousel ref="carousel" :per-page="1" :adjustableHeight="true" :mouse-drag="true" :autoplay="true" :autoplayTimeout="5000" :loop="true" :navigationEnables="true" :paginationEnabled="false">
					<slide v-for="(item, index) in carouselItems" :key="index">
						<img :src="item.imgUrl" width="100%" />
					</slide>
				</carousel>
			</el-col>
		</el-row>
		<div>

		</div>
		<el-row>
			<el-col>
				<el-divider class="hidden-xs-only"></el-divider>
				<h3>你想為地球爭取更美好的明天嗎？</h3>
				<h3>我們需要 <span style="color: #66cc00">具有親和力、擅長溝通，性格正面樂觀</span> 的朋友加入募款團隊。</h3>
				<p>如果你：</p>
				<ul style="list-style-type: decimal;">
					<li>不害怕在公共場合與人接觸</li>
					<li>能夠在簡短時間內傳達豐富的環保相關訊息</li>
					<li>具有為環保議題爭取捐款與連署支持的熱誠</li>
				</ul>
				<p>不用擔心，積極正面、好溝通是我們在尋找的特質。至於有關環境保護的知識，以及如何和一般人有效地就環保議題進行對話、爭取支持，會有完整的在職訓練，還有足夠的練習和互相進步的機會。<br>
					期待你加入我們！<br>
				</p>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
	name: "Home",
	components: {
		Carousel,
		Slide
	},
	data() {
		return {
			carouselItems: [
				{
					imgUrl: require('@/assets/img/home-slide-1.jpg')
				},
				{
					imgUrl: require('@/assets/img/home-slide-2.jpg')
				},
				{
					imgUrl: require('@/assets/img/home-slide-3.jpg')
				},
				{
					imgUrl: require('@/assets/img/home-slide-4.jpg')
				},
				{
					imgUrl: require('@/assets/img/home-slide-5.jpg')
				}
			],
		};
	},
	mounted() {
  setTimeout(() => {
    this.$refs['carousel'].onResize();
    this.$refs['carousel'].goToPage(0);
  }, 200);
}
};
</script>

<style>
.VueCarousel-slide {
  visibility: visible;
  flex-basis: 100%;
  width: 100%;
}
</style>
