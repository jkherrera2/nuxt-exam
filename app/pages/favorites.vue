<template>
	<div class="page">
		<h1 class="title">FAVORITE LAUNCHES</h1>

		<div class="controls">
			<button class="clear-btn" @click="launchStore.clearFavs()">CLEAR FAVORITES</button>
		</div>

		<div v-if="favorites.length" class="launches-container">
			<Card v-for="launch in favorites" :key="launch.id" :launch="launch" />
		</div>

		<p v-else class="no-favorites">No favorites yet.</p>
	</div>
</template>

<script setup>
import Card from '@/components/Card.vue'
import { computed } from 'vue'
import { useLaunchStore } from '../stores/LaunchStore'

const launchStore = useLaunchStore()
const favorites = computed(() => launchStore.launches.filter((launch) => launch.isFave))
</script>

<style scoped>
.page {
	font-family: 'Oswald', sans-serif;
	background-color: black;
	color: white;
	min-height: 100vh;
	padding: 40px 20px;
}

.title {
	text-align: center;
	font-size: 7rem;
	font-weight: 700;
	margin-top: 20px;
	margin-bottom: 30px;
	color: white;
}

.controls {
	display: flex;
	justify-content: center;
	margin-bottom: 50px;
}

.clear-btn {
	border: none;
	background-color: #000;
	color: #fff;
	padding: 10px 20px;
	cursor: pointer;
	transition: background-color 0.3s;
	font-size: 0.9rem;
	margin-top: 40px;
	border: 1px solid #333;
}

.clear-btn:hover {
	background-color: #333;
}

.launches-container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	gap: 1rem;
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;
}

.no-favorites {
	text-align: center;
	font-size: 1.25rem;
	margin-top: 50px;
	color: #999;
}
</style>
