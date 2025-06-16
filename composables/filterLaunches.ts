const filterLaunches = (launches, year) => {
	const filteredLaunches = computed(() => {
		if (!year.value) return launches || []
		return (launches || []).filter((launch) => launch.launch_date_utc.startsWith(year.value))
	})

	return filteredLaunches
}

export default filterLaunches
