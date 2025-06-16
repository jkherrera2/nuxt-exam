<template>
	<v-app>
		<v-main>
			<NavBar />
			<slot />
		</v-main>
		<Footer />
	</v-app>
</template>
<script>
export default {
	name: 'DefaultLayout',
}
</script>

<script setup>
useHead({
	link: [
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap',
		},
	],
})
</script>

<style>
* {
	font-family: 'Oswald', sans-serif;
}
</style>
