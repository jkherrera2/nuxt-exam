<template>
	<div class="hero-container">
		<h6>WELCOME TO</h6>
		<h1 class="title">SPACEX</h1>
		<nuxt-link to="/launches" class="launch-btn">LAUNCHES</nuxt-link>
	</div>
</template>

<style scoped>
.hero-container {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: -50px;
	padding: 0;
	background-image: url('@/assets/hero-bg.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center -10%;
}

h6 {
	text-align: center;
	font-size: 50px;
	font-weight: lighter;
	color: white;
	margin: 0;
	line-height: 1;
}

.title {
	text-align: center;
	font-size: 400px;
	font-weight: 700;
	color: white;
	margin: 0 auto;
	line-height: 0.9;
}

.launch-btn {
	position: relative;
	overflow: hidden;
	background-color: black;
	color: white;
	border: 2px solid black;
	padding: 12px 24px;
	font-size: 1.2rem;
	font-weight: bold;
	text-transform: uppercase;
	cursor: pointer;
	transition: color 0.3s ease;
	letter-spacing: 1px;
	z-index: 1;
	margin-top: 90px;
	text-decoration: none;
}

.launch-btn::before {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 0%;
	background-color: white;
	z-index: -1;
	transition: height 0.3s ease;
}

.launch-btn:hover::before {
	height: 100%;
}

.launch-btn:hover {
	color: black;
}
</style>

<!-- <script setup>
definePageMeta({
	middleware: () => {
		return navigateTo('/launches')
	},
})
</script> -->
