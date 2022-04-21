import { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

// MUI
import { useTheme } from '@mui/material/styles';
import { Toolbar, Box, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ChevronLeft, ChevronRight, AccountBoxRounded, ListAltRounded, FileDownloadRounded, AddBoxRounded, FileCopyRounded, PrivacyTipRounded, HelpCenterRounded, LogoutRounded, BallotRounded } from '@mui/icons-material';

// Components
import { AppBar, Drawer, DrawerHeader } from 'Components';

// Store
import { resetInfo } from 'Store/actions';
import { Outlet, useNavigate } from "react-router-dom";

const SELLER_INFO = [
	{
		text: "Profile",
		icon: <AccountBoxRounded />,
		navigationRoute: "profile"
	}, {
		text: "Applications",
		icon: <FileCopyRounded />,
		navigationRoute: "application"
	}, {
		text: "My Listings",
		icon: <ListAltRounded />,
		navigationRoute: 'my-listings'
	}, {
		text: "Saved",
		icon: <FileDownloadRounded />,
		navigationRoute: 'profile'
	},
];

const SELLER_OPTIONS = [
	{
		text: "Add Property",
		icon: <AddBoxRounded />,
		navigationRoute: "my-listings/new",
		status: true,
	}, {
		text: "Leads",
		icon: <BallotRounded />,
		navigationRoute: "my-listings",
		status: true,
	}, {
		text: "Subscription",
		icon: <AccountBoxRounded />,
		navigationRoute: "my-listings",
		status: false,
	}
];

const SellerNavigation = () => {
	const theme = useTheme();
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const { userData: { name } } = useSelector((state: RootStateOrAny) => state.authentication);

	const [open, setOpen] = useState<boolean>(false);

	const SELLER_BASIC = [
		{
			text: "Privacy Policy",
			icon: <PrivacyTipRounded />,
			navigationRoute: () => navigate("/")
		}, {
			text: "Help & Support",
			icon: <HelpCenterRounded />,
			navigationRoute: () => navigate("/")
		}, {
			text: "Logout",
			icon: <LogoutRounded />,
			navigationRoute: () => dispatch(resetInfo({ data: false }))
		},
	]

	const handleDrawerToggle = () => {
		setOpen(!open);
	};

	const seller_info = SELLER_INFO.map(({ text, icon, navigationRoute }, index) => {
		return (
			<ListItem button key={text} onClick={() => navigate(navigationRoute)}>
				<ListItemIcon>
					{icon}
				</ListItemIcon>
				<ListItemText primary={text} />
			</ListItem>
		)
	});

	const seller_options = SELLER_OPTIONS.map(({ text, icon, navigationRoute, status }, index) => {
		return (
			<ListItem button key={text} onClick={() => navigate(navigationRoute)} disabled={!status} >
				<ListItemIcon>
					{icon}
				</ListItemIcon>
				<ListItemText primary={text} />
			</ListItem>
		)
	});

	const seller_basic = SELLER_BASIC.map(({ text, icon, navigationRoute }, index) => {
		return (
			<ListItem button key={text} onClick={navigationRoute}>
				<ListItemIcon>
					{icon}
				</ListItemIcon>
				<ListItemText primary={text} />
			</ListItem>
		)
	});

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerToggle}
						edge="start"
						sx={{
							marginRight: '36px',
							...(open && { display: 'none' }),
						}}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Welcome {name}
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerToggle}>
						{theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{seller_info}
				</List>
				<Divider />
				<List>
					{seller_options}
				</List>
				<Divider />
				<List>
					{seller_basic}
				</List>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				<Outlet />
			</Box>

		</Box>
	)
}

export default SellerNavigation;