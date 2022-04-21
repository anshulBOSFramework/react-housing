import React, { useEffect, useState } from 'react';
import { Container, Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSellerListingAddress } from 'Store/actions';

interface State {
	cityName: String,
	projectDetails: String,
	locality: String,
	flatNo: String,
	floorNo: String,
	totalFloors: String
}

export default function SellerPropertyAddress() {
	const dispatch = useDispatch();

	const [data, setData] = useState<State>({
		cityName: "",
		projectDetails: "",
		locality: "",
		flatNo: "",
		floorNo: "",
		totalFloors: ""
	});

	useEffect(() => {
		dispatch(setSellerListingAddress(data));
	}, [data])

	const handleChange = (prop: keyof any) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, [prop]: event.target.value });
	};

	return (
		<>

			<Grid container spacing={2} >

				<Grid item xs={6} >
					{/* cityName */}
					<Container sx={{ my: 4, mx: 0, px: 0 }} >
						<TextField
							id="outlined-city-name-input"
							label="City Name"
							type={"text"}
							value={data.cityName}
							required
							onChange={handleChange('cityName')}
							inputProps={{
								className: "inputTextStyle",
								placeholder: "City Name"
							}}
							variant="standard"
						/>
					</Container>

					{/* projectDetails */}
					<Container sx={{ my: 4, mx: 0, px: 0 }} >
						<TextField
							id="outlined-property-details-input"
							label="Project Details"
							type={"text"}
							value={data.projectDetails}
							required
							onChange={handleChange('projectDetails')}
							inputProps={{
								className: "inputTextStyle",
								placeholder: "Project Details"
							}}
							variant="standard"
						/>
					</Container>

					{/* floorNo */}
					<Container sx={{ my: 4, mx: 0, px: 0 }} >
						<TextField
							id="outlined-floorNo-input"
							label="Floor No."
							type={"number"}
							value={data.floorNo}
							required
							onChange={handleChange('floorNo')}
							inputProps={{
								className: "inputTextStyle",
								placeholder: "Floor No."
							}}
							variant="standard"
						/>
					</Container>
				</Grid>

				<Grid item xs={6} >
					{/* locality */}
					<Container sx={{ my: 4, mx: 0, px: 0 }} >
						<TextField
							id="outlined-locality-input"
							label="Locality"
							type="text"
							value={data.locality}
							required
							onChange={handleChange('locality')}
							inputProps={{
								className: "inputTextStyle",
								placeholder: "Locality"
							}}
							variant="standard"
						/>
					</Container>

					{/* flatNo */}
					<Container sx={{ my: 4, mx: 0, px: 0 }} >
						<TextField
							id="outlined-flatNo-input"
							label="Flat No."
							type={"number"}
							value={data.flatNo}
							required
							onChange={handleChange('flatNo')}
							inputProps={{
								className: "inputTextStyle",
								placeholder: "Flat No."
							}}
							variant="standard"
						/>
					</Container>

					{/* totalFloors */}
					<Container sx={{ my: 4, mx: 0, px: 0 }} >
						<TextField
							id="outlined-total-floors-input"
							label="Total Floors"
							type={"number"}
							value={data.totalFloors}
							required
							onChange={handleChange('totalFloors')}
							inputProps={{
								className: "inputTextStyle",
								placeholder: "Total Floors"
							}}
							variant="standard"
						/>
					</Container>

				</Grid>

			</Grid>

		</>
	)
}