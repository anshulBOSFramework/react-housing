import { API, URL_PATH } from 'Services/API';

import { store } from 'Store';

class AuthServices {

	async loginUser(email, password) {
		const params = {
			"email": email,
			"password": password
		};

		const res = await API
			.post(URL_PATH.user.login, params)
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

	async registerUser(params) {

		const res = await API
			.post(URL_PATH.user.regiser, params)
			.then((response) => {
				return {
					isSuccess: true,
					data: response.data
				}
			})
			.catch((error) => {
				console.log("ERR => ", error)
				return {
					isSuccess: false,
					data: "Something Went Wrong"
				}
			})

		return res;
	}

	async updateUser({ userData }) {

		const token = store.getState().authentication.authToken;

		const res = await API
			.put(URL_PATH.user.update, {
				name: userData.name,
				email: userData.email,
				phone: userData.phone,
				password: userData.password,
				accountCategory: userData.accountCategory
			}, {
				headers: {
					"Authorization": `bearer ${token}`
				}
			})
			.then((response) => {

				console.log("User Update Positive +> ", response)

				return {
					isSuccess: true,
					data: response.data
				}
			})
			.catch((error) => {

				console.log("User Update Positive +> ", error)

				return {
					isSuccess: false,
					data: "Something Went Wrong"
				}
			})

		return res;
	}
}

export default new AuthServices;