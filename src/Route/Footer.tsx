import { Box, Grid, Typography, Button } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material'

const Footer = () => {

	return (
		<Box sx={{ padding: "0px 10px", display: { xs: "flex" } }} >
			<Grid container spacing={2} >
				<Grid item md={6} xs={12} display={"flex"} alignItems={"center"} >
					<Instagram sx={{ padding: 1 }} fontSize="large" />
					<Facebook sx={{ padding: 1 }} fontSize="large" />
					<Twitter sx={{ padding: 1 }} fontSize="large" />

					<Button variant="text">Privacy</Button>
					<Button variant="text">Terms</Button>
					<Button variant="text">Help & Support</Button>
				</Grid>
				<Grid item md={6} xs={12} >
					<Typography>
						© Housing Replica Pvt. Ltd. - All rights reserved
					</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Footer;