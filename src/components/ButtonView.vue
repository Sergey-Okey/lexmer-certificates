<template>
	<button type="button">Предпросмотр</button>
</template>

<script setup>
</script>

<style scoped lang="scss">
button {
	width: 178px;
	height: 43px;
	padding: 10px 32px 12px 32px;
	gap: 4px;
	opacity: 0px;
	background: rgb(255, 254, 254);
	color: rgb(0, 0, 0);
	margin-top: 35px;
	outline: solid 2px black;
	cursor: pointer;

	@include breakpoint('mobile') {
		margin-top: 0;
		width: 100%;
	}

	@include breakpoint('mobile', 'wide') {
		width: 180px;
		height: 45px;
	}
}
</style>