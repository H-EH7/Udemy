<template>
	<section class="container">
		<h2><slot name="title"></slot></h2>
		<div>
			<slot>
				<p>디폴트 슬롯이 삽입되었습니다.</p>
			</slot>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 400px;
	height: 100px;
	background-color: rgb(255, 200, 134);
}

div {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 400px;
	height: 300px;
	background-color: bisque;
}

.container {
	display: block;
}
</style>
