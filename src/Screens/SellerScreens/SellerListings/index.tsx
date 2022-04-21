import { useEffect, useState } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { Grid, Typography, Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Divider, List, ListItemButton, Collapse, ListItemText } from '@mui/material';

import { ExpandLess, ExpandMore } from '@mui/icons-material';

import { fetchSellerProperties } from 'Store/actions';

const defaultResidentialExpansion = {
	buy: false,
	rent: false,
	pg: false
}

export default function SellerListings() {
	const dispatch = useDispatch();
	const { isLoading, listing, listingLoadError } = useSelector((state: RootStateOrAny) => state.sellerListing);

	const [data, setData] = useState<any>({
		buyList: [],
		rentList: [],
		pgList: []
	});
	const [propertyType, setPropertyType] = useState<String>("residential");
	const [openResidential, setOpenResidential] = useState<any>({
		buy: false,
		rent: false,
		pg: false
	});

	useEffect(() => {
		dispatch(fetchSellerProperties());
	}, []);

	useEffect(() => {
		if (listing) {
			setData({ ...listing })
		}
	}, [listing]);

	const getKey = () => {
		for (var key in openResidential) {
			if (openResidential[key] === true) {
				return key;
			}
		}
		return null;
	};

	const handleExpandResidential = (key: string) => {
		const val = openResidential[`${key}`];
		setOpenResidential({ ...defaultResidentialExpansion, [key]: !val })
	};

	return (
		<div>
			<h1>
				Seller Listings
			</h1>

			<Grid container spacing={2}>
				<Grid item xs={3} >
					<Box
						sx={{
							boxShadow: 2,
							bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
							color: (theme) =>
								theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
							py: 3,
							px: 2,
							borderRadius: 2,
							fontSize: '0.875rem',
							fontWeight: '700',
						}}
					>

						<FormControl>
							<FormLabel id="radio-buttons-group-label">Show</FormLabel>
							<RadioGroup
								aria-labelledby="radio-buttons-group-label"
								defaultValue="Residential"
								name="radio-buttons-group"
							>
								<FormControlLabel value="Residential" control={<Radio />} label="Residential Properties" />
								<FormControlLabel value="Commercial" control={<Radio />} label="Commercial Properties" />
							</RadioGroup>
						</FormControl>

						<Divider variant="middle" sx={{ my: 2 }} />

						<List>
							<ListItemButton onClick={() => handleExpandResidential("buy")}>
								<ListItemText primary={`Buy ( ${data.buyList.length} )`} />
								{openResidential && openResidential.buy ? <ExpandLess /> : <ExpandMore />}
							</ListItemButton>
							<Collapse in={openResidential && openResidential.buy} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItemButton sx={{ pl: 4 }}>
										<ListItemText primary="Starred" />
									</ListItemButton>
								</List>
							</Collapse>

							<ListItemButton onClick={() => handleExpandResidential("rent")}>
								<ListItemText primary={`Rent ( ${data.rentList.length} )`} />
								{openResidential && openResidential.rent ? <ExpandLess /> : <ExpandMore />}
							</ListItemButton>
							<Collapse in={openResidential && openResidential.rent} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItemButton sx={{ pl: 4 }}>
										<ListItemText primary="Starred" />
									</ListItemButton>
								</List>
							</Collapse>

							<ListItemButton onClick={() => handleExpandResidential("pg")}>
								<ListItemText primary={`PG ( ${data.pgList.length} )`} />
								{openResidential && openResidential.pg ? <ExpandLess /> : <ExpandMore />}
							</ListItemButton>
							<Collapse in={openResidential && openResidential.pg} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItemButton sx={{ pl: 4 }}>
										<ListItemText primary="Starred" />
									</ListItemButton>
								</List>
							</Collapse>
						</List>

					</Box>
				</Grid>
				<Grid item xs={9} >
					<Typography>
						{listing && getKey() && data[`${getKey()}List`].map((item: any) => {
							return (
								<Box
									sx={{
										boxShadow: 2,
										bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
										color: (theme) =>
											theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
										p: 3,
										my: 3,
										borderRadius: 2,
										fontSize: '0.875rem',
										fontWeight: '700',
									}}
								>
									<Grid container spacing={2}>
										<Grid item xs={3} >

										</Grid>

										<Grid item xs={9} >
											<Typography>
												₹{item.propertyCost}
											</Typography>
											<Typography>
												₹{item.propertyBhk} Apartment
											</Typography>

											<Button variant="text">Edit</Button>


										</Grid>
									</Grid>
								</Box>
							)
						})}
					</Typography>
				</Grid>
			</Grid>
		</div>
	)
}