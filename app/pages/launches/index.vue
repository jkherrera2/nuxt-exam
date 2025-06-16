<template>
	<div class="page">
		<h1 class="title">SPACEX LAUNCHES</h1>

		<div class="controls">
			<input v-model="year" type="text" placeholder="Enter Year" minlength="4" maxlength="4" />
			<p class="search-preview">Searching: {{ year || 'All Years' }}</p>

			<div class="sort-buttons">
				<button @click="sort = 'asc'">SORT BY ASCENDING YEAR ↑</button>
				<button @click="sort = 'desc'">SORT BY DESCENDING YEAR ↓</button>
			</div>
		</div>

		<div class="launches-container">
			<Card v-for="launch in sortedLaunches" :key="launch.id" :launch="launch" />
		</div>
	</div>
</template>

<script setup>
import filterLaunches from '../composables/filterLaunches.ts'
import sortLaunchesDate from '../composables/sortLaunchesDate.ts'
import { useLaunchStore } from '/stores/LaunchStore'

const year = ref('')
const sort = ref('')

const launchStore = useLaunchStore()
await launchStore.getLaunches()

const launches = launchStore.launches

const filteredLaunches = filterLaunches(launches, year)
const sortedLaunches = sortLaunchesDate(filteredLaunches, sort)
</script>

<style scoped>
.page {
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
	flex-direction: column;
	align-items: center;
	gap: 10px;
	margin-bottom: 75px;
}

input {
	border: 1px solid #ccc;
	padding: 10px 15px;
	font-size: 1rem;
	border-radius: 5px;
	width: 100px;
	color: white;
	text-align: center;
}

.search-preview {
	font-size: 0.9rem;
	color: #666;
}

.sort-buttons {
	display: flex;
	gap: 15px;
}

button {
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

button:hover {
	background-color: #333;
}
</style>
