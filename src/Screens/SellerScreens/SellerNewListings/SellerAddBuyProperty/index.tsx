import { useEffect, useState } from 'react';
import { Container, TextField, Stack, Chip, Typography } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { setSellerBuyListing } from 'Store/actions';

const typeOptions = [
	"Apartment",
	"Independent Floor",
	"Independent House",
	"Villa"
];

const constructionOptions = [
	"Ready To Move",
	"Under Construction"
];

const bhkOptions = [
	"1RK",
	"1 BHK",
	"2 BHK",
	"3 BHK",
];

const bathroomOptions = [
	"0",
	"1",
	"2",
	"3",
	"4",
];

const balconyOptions = [
	"0",
	"1",
	"2",
	"3",
	"4",
];

const furnitureOptions = [
	"Fully Furnished",
	"Semi Furnished",
	"Unfurnished"
];

const coveredParkingOptions = [
	"0",
	"1",
	"2",
	"3",
	"4",
];

const openParkingOptions = [
	"0",
	"1",
	"2",
	"3",
	"4",
];

export default function SellerAddBuyProperty() {
	const dispatch = useDispatch();
	const { buyProperty } = useSelector((state: RootStateOrAny) => state.sellerListing);

	const [data, setData] = useState({
		propertyType: "",
		constructionStatus: "",
		propertyBhk: "",
		propertyBathroom: "",
		propertyBalcony: "",
		propertyFurniture: "",
		propertyCoveredParking: "",
		propertyOpenParking: "",
		propertyCost: "",
		propertyMaintenanceCost: "",
		propertyArea: "",
		propertyCarpetArea: ""
	});
	const [propertyAge, setPropertyAge] = useState<String>("");
	const [propertyPossessionDate, setPropertyPossessionDate] = useState<any>();

	useEffect(() => {
		dispatch(setSellerBuyListing({ ...buyProperty, ...data, propertyAge, propertyPossessionDate }));
	}, [data, propertyAge, propertyPossessionDate]);

	const handleChange = (prop: keyof any) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, [prop]: event.target.value });
	};

	const handleInputChange = (value: string, variable: string) => {
		setData({ ...data, [variable]: value })
	};

	return (
		<div>
			{/* propertyType */}
			<Container sx={{ my: 4, mx: 0, px: 0 }}>
				<Typography>Property Type *</Typography>
				<Stack direction="row" spacing={1}>
					{typeOptions.map((label, index) => {
						return (
							<Chip
								key={index.toString()}
								label={label}
								variant={data.propertyType === label ? "filled" : "outlined"}
								color="secondary"
								clickable={true}
								onClick={() => handleInputChange(label, "propertyType")}
							/>
						)
					})
					}
				</Stack>
			</Container>

			{/* constructionStatus */}
			<Container sx={{ my: 4, mx: 0, px: 0 }}>
				<Typography>Construction Status *</Typography>
				<Stack direction="row" spacing={1}>
					{constructionOptions.map((label, index) => {
						return (
							<Chip
								key={index.toString()}
								label={label}
								variant={data.constructionStatus === label ? "filled" : "outlined"}
								color="secondary"
								clickable={true}
								onClick={() => handleInputChange(label, "constructionStatus")}
							/>
						)
					})
					}
				</Stack>
			</Container>

			{/* propertyBhk */}
			<Container sx={{ my: 4, mx: 0, px: 0 }}>
				<Typography>BHK *</Typography>
				<Stack direction="row" spacing={1}>
					{bhkOptions.map((label, index) => {
						return (
							<Chip
								key={index.toString()}
								label={label}
								variant={data.propertyBhk === label ? "filled" : "outlined"}
								color="secondary"
								clickable={true}
								onClick={() => handleInputChange(label, "propertyBhk")}
							/>
						)
					})
					}
				</Stack>
			</Container>

			{/* propertyBathroom */}
			<Container sx={{ my: 4, mx: 0, px: 0 }}>
				<Typography>Bathroom *</Typography>
				<Stack direction="row" spacing={1}>
					{bathroomOptions.map((label, index) => {
						return (
							<Chip
								key={index.toString()}
								label={label}
								variant={data.propertyBathroom.toString() === label ? "filled" : "outlined"}
								color="secondary"
								clickable={true}
								onClick={() => handleInputChange(label, "propertyBathroom")}
							/>
						)
					})
					}
				</Stack>
			</Container>

			{/* propertyBalcony */}
			<Container sx={{ my: 4, mx: 0, px: 0 }}>
				<Typography>Balcony *</Typography>
				<Stack direction="row" spacing={1}>
					{balconyOptions.map((label, index) => {
						return (
							<Chip
								key={index.toString()}
								label={label}
								variant={data.propertyBalcony.toString() === label ? "filled" : "outlined"}
								color="secondary"
								clickable={true}
								onClick={() => handleInputChange(label, "propertyBalcony")}
							/>
						)
					})
					}
				</Stack>
			</Container>

			{/* propertyFurniture */}
			<Container sx={{ my: 4, mx: 0, px: 0 }}>
				<Typography>Furnish Type *</Typography>
				<Stack direction="row" spacing={1}>
					{furnitureOptions.map((label, index) => {
						return (
							<Chip
								key={index.toString()}
								label={label}
								variant={data.propertyFurniture === label ? "filled" : "outlined"}
								color="secondary"
								clickable={true}
								onClick={() => handleInputChange(label, "propertyFurniture")}
							/>
						)
					})
					}
				</Stack>
			</Container>

			{/* propertyCoveredParking */}
			<Container sx={{ my: 4, mx: 0, px: 0 }}>
				<Typography>Convered Parking *</Typography>
				<Stack direction="row" spacing={1}>
					{coveredParkingOptions.map((label, index) => {
						return (
							<Chip
								key={index.toString()}
								label={label}
								variant={data.propertyCoveredParking.toString() === label ? "filled" : "outlined"}
								color="secondary"
								clickable={true}
								onClick={() => handleInputChange(label, "propertyCoveredParking")}
							/>
						)
					})
					}
				</Stack>
			</Container>

			{/* propertyOpenParking */}
			<Container sx={{ my: 4, mx: 0, px: 0 }}>
				<Typography>Open Parking *</Typography>
				<Stack direction="row" spacing={1}>
					{openParkingOptions.map((label, index) => {
						return (
							<Chip
								key={index.toString()}
								label={label}
								variant={data.propertyOpenParking.toString() === label ? "filled" : "outlined"}
								color="secondary"
								clickable={true}
								onClick={() => handleInputChange(label, "propertyOpenParking")}
							/>
						)
					})
					}
				</Stack>
			</Container>

			{
				{
					"Ready To Move":
						<>
							<Container sx={{ my: 4, mx: 0, px: 0 }} >
								<TextField
									id="outlined-property-age-input"
									label="Property Age"
									type="number"
									value={propertyAge}
									required
									onChange={(event) => setPropertyAge(event.target.value)}
									inputProps={{
										className: "inputTextStyle",
										placeholder: "Property Age"
									}}
									variant="standard"
								/>
							</Container>
						</>,
					"Under Construction":
						<>
							<Container sx={{ my: 4, mx: 0, px: 0 }} >
								<DesktopDatePicker
									label="Possession Date"
									inputFormat="MM/DD/yyyy"
									value={propertyPossessionDate}
									onChange={(event: Date | null) => setPropertyPossessionDate(event?.toISOString())}
									renderInput={(params: any) => <TextField {...params} />}
								/>
							</Container>
						</>
				}[data.constructionStatus]
			}

			{/* propertyCost */}
			<Container sx={{ my: 4, mx: 0, px: 0 }} >
				<TextField
					id="outlined-property-cost-input"
					label="Property Cost"
					type="number"
					value={data.propertyCost}
					required
					onChange={handleChange('propertyCost')}
					inputProps={{
						className: "inputTextStyle",
						placeholder: "Property Cost"
					}}
					variant="standard"
				/>
			</Container>

			{/* propertyMaintenanceCost */}
			<Container sx={{ my: 4, mx: 0, px: 0 }} >
				<TextField
					id="outlined-maintenance-cost-input"
					label="Maintenance Cost"
					type="number"
					value={data.propertyMaintenanceCost}
					required
					onChange={handleChange('propertyMaintenanceCost')}
					inputProps={{
						className: "inputTextStyle",
						placeholder: "Maintenance Cost"
					}}
					variant="standard"
				/>
			</Container>

			{/* propertyArea */}
			<Container sx={{ my: 4, mx: 0, px: 0 }} >
				<TextField
					id="outlined-buildUp-area-input"
					label="Build Up Area"
					type="number"
					value={data.propertyArea}
					required
					onChange={handleChange('propertyArea')}
					inputProps={{
						className: "inputTextStyle",
						placeholder: "Build Up Area"
					}}
					variant="standard"
				/>
			</Container>

			{/* propertyCarpetArea */}
			<Container sx={{ my: 4, mx: 0, px: 0 }} >
				<TextField
					id="outlined-carpet-area-input"
					label="Carpet Area"
					type="number"
					value={data.propertyCarpetArea}
					required
					onChange={handleChange('propertyCarpetArea')}
					inputProps={{
						className: "inputTextStyle",
						placeholder: "Carpet Area"
					}}
					variant="standard"
				/>
			</Container>

		</div>
	)
}