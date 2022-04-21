import { API, URL_PATH } from 'Services/API';

import { store } from 'Store';

class SellerNewListing {

	async createBuyProperty(params) {
		const { authToken, userData: { id } } = store.getState().authentication;

		const res = await API
			.post(URL_PATH.sellerListing.buyProperty, {
				userId: id,
				...params
			}, {
				headers: {
					"Authorization": `bearer ${authToken}`
				}
			})
			.then((response) => {
				return {
					isSuccess: true,
					data: response.data
				}
			})
			.catch((error) => {
				return {
					isSuccess: false,
					data: "Something Went Wrong"
				}
			})

		return res;
	}

	async createRentProperty(params) {
		const { authToken, userData: { id } } = store.getState().authentication;

		const res = await API
			.post(URL_PATH.sellerListing.rentProperty, {
				...params,
				userId: id
			}, {
				headers: {
					"Authorization": `bearer ${authToken}`
				}
			})
			.then((response) => {

				console.log("RENT PROPERTY ADDED => ", response);

				return {
					isSuccess: true,
					data: response.data
				}
			})
			.catch((error) => {

				console.log("RENT PROPERTY Error => ", error);

				return {
					isSuccess: false,
					data: "Something Went Wrong"
				}
			})

		return res;
	}

	async fetchAllPropertyListing() {
		const { authToken, userData: { id } } = store.getState().authentication;
		
		const res = await API
			.get(`${URL_PATH.sellerListing.fetchProperties}/${id}`, {
				headers: {
					"Authorization": `bearer ${authToken}`
				}
			})
			.then((response) => {
				return {
					isSuccess: true,
					data: response.data
				}
			})
			.catch((error) => {
				return {
					isSuccess: false,
					data: "Something Went Wrong"
				}
			})

		return res;
	}
}

export default new SellerNewListing;