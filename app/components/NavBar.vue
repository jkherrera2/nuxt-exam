<template>
	<v-app-bar :elevation="15" class="bg-black px-16">
		<v-app-bar-title class="font-weight-bold">
			<nuxt-link to="/"><h1>SPACEX</h1></nuxt-link>
		</v-app-bar-title>

		<template #append>
			<nuxt-link to="/launches">LAUNCHES</nuxt-link>
			<nuxt-link to="/favorites">FAVORITES</nuxt-link>
		</template>
	</v-app-bar>
</template>

<style scoped>
h1 {
	font-size: 2rem;
}

a {
	color: white;
	text-decoration: none;
	font-weight: bold;
	font-size: 1rem;
	padding: 10px 16px;
	border-radius: 8px;
	transition:
		background-color 0.3s ease,
		transform 0.2s ease;
	position: relative;
	display: inline-block;
}

a:hover {
	transform: translateY(-2px);
}

a::after {
	content: '';
	position: absolute;
	bottom: 4px;
	left: 16px;
	width: 0;
	height: 1px;
	background: white;
	transition: width 0.3s ease;
}

a:hover::after {
	width: calc(100% - 32px);
}
</style>
