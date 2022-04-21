import { PURGE } from 'redux-persist'

import * as types from 'Store/action-types/authentication';

const INITIAL_STATE = {
	isLoading: false,
	isAuth: false,
	authToken: "",
	userRole: "",
	userData: null,
	error: "",
	message: "",
}

export const authentication = (state = INITIAL_STATE, action: any) => {
	const { type, payload } = action;
	switch (type) {

		// Auth Loader
		case types.SET_AUTH_LOADER:
			return {
				...state,
				isLoading: payload.isLoading
			}

		// Reset Password
		case types.RESET_PASSWORD:
			return {
				...state,
				message: payload.message,
				error: payload.error,
			}

		// Login Auth Data
		case types.SET_AUTH:
			return {
				...state,
				isLoading: payload.isLoading,
				isAuth: payload.isAuth,
				error: payload.error,
				authToken: payload.authToken,
				userRole: payload.userRole,
				userData: payload.userData,
				message: payload.message
			}
		case types.UPDATE_USER_DATA:
			return {
				...state,
				isLoading: payload.isLoading,
				error: payload.error,
				userData: payload.userData,
				message: payload.message,
			}

		// SNACK BAR MESSAGE
		case types.SET_SNACK_MESSAGE:
			return {
				...state,
				message: payload.message
			}

		// Sign out User
		case types.CLEAR_AUTH:
			if (payload.isAuth) {
				return {
					...state,
					isAuth: payload.isAuth,
					message: payload.message
				}
			} else {
				return {
					...INITIAL_STATE,
					message: payload.message
				}
			}

		case PURGE:
			return { ...state }
		default:
			return state
	}
}