import { addressBuild, IAddress } from "./address";

export interface IPropertyPG {
	id?: Number;
	userId: Number;
	propertyCategory: String;
	propertyService: String;
	propertyType: String;
	constructionStatus: String;
	propertyAge: Number;
	propertyBhk: Number;
	propertyBathroom: Number;
	propertyBalcony: Number;
	propertyFurniture: String;
	propertyCoveredParking: Number;
	propertyOpenParking: Number;
	propertyCost: Number;
	propertyMaintenanceCost: Number;
	propertyArea: Number;
	propertyCarpetArea: Number;
	propertyPossessionDate: String;
	address?: IAddress
}

export const propertyPGBuild = (data: Partial<IPropertyPG>) => {
	return (
		{
			id: data.id ? data.id : 0,
			userId: data.userId ? data.userId : 0,
			propertyCategory: data.propertyCategory ? data.propertyCategory : "",
			propertyService: data.propertyService ? data.propertyService : "",
			propertyType: data.propertyType ? data.propertyType : "",
			constructionStatus: data.constructionStatus ? data.constructionStatus : "",
			propertyAge: data.propertyAge ? (typeof (data.propertyAge) === "string" ? parseFloat(data.propertyAge) : data.propertyAge) : 0.0,
			propertyBhk: data.propertyBhk ? (typeof (data.propertyBhk) === "string" ? parseFloat(data.propertyBhk) : data.propertyBhk) : 0.0,
			propertyBathroom: data.propertyBathroom ? (typeof (data.propertyBathroom) === "string" ? parseFloat(data.propertyBathroom) : data.propertyBathroom) : 0.0,
			propertyBalcony: data.propertyBalcony ? (typeof (data.propertyBalcony) === "string" ? parseFloat(data.propertyBalcony) : data.propertyBalcony) : 0.0,
			propertyFurniture: data.propertyFurniture ? data.propertyFurniture : "",
			propertyCoveredParking: data.propertyCoveredParking ? (typeof (data.propertyCoveredParking) === "string" ? parseFloat(data.propertyCoveredParking) : data.propertyCoveredParking) : 0.0,
			propertyOpenParking: data.propertyOpenParking ? (typeof (data.propertyOpenParking) === "string" ? parseFloat(data.propertyOpenParking) : data.propertyOpenParking) : 0.0,
			propertyCost: data.propertyCost ? (typeof (data.propertyCost) === "string" ? parseFloat(data.propertyCost) : data.propertyCost) : 0.0,
			propertyMaintenanceCost: data.propertyMaintenanceCost ? (typeof (data.propertyMaintenanceCost) === "string" ? parseFloat(data.propertyMaintenanceCost) : data.propertyMaintenanceCost) : 0.0,
			propertyArea: data.propertyArea ? (typeof (data.propertyArea) === "string" ? parseFloat(data.propertyArea) : data.propertyArea) : 0.0,
			propertyCarpetArea: data.propertyCarpetArea ? (typeof (data.propertyCarpetArea) === "string" ? parseFloat(data.propertyCarpetArea) : data.propertyCarpetArea) : 0.0,
			propertyPossessionDate: data.propertyPossessionDate ? data.propertyPossessionDate : "",
			address: data.address ? addressBuild(data.address) : {}
		}
	)
}