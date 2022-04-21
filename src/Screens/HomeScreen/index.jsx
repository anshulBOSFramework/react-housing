import { Button } from '@mui/material';

import SellerNewListing from 'Services/SellerNewListing';
import { addressBuild, propertyRentBuild } from 'Store/utils';

export default function HomeScreen() {

	const addRentProperty = async() => {
		var res = {
			userId: 0,
			propertyCategory: "string",
			propertyService: "string",
			propertyType: "string",
			propertyAge: "0",
			propertyBhk: "0",
			propertyBathroom: "0",
			propertyBalcony: "0",
			propertyFurniture: "string",
			propertyCoveredParking: "0",
			propertyOpenParking: "0",
			propertyAvailable: "0",
			propertyMonthlyRent: "0",
			propertyMaintenanceCost: "0",
			propertyDeposit: true,
			propertyArea: "0",
			propertyCarpetArea: "0",
			propertyTenantType: "string",
			address: {
			  cityName: "string",
			  projectDetails: "string",
			  locality: "string",
			  flatNo: "string",
			  floorNo: "string",
			  totalFloors: "string"
			}
		}

		var updateBuild = propertyRentBuild(res);

		const val = await SellerNewListing.createRentProperty(updateBuild);

	}

	return (
		<div>
			<h1>
				Home Screen
			</h1>

			<Button onClick={() => addRentProperty()} >
				Add Rent Property
			</Button>
		</div>
	)
}