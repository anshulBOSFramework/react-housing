import * as types from 'Store/action-types/authentication';
// import { buyerBuildInfo, sellerBuildInfo } from './../utils'

// API
import AuthServices from 'Services/AuthServices';

const setAuthLoader = (params) => (dispatch) => {
	dispatch({
		type: types.SET_AUTH_LOADER,
		payload: {
			isLoading: params.isLoading
		}
	})
}

const setSnackBarMessage = (params) => (dispatch) => {
	dispatch({
		type: types.SET_SNACK_MESSAGE,
		payload: {
			message: params.message
		}
	})
}

const resetInfo = ({ data }) => async(dispatch) => {
	try {
		dispatch({
			type: types.CLEAR_AUTH,
			payload: {
				isAuth: data,
				message: `Logged Out Successfully`
			}
		})
	} catch(err) {
		dispatch({
			type: types.CLEAR_AUTH,
			payload: {
				isAuth: true,
				message: `${err}`
			}
		})
	}
} 

const loginUser = (params) => async(dispatch) => {
	const { email, password } = params;

	dispatch({
		type: types.SET_SNACK_MESSAGE,
		payload: {
			message: "Logging In"
		}
	})
	
	try {
		const { isSuccess, data } = await AuthServices.loginUser(email, password);
		if(isSuccess) {
			dispatch({
				type: types.SET_AUTH,
				payload: {
					isLoading: false,
					isAuth: true,
					error: "",
					authToken: data.token,
					userRole: data.user.accountCategory,
					userData: data.user,
					message: ""
				}
			})
		} else {
			dispatch({
				type: types.SET_AUTH,
				payload: {
					isLoading: false,
					isAuth: false,
					error: `${data}`,
					authToken: "",
					userRole: "",
					userData: null,
					message: `${data}`
				}
			})
		}
	} catch(err) {
		dispatch({
			type: types.SET_AUTH,
			payload: {
				isLoading: false,
				isAuth: false,
				error: `${err.code}`,
				authToken: "",
				userRole: "",
				userData: null,
				message: ""
			}
		})
	}
}

const forgotPassword = (params) => async(dispatch) => {
	const { email } = params;

	// try {
	// 	const { isSuccess, data } = await AuthServices.forgotPassword(email);
	// 	if(isSuccess) {
	// 		dispatch({
	// 			type: types.RESET_PASSWORD,
	// 			payload: {
	// 				error: "",
	// 				message: "Reset Details Sent on registered mailID"
	// 			}
	// 		})
	// 	} else {
	// 		dispatch({
	// 			type: types.RESET_PASSWORD,
	// 			payload: {
	// 				error: `${data}`,
	// 				message: ""
	// 			}
	// 		})
	// 	}
	// } catch(err) {
	// 	dispatch({
	// 		type: types.RESET_PASSWORD,
	// 		payload: {
	// 			error: `${err.code}`,
	// 			message: ""
	// 		}
	// 	})
	// }
}

const registerUser = (params) => async(dispatch) => {

	try {
		const { isSuccess, data } = await AuthServices.registerUser(params);

		if(isSuccess) {
			dispatch({
				type: types.SET_AUTH,
				payload: {
					isLoading: false,
					isAuth: true,
					error: "",
					authToken: data.token,
					userRole: data.user.accountCategory,
					userData: data.user,
					message: ""
				}
			})
		} else {
			dispatch({
				type: types.SET_AUTH,
				payload: {
					isLoading: false,
					isAuth: false,
					error: `${data}`,
					authToken: "",
					userRole: "",
					userData: null,
					message: `${data}`
				}
			})
		}
	} catch(err) {
		dispatch({
			type: types.SET_AUTH,
			payload: {
				isLoading: false,
				isAuth: false,
				error: `${err.code}`,
				authToken: "",
				userRole: "",
				userData: null,
				message: ""
			}
		})
	}
}

const setUserData = (params) => async(dispatch) => {
	const { uid, email, userRole } = params;
	var userInfo;
	var collection;

	// if (userRole === "Buyer") {
	// 	userInfo = buyerBuildInfo({ uid: uid, email: email, userRole: userRole })
	// 	collection = "Buyer"
	// } else if (userRole === "Seller") {
	// 	userInfo = sellerBuildInfo({ uid: uid, email: email, userRole: userRole })
	// 	collection = "Seller"
	// }
	// try {
	// 	const { isSuccess, data } = await AuthServices.setUserInfo(userInfo, uid, collection)
	// 	if(isSuccess) {
	// 		dispatch({
	// 			type: types.SET_USER_DATA,
	// 			payload: {
	// 				isLoading: false,
	// 				isData: true,
	// 				error: "",
	// 				userInfo: userInfo,
	// 				userRole: userRole,
	// 				message: ""
	// 			}
	// 		})
	// 	} else {
	// 		dispatch({
	// 			type: types.SET_USER_DATA,
	// 			payload: {
	// 				isLoading: false,
	// 				isData: false,
	// 				error: `${data}`,
	// 				userInfo: null,
	// 				userRole: "",
	// 				message: ""
	// 			}
	// 		})
	// 	}
	// } catch(err) {
	// 	dispatch({
	// 		type: types.SET_USER_DATA,
	// 		payload: {
	// 			isLoading: false,
	// 			isData: false,
	// 			error: `${err.code}`,
	// 			userInfo: null,
	// 			userRole: "",
	// 			message: ""
	// 		}
	// 	})
	// }
}

const fetchUserData = (params) => async(dispatch) => {
	const { uid } = params;

	// try {
	// 	const { isSuccess, data } = await AuthServices.fetchUserInfo(uid)

	// 	if(isSuccess) {
	// 		dispatch({
	// 			type: types.SET_USER_DATA,
	// 			payload: {
	// 				isLoading: false,
	// 				isData: true,
	// 				error: "",
	// 				userInfo: data,
	// 				userRole: data.userRole,
	// 				message: ""
	// 			}
	// 		})
	// 	} else {
	// 		dispatch({
	// 			type: types.SET_USER_DATA,
	// 			payload: {
	// 				isLoading: false,
	// 				isData: false,
	// 				error: `${data}`,
	// 				userInfo: null,
	// 				userRole: "",
	// 				message: ""
	// 			}
	// 		})
	// 	}

	// } catch(err) {
	// 	dispatch({
	// 		type: types.SET_USER_DATA,
	// 		payload: {
	// 			isLoading: false,
	// 			isData: false,
	// 			error: `${err.code}`,
	// 			userInfo: null,
	// 			userRole: "",
	// 			message: ""
	// 		}
	// 	})
	// }
}

const updateUserData = (params) => async(dispatch) => {

	try {
		const { isSuccess, data } = await AuthServices.updateUser(params)

		if(isSuccess) {
			dispatch({
				type: types.UPDATE_USER_DATA,
				payload: {
					isLoading: false,
					isData: true,
					error: "",
					userData: data,
					message: ""
				}
			})
		} else {
			dispatch({
				type: types.UPDATE_USER_DATA,
				payload: {
					isLoading: false,
					isData: false,
					error: `${data}`,
					userData: null,
					message: ""
				}
			})
		}

	} catch(err) {
		dispatch({
			type: types.UPDATE_USER_DATA,
			payload: {
				isLoading: false,
				isData: false,
				error: `${err.code}`,
				userData: null,
				message: ""
			}
		})
	}
}

const updateUserImage = (params) => async(dispatch) => {
	const { imageURI, uid, userRole, userInfo } = params;

	var file_name_array = imageURI.local.name.split(".");
	var file_extension = file_name_array[file_name_array.length - 1];

	if(!["JPEG", "JPG", "PNG"].includes(file_extension.toUpperCase())) {
		return alert("Invalid File Extension")
	}

	// try {
	// 	const { isSuccess, isURLAvailable, data } = await AuthServices.uploadImage(imageURI.local, uid, userRole);

	// } catch (err) {
	// 	dispatch({
	// 		type: types.UPDATE_USER_DATA,
	// 		payload: {
	// 			isLoading: false,
	// 			isData: false,
	// 			error: `${err.code}`,
	// 			userInfo: null,
	// 			message: ""
	// 		}
	// 	})
	// }
}


export {
	setAuthLoader,
	setSnackBarMessage,
	resetInfo,
	loginUser,
	forgotPassword,
	registerUser,
	setUserData,
	fetchUserData,
	updateUserData,
	updateUserImage
}