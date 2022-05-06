import { addressBuild, IAddress } from "./address";

export interface IPropertyPG {
	id?: Number;
	userId: Number;
	propertyCategory: String;
	propertyService: String;
	propertyName: String;
	propertyBeds: Number;
	propertyPGType: String;
	propertySuited: Number;
	propertyMeals: Boolean;
	propertyNotice: String;
	propertyLock: String;
	propertyCommonArea: String;
	propertyManaged: String;
	propertyIsManaged: Boolean;
	isNonVeg: Boolean;
	isOppositeSex: Boolean;
	isAnyTimeAllowed: Boolean;
	isVisitorAllowed: Boolean;
	isGuardianAllowed: Boolean;
	isDrinkingAllowed: Boolean;
	isSmokingAllowed: Boolean;
	address?: IAddress
}

export const propertyPGBuild = (data: Partial<IPropertyPG>) => {
	return (
		{
			id: data.id ? data.id : 0,
			userId: data.userId ? data.userId : 0,
			propertyCategory: data.propertyCategory ? data.propertyCategory : "",
			propertyService: data.propertyService ? data.propertyService : "",
			propertyName: data.propertyName ? data.propertyName : "",
			propertyBeds: data.propertyBeds ? (typeof (data.propertyBeds) === "string" ? parseFloat(data.propertyBeds) : data.propertyBeds) : 0,
			address: data.address ? addressBuild(data.address) : {}
		}
	)
}