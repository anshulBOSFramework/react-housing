export interface IAddress {
	id?: Number;
	cityName: String;
	propertyDetails: String;
	locality: String;
	flatNo: String;
	floorNo: String;
	totalFloors: String;
}

export const addressBuild = (data: Partial<IAddress>) => {
	return (
		{
			id: data.id ? data.id : 0,
			cityName: data.cityName ? data.cityName : "",
			propertyDetails: data.propertyDetails ? data.propertyDetails : "",
			locality: data.locality ? data.locality : "",
			flatNo: data.flatNo ? data.flatNo : "",
			floorNo: data.floorNo ? data.floorNo : "",
			totalFloors: data.totalFloors ? data.totalFloors : "",
		}
	)
}