const sortLaunchesDate = (launches, sort) => {
	const sortedLaunches = computed(() => {
		return [...launches.value].sort((a, b) => {
			if (sort.value === 'desc') {
				return new Date(b.launch_date_utc) - new Date(a.launch_date_utc)
			} else {
				return new Date(a.launch_date_utc) - new Date(b.launch_date_utc)
			}
		})
	})

	return sortedLaunches
}

export default sortLaunchesDate
