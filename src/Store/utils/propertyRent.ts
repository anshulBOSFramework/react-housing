import { addressBuild, IAddress } from "./address";

export interface IPropertyRent {
	id?: Number;
	userId: Number;
	propertyCategory: String;
	propertyService: String;
	propertyType: String;
	propertyAge: Number;
	propertyBhk: Number;
	propertyBalcony: Number;
	propertyFurniture: String;
	propertyCoveredParking: Number;
	propertyOpenParking: Number;
	propertyAvailable: Number;
	propertyMonthlyRent: Number;
	propertyMaintenanceCost: Number;
	propertyDeposit: Boolean;
	propertyArea: Number;
	propertyCarpetArea: Number;
	propertyTenantType: String;
	address?: IAddress
}

export const propertyRentBuild = (data: Partial<IPropertyRent>) => {
	return (
		{
			id: data.id ? data.id : 0,
			userId: data.userId ? data.userId : 0,
			propertyCategory: data.propertyCategory ? data.propertyCategory : "",
			propertyService: data.propertyService ? data.propertyService : "",
			propertyType: data.propertyType ? data.propertyType : "",
			propertyAge: data.propertyAge ? (typeof (data.propertyAge) === "string" ? parseFloat(data.propertyAge) : data.propertyAge) : 0.0,
			propertyBhk: data.propertyBhk ? (typeof (data.propertyBhk) === "string" ? parseFloat(data.propertyBhk) : data.propertyBhk) : 0.0,
			propertyBalcony: data.propertyBalcony ? (typeof (data.propertyBalcony) === "string" ? parseFloat(data.propertyBalcony) : data.propertyBalcony) : 0.0,
			propertyFurniture: data.propertyFurniture ? data.propertyFurniture : "",
			propertyCoveredParking: data.propertyCoveredParking ? (typeof (data.propertyCoveredParking) === "string" ? parseFloat(data.propertyCoveredParking) : data.propertyCoveredParking) : 0.0,
			propertyOpenParking: data.propertyOpenParking ? (typeof (data.propertyOpenParking) === "string" ? parseFloat(data.propertyOpenParking) : data.propertyOpenParking) : 0.0,
			propertyAvailable: data.propertyAvailable ? (typeof (data.propertyAvailable) === "string" ? parseFloat(data.propertyAvailable) : data.propertyAvailable) : 0.0,
			propertyMonthlyRent: data.propertyMonthlyRent ? (typeof (data.propertyMonthlyRent) === "string" ? parseFloat(data.propertyMonthlyRent) : data.propertyMonthlyRent) : 0.0,
			propertyMaintenanceCost: data.propertyMaintenanceCost ? (typeof (data.propertyMaintenanceCost) === "string" ? parseFloat(data.propertyMaintenanceCost) : data.propertyMaintenanceCost) : 0.0,
			propertyDeposit: data.propertyDeposit ? (typeof (data.propertyDeposit) === "string" ? parseFloat(data.propertyDeposit) : data.propertyDeposit) : 0.0,
			propertyArea: data.propertyArea ? (typeof (data.propertyArea) === "string" ? parseFloat(data.propertyArea) : data.propertyArea) : 0.0,
			propertyCarpetArea: data.propertyCarpetArea ? (typeof (data.propertyCarpetArea) === "string" ? parseFloat(data.propertyCarpetArea) : data.propertyCarpetArea) : 0.0,
			propertyTenantType: data.propertyTenantType ? data.propertyTenantType : "",
			address: data.address ? addressBuild(data.address) : {}
		}
	)
}