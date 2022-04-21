import * as React from 'react';

import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Container,
	Menu,
	Button,
	useScrollTrigger,
	Slide,
	CssBaseline
} from '@mui/material';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { useNavigate, useLocation } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { resetInfo } from '../Store/actions';

const hidePaths = ['/login', '/register']

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
	children: React.ReactElement;
}

function HideOnScroll(props: Props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	const loc = useLocation();

	return (
		<Slide style={{ display: hidePaths.includes(loc.pathname) ? "none" : "block" }} appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

const menu_item: any = {
	default: [
		{
			index: 0,
			name: "Home",
			navigate: "/",
		}, {
			index: 1,
			name: "Contact Us",
			navigate: "/",
		}, {
			index: 2,
			name: "About Us",
			navigate: "/about-us"
		}
	],
	Buyer: [
		{
			index: 0,
			name: "Home",
			navigate: "/",
		}, {
			index: 1,
			name: "Profile",
			navigate: "/user/profile",
		}, {
			index: 2,
			name: "Contact Us",
			navigate: "/",
		}, {
			index: 4,
			name: "About Us",
			navigate: "/about-us",
		}
	],
	Seller: [
		{
			index: 0,
			name: "Home",
			navigate: "/",
		}, {
			index: 1,
			name: "Dashboard",
			navigate: "/seller",
		}, {
			index: 2,
			name: "Contact Us",
			navigate: "/",
		}, {
			index: 3,
			name: "Listing",
			navigate: "/seller/my-listings",
		}, {
			index: 4,
			name: "Applications",
			navigate: "/seller/listing",
		}, {
			index: 5,
			name: "About Us",
			navigate: "/about-us",
		}
	]
}

export default function Header(props: Props) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const loc = useLocation();
	const { isAuth, userRole } = useSelector((state: RootStateOrAny) => state.authentication);

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = (page: any) => {
		setAnchorElNav(null);
		return navigate(page.navigate)
	};

	const handleLogout = () => {
		dispatch(resetInfo({ data: false }))
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar sx={{ backgroundColor: "#fef4ea", boxShadow: "none" }} >
					<Container maxWidth="xl">
						<Toolbar disableGutters>

							{/* Laptop */}
							<Typography
								variant="h6"
								noWrap
								component="div"
								sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
							>
								LOGO
							</Typography>

							<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
								{menu_item[userRole && userRole.length ? userRole : "default"].map((page: any) => {
									return (
										<Button
											key={page.index.toString()}
											onClick={() => handleCloseNavMenu(page)}
											sx={{ my: 2, color: '#000', display: 'block' }}
										>
											{page.name}
										</Button>
									)
								})}
							</Box>

							{/* Mobile */}
							<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
								<IconButton
									size="large"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleOpenNavMenu}
									color="inherit"
								>
									<WidgetsOutlinedIcon htmlColor='#000' />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorElNav}
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'left',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'left',
									}}
									open={Boolean(anchorElNav)}
									onClose={handleCloseNavMenu}
									sx={{
										display: { xs: 'block', md: 'none' },
									}}
								>
									{menu_item[userRole && userRole.length ? userRole : "default"].map((page: any) => {
										return (
											<Button
												key={page.index.toString()}
												onClick={() => handleCloseNavMenu(page)}
												sx={{ my: 2, color: '#000', display: 'block' }}
											>
												{page.name}
											</Button>
										)
									})}
								</Menu>
							</Box>

							<Typography
								variant="h6"
								noWrap
								component="div"
								sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
							>
								LOGO
							</Typography>

							{/* Avatar */}
							{isAuth ?
								<Box sx={{ flexGrow: 0 }}>
									<Button variant='outlined' onClick={handleLogout} >
										Log Out
									</Button>
								</Box>
								:
								<Box sx={{ flexGrow: 0 }}>
									<Button variant='outlined' onClick={() => navigate("/login")} >
										Get Started
									</Button>
								</Box>
							}
						</Toolbar>
					</Container>
				</AppBar>
			</HideOnScroll>
			<Toolbar style={{ display: hidePaths.includes(loc.pathname) ? "none" : "block" }} />
		</React.Fragment>
	);
};