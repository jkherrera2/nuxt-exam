import { useAsyncData } from '#app'
import { defineStore } from '#imports'
import { ofetch } from 'ofetch'

export const useLaunchStore = defineStore('LaunchStore', {
	state: () => ({
		launches: [] as any[],
	}),

	getters: {
		favs(state) {
			return state.launches.filter((l) => l.isFave)
		},
	},

	actions: {
		async getLaunches() {
			const query = `
			query Launches {
				launches {
					id
					mission_name
					launch_date_utc
					details
					launch_site { site_name }
					rocket {
						rocket_name
						rocket {
							description
							first_flight
							diameter { feet meters }
							height { feet meters }
							mass { kg lb }
							stages
						}
					}
				}
			}`

			const { data: response } = await useAsyncData('launches', () =>
				ofetch('https://spacex-production.up.railway.app/', {
					method: 'POST',
					body: { query },
				}),
			)

			const oldLaunchesMap = new Map(this.launches.map((l) => [l.id, l.isFave]))

			this.launches =
				response.value?.data?.launches?.map((launch: any) => ({
					...launch,
					isFave: oldLaunchesMap.get(launch.id) ?? false,
				})) ?? []
		},

		toggleFavorite(id: string) {
			const launch = this.launches.find((l) => l.id === id)
			if (launch) {
				launch.isFave = !launch.isFave
				console.log(`[toggleFavorite] Launch ${id} isFave: ${launch.isFave}`)
			}
		},

		clearFavs() {
			this.launches = this.launches.map((launch) => ({
				...launch,
				isFave: false,
			}))
		},
	},
})
