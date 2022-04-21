import * as types from 'Store/action-types/sellerListing';

const INITIAL_STATE = {
	isSubmitting: false,
	error: "",
	address: {
		cityName: "",
		projectDetails: "",
		locality: "",
		flatNo: "",
		floorNo: "",
		totalFloors: ""
	},
	buyProperty: {
		propertyCategory: "",
		propertyService: "",
		propertyType: "",
		constructionStatus: "",
		propertyAge: "0",
		propertyBhk: "",
		propertyBathroom: "",
		propertyBalcony: "",
		propertyFurniture: "",
		propertyCoveredParking: "",
		propertyOpenParking: "",
		propertyCost: "",
		propertyMaintenanceCost: "",
		propertyArea: "",
		propertyCarpetArea: "",
		propertyPossessionDate: ""
	},
	rentProperty: {
		propertyCategory: "",
		propertyService: "",
		propertyType: "",
		propertyAge: "",
		propertyBhk: "",
		propertyBalcony: "",
		propertyFurniture: "",
		propertyCoveredParking: "",
		propertyOpenParking: "",
		propertyAvailable: "",
		propertyMonthlyRent: "",
		propertyMaintenanceCost: "",
		propertyDeposit: "",
		propertyArea: "",
		propertyCarpetArea: "",
		propertyTenantType: "",
	},
	pgProperty: {

	},
	isLoading: true,
	listing: null,
	listingLoadError: ""
}

export const sellerListing = (state = INITIAL_STATE, action: any) => {
	const { type, payload } = action;
	switch (type) {

		// Set Loading
		case types.SET_SELLER_LISTING_LOADING:
			return {
				...state,
				isLoading: payload.isLoading
			}

		case types.SET_SELLER_LISTINGS:
			return {
				...state,
				isLoading: payload.isLoading,
				listing: payload.listing,
				listingLoadError: payload.listingLoadError
			}

		// Update Submitting Status
		case types.UPDATE_SUBMIT_STATUS:
			return {
				...state,
				isSubmitting: payload.isSubmitting,
				error: payload.error
			}

		// Update Buyer Listing
		case types.UPDATE_BUYER_LISTING:
			return {
				...state,
				buyProperty: payload.buyProperty
			}

		// Update Listing Address
		case types.UPDATE_LISTING_ADDRESS:
			return {
				...state,
				address: payload.address
			}

		// Clear Listing Form
		case types.CLEAR_LISTING_FORM:
			return {
				...INITIAL_STATE,
			}
		default:
			return state
	}
}