<template>
	<div id="flex-box">
		<base-slot>
			<template v-slot:title>타이틀</template>
			<template v-slot:default>메인에서 슬롯을 넣었음.</template>
		</base-slot>
	</div>
</template>

<script>
export default {};
</script>

<style>
* {
	box-sizing: border-box;
	margin: 0;
}

#flex-box {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
}
</style>
