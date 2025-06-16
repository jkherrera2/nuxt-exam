<template>
	<div class="launch-details">
		<button class="favorite-btn" @click="toggleFavorite">
			{{ launch?.isFave ? 'REMOVE FROM FAVORITES' : 'ADD TO FAVORITES' }}
		</button>

		<div class="section">
			<h1 class="mission-name">{{ launch?.mission_name }}</h1>
			<h2 class="rocket-name">Rocket: {{ launch?.rocket?.rocket_name }}</h2>
			<p class="description">
				<span>Description:</span>
				{{ launch?.rocket?.rocket?.description ?? 'Unavailable' }}
			</p>
		</div>

		<div class="section specs">
			<h3 class="section-title">Rocket Specifications</h3>
			<ul class="spec-list">
				<li>
					<span>First Flight:</span>
					{{ new Date(launch?.rocket?.rocket?.first_flight).toLocaleDateString() }}
				</li>
				<li>
					<span>Height:</span>
					{{ launch?.rocket?.rocket?.height?.meters }} m ({{ launch?.rocket?.rocket?.height?.feet }}
					ft)
				</li>
				<li>
					<span>Diameter:</span>
					{{ launch?.rocket?.rocket?.diameter?.meters }} m ({{
						launch?.rocket?.rocket?.diameter?.feet
					}}
					ft)
				</li>
				<li>
					<span>Mass:</span>
					{{ launch?.rocket?.rocket?.mass?.kg }} kg ({{ launch?.rocket?.rocket?.mass?.lb }} lbs)
				</li>
				<li>
					<span>Stages:</span>
					{{ launch?.rocket?.rocket?.stages }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { useLaunchStore } from '@/stores/LaunchStore'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
const launchStore = useLaunchStore()

const launch = computed(() => launchStore.launches.find((l) => l.id === id))

function toggleFavorite() {
	launchStore.toggleFavorite(id)
}
</script>

<style scoped>
.launch-details {
	background-color: black;
	color: #f5f5f5;
	border: 2px solid white;
	padding: 2rem;
	max-width: 700px;
	margin: 3rem auto;
	box-shadow: 0 6px 20px rgba(255, 255, 255, 0.05);
}

.favorite-btn {
	border: none;
	background-color: #000;
	color: #fff;
	padding: 10px 20px;
	cursor: pointer;
	transition: background-color 0.3s;
	font-size: 0.9rem;
	margin-bottom: 30px;
	border: 1px solid #333;
}

.favorite-btn:hover {
	background-color: #333;
}

.section {
	margin-bottom: 2rem;
}

.mission-name {
	font-size: 1.75rem;
	font-weight: 700;
	margin-bottom: 0.25rem;
	color: white;
}

.rocket-name {
	font-size: 1.2rem;
	font-weight: 600;
	margin-bottom: 1rem;
	color: white;
}

.description {
	font-size: 1rem;
	line-height: 1.6;
	color: #c9d1d9;
	font-weight: 300;
}

.label {
	font-weight: 600;
	color: #8b949e;
	margin-right: 0.5rem;
}

.section-title {
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 1rem;
	color: white;
	border-bottom: 1px solid #30363d;
	padding-bottom: 0.5rem;
}

.spec-list {
	list-style: none;
	padding-left: 0;
}

.spec-list li {
	margin-bottom: 0.5rem;
	font-size: 0.95rem;
	color: #adbac7;
}

span {
	color: white;
	font-weight: bold;
}
</style>
