import * as types from 'Store/action-types/sellerListing';

import SellerNewListing from 'Services/SellerNewListing';

const fetchSellerProperties = () => async(dispatch) => {
	try {
		const { isSuccess, data } = await SellerNewListing.fetchAllPropertyListing()
		if(isSuccess) {
			dispatch({
				type: types.SET_SELLER_LISTINGS,
				payload: {
					isLoading: false,
					listing: data,
					listingLoadError: ""
				}
			})
		} else {
			dispatch({
				type: types.SET_SELLER_LISTINGS,
				payload: {
					isLoading: false,
					listing: null,
					listingLoadError: "Something Went Wrong"
				}
			})
		}

	} catch (err) {
		dispatch({
			type: types.SET_SELLER_LISTINGS,
			payload: {
				isLoading: false,
				listing: null,
				listingLoadError: `${err}`
			}
		})
	}
}

const createBuyProperty = (params) => async(dispatch) => {

	dispatch({
		type: types.UPDATE_SUBMIT_STATUS,
		payload: {
			isSubmitting: true,
			error: ""
		}
	});

	try {
		const { isSuccess, data } = await SellerNewListing.createBuyProperty(params)

		if(isSuccess) {
			dispatch({
				type: types.UPDATE_SUBMIT_STATUS,
				payload: {
					isSubmitting: false,
					error: ""
				}
			})
		} else {
			dispatch({
				type: types.UPDATE_SUBMIT_STATUS,
				payload: {
					isSubmitting: false,
					error: "Something Went Wrong"
				}
			})
		}

	} catch (err) {
		dispatch({
			type: types.UPDATE_SUBMIT_STATUS,
			payload: {
				isSubmitting: false,
				error: `${err}`
			}
		})
	}
}

const setSellerBuyListing = (params) => (dispatch) => {
	dispatch({
		type: types.UPDATE_BUYER_LISTING,
		payload: {
			buyProperty: params
		}
	})
};

const setSellerListingAddress = (params) => (dispatch) => {
	dispatch({
		type: types.UPDATE_LISTING_ADDRESS,
		payload: {
			address: params
		}
	})
};

export {
	fetchSellerProperties,
	createBuyProperty,
	setSellerBuyListing,
	setSellerListingAddress
}