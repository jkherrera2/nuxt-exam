<template>
	<v-card class="mx-auto mb-4" width="800" :subtitle="launch.isFave ? 'FAVORITE' : ''">
		<template #title>
			<span class="text-uppercase font-weight-bold">Mission: {{ launch.mission_name }}</span>
		</template>
		<v-card-text class="pt-4 font-weight-light">
			<p>Launch Info:</p>
			<p>
				<strong>Launch Date (UTC):</strong>
				{{ formattedDate }}
			</p>
			<p>
				<strong>Launch Site:</strong>
				{{ launch.launch_site?.site_name ?? 'Unavailable' }}
			</p>
			<p>
				<strong>Rocket Name:</strong>
				{{ launch.rocket?.rocket_name }}
			</p>
			<p>
				<strong>Details:</strong>
				<br />
				{{ launch.rocket?.rocket?.description ?? 'Unavailable' }}
			</p>

			<nuxt-link :to="`/launches/${launch.id}`" class="text-blue-600 underline mt-2 inline-block">
				View Details
			</nuxt-link>
		</v-card-text>
	</v-card>
</template>

<script setup>
const props = defineProps({
	launch: {
		type: Object,
		required: true,
	},
})

const formattedDate = new Date(props.launch.launch_date_utc).toLocaleString()
</script>

<style scoped>
.v-card {
	background-color: black;
	color: #f5f5f5;
	border: 2px solid white;
	box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05);
	transition:
		transform 0.3s ease,
		box-shadow 0.3s ease;
}

.v-card:hover {
	transform: translateY(-6px);
	box-shadow: 0 0 15px 3px rgba(255, 255, 255, 0.3);
	cursor: pointer;
}

/* Title styling */
.v-card-title {
	font-weight: 700;
	letter-spacing: 1px;
	color: #ffffff;
	font-size: 1.1rem;
}

/* Subtitle */
.v-card-subtitle {
	color: #bbb;
	font-weight: 400;
	font-size: 0.9rem;
	margin-bottom: 8px;
}

/* Body text */
.v-card-text p {
	margin-bottom: 10px;
	line-height: 1.4;
	color: #e0e0e0;
	font-size: 0.95rem;
}

/* Nuxt link */
a {
	color: #4dabf7;
	text-decoration: none;
	transition: color 0.2s ease;
}
a:hover {
	color: #82cfff;
	text-decoration: underline;
}
</style>
