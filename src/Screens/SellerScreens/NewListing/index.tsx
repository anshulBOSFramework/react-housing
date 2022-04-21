import { useState, Fragment, ReactNode, useEffect } from 'react';
import { Container, Grid, Box, Stepper, Step, Button, Typography, Chip, Stack, StepLabel } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

// Address Form
import SellerPropertyAddress from '../SellerNewListings/SellerPropertyAddress';

// API
import { createBuyProperty, setSellerBuyListing } from 'Store/actions/sellerListing';

const steps = ['Basic Info', 'Address', 'Photos'];
const propertyOptions = [
	"Residential",
	"Commercial"
];
const serviceOptions = [
	{
		label: "Rent",
		path: "rent"
	}, {
		label: "Buy",
		path: "buy"
	}, {
		label: "PG/ Co-living",
		path: "pg-coliving"
	}
]

export default function NewListing() {
	const dispatch = useDispatch();
	const { isSubmitting, address, buyProperty, rentProperty, pgProperty } = useSelector((state: RootStateOrAny) => state.sellerListing);

	const navigate = useNavigate();

	const [activeStep, setActiveStep] = useState(0);
	const [error, setError] = useState<String>("");

	const [propertyCategory, setPropertyCategory] = useState("");
	const [serviceCategory, setServiceCategory] = useState("");

	useEffect(() => {
		if (propertyCategory === "Residential") {

			if (serviceCategory === "Rent") {

			} else if (serviceCategory === "Buy") {
				dispatch(setSellerBuyListing({ ...buyProperty, propertyCategory, propertyService: serviceCategory }))
			}
		}
	}, [propertyCategory, serviceCategory]);

	const checkFormStatus = (category: string) => {
		switch (category) {
			case "Buy":
				return Object.values(buyProperty).every(x => x === '');
			case "Rent":
				return Object.values(rentProperty).every(x => x === '');
			case "PG/ Co-living":
				return Object.values(pgProperty).every(x => x === '');
			case "address":
				return Object.values(address).every(x => x === '');
			default:
				return true;
		}

	};

	const submitListing = () => {
		switch (serviceCategory) {
			case "Buy": dispatch(createBuyProperty({ ...buyProperty, address: address }));
				return null;
		}
	}

	const handleNext = () => {

		switch (activeStep) {
			case 0:
				var isEmpty = checkFormStatus(serviceCategory);
				if (isEmpty) {
					setError("All The Fields Are Mandatory");
				} else {
					setError("");
					setActiveStep(activeStep + 1)
				}
				return null;
			case 1:
				var isEmpty = checkFormStatus("address");
				if (isEmpty) {
					setError("All The Fields Are Mandatory");
				} else {
					setError("");
					setActiveStep(activeStep + 1)
				}
				return null;
			case 2:
				dispatch(createBuyProperty({ ...buyProperty, address }))
				return null;
			default:
				return null;
		}
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const handleServiceClick = (label: string, path: string) => {
		setServiceCategory(label)
		navigate(path)
	}

	return (
		<Box sx={{ width: '100%' }}>
			<Grid container spacing={2} >
				<Grid item xs={8}>
					<Stepper activeStep={activeStep}>
						{steps.map((label, index) => {
							const stepProps: { completed?: boolean } = {};
							const labelProps: {
								optional?: ReactNode;
							} = {};
							return (
								<Step key={label} {...stepProps}>
									<StepLabel {...labelProps}>{label}</StepLabel>
								</Step>
							);
						})}
					</Stepper>
					{activeStep === steps.length ? (
						<Fragment>
							<Typography sx={{ mt: 2, mb: 1 }}>
								All steps completed - you&apos;re finished
							</Typography>
							<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
								<Box sx={{ flex: '1 1 auto' }} />
								<Button onClick={handleReset}>Add More Property</Button>
							</Box>
						</Fragment>
					) : (
						<Fragment>
							<Typography sx={{ mt: 2, mb: 1 }}>*indicates a mandatory field</Typography>
							{error && <Typography color={"red"} >{error}</Typography>}
							{
								{
									0:
										<>
											{/* Property Category */}
											<Container sx={{ my: 4, mx: 0, px: 0 }}>
												<Typography>I want to *</Typography>
												<Stack direction="row" spacing={1}>
													{propertyOptions.map((label, index) => {
														return (
															<Chip
																key={index.toString()}
																label={label}
																variant={propertyCategory === label ? "filled" : "outlined"}
																color="secondary"
																clickable={true}
																onClick={() => setPropertyCategory(label)}
															/>
														)
													})
													}
												</Stack>
											</Container>

											{/* Property Service */}
											<Container sx={{ my: 4, mx: 0, px: 0 }}>
												<Typography>I want to *</Typography>
												<Stack direction="row" spacing={1}>
													{serviceOptions.map(({ label, path }, index) => {
														return (
															<Chip
																key={index.toString()}
																label={label}
																variant={serviceCategory === label ? "filled" : "outlined"}
																color="secondary"
																clickable={true}
																onClick={() => handleServiceClick(label, path)}
															/>
														)
													})
													}
												</Stack>
											</Container>

											<Outlet key="form" />
										</>,
									1:
										<>
											<SellerPropertyAddress />
										</>,
									2:
										<>
											<Typography>Wowo2</Typography>
										</>
								}[activeStep]
							}

							<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
								<Button
									color="inherit"
									disabled={activeStep === 0}
									onClick={handleBack}
									sx={{ mr: 1 }}
								>
									Back
								</Button>
								<Box sx={{ flex: '1 1 auto' }} />
								<Button onClick={handleNext}>
									{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
								</Button>
							</Box>
						</Fragment>
					)}
				</Grid>
				<Grid item xs={4} >

				</Grid>
			</Grid>
		</Box>
	);
}