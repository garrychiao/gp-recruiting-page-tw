<template>
	<div class="recruit-info">
		<h1>
			聯絡方式
		</h1>
		<p>有意應徵者，歡迎將履歷電郵至
			<a href="mailto:andy.li@greenpeace.org" taget="_blank">andy.li@greenpeace.org</a> 或 whatsapp 李先生了解詳情。 <br /> (應徵者提供之全部資料絕對保密及只作招聘之用)
		</p>
		<p>
			同時可至官網，了解更多
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


