import { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

// MUI
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Toolbar, List, CssBaseline, Typography, Divider, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ChevronLeft, ChevronRight, AccountBoxRounded, FileCopyRounded, SubscriptionsRounded, PrivacyTipRounded, HelpCenterRounded, LogoutRounded } from '@mui/icons-material';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Actions
import { resetInfo } from './../../../Store/actions';

// Components
import { AppBar, Drawer, DrawerHeader } from '../../../Components';

// Store
import { Outlet, useNavigate } from "react-router-dom";

const BuyerNavigation = () => {
	const theme = useTheme();
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const { userData: { name } } = useSelector((state: RootStateOrAny) => state.authentication);
	// const { applicationData } = useSelector((state: RootStateOrAny) => state.applications);

	const [open, setOpen] = useState<boolean>(false);

	const handleDrawerToggle = () => {
		setOpen(!open);
	};

	const USER_INFO = [
		{
			text: "Profile",
			icon: <AccountBoxRounded />,
			navigationRoute: "profile",
			badge: 0
		}, {
			text: "Applications",
			icon: <FileCopyRounded />,
			navigationRoute: "application",
			badge: 10
		}, {
			text: "Saved",
			icon: <SubscriptionsRounded />,
			navigationRoute: 'profile',
			badge: 0
		},
	]

	const USER_BASIC = [
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

	const user_requirements = USER_INFO.map(({ text, icon, navigationRoute, badge }, index) => {
		return (
			<ListItem button key={index.toString()} onClick={() => navigate(navigationRoute)}>
				{badge > 0 ?
					<div style={{ height: 7, width: 7, backgroundColor: 'red', borderRadius: 4, position: 'absolute', top: 10, left: 35 }} />
					: null
				}
				<ListItemIcon >
					{icon}
				</ListItemIcon>
				<ListItemText primary={text} />
			</ListItem>
		)
	})

	const user_basic = USER_BASIC.map(({ text, icon, navigationRoute }, index) => {
		return (
			<ListItem button key={index.toString()} onClick={navigationRoute}>
				<ListItemIcon>
					{icon}
				</ListItemIcon>
				<ListItemText primary={text} />
			</ListItem>
		)
	})

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
					{user_requirements}
				</List>
				<Divider />
				<List>
					{user_basic}
				</List>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				<Outlet />
			</Box>

		</Box>
	)
}

export default BuyerNavigation;