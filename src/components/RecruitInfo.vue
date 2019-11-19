<template>
	<div class="recruit-info">
		<h1>
			聯絡方式
		</h1>
		<p>
			有意應徵者，請電郵履歷表到相關辦公室或致電相關聯絡人查詢詳情。<br>
			（應徵者提供之全部資料絕對保密及只作招聘之用）
		</p>
		<p>
			你同時可至官網，了解更多綠色和平的資訊
			<a href="https://www.greenpeace.org/hongkong/" taget="_blank">https://www.greenpeace.org/hongkong/</a>
		</p>
		<img src="https://secured.greenpeace.org/hk/Global/hk/artworks/gp/ddc-recruitment/2015/img/recruit_mv.jpg" width="100%" alt />

	</div>
</template>

<script>
export default {
	name: "RecruitInfo",
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


