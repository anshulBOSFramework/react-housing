import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Box, Grid, OutlinedInput, InputAdornment, Button, FormControl, Select, MenuItem, SelectChangeEvent, Typography } from '@mui/material';
import { PersonTwoTone, LockTwoTone, TouchAppTwoTone, KeyboardBackspaceOutlined, HomeRounded } from '@mui/icons-material';

// Components
import { SnackBar } from "Components";

// Actions
import * as types from 'Store/action-types';
import { setAuthLoader, registerUser, setUserData } from 'Store/actions';

// Assets & Style
import { login_1, register_1 } from "Assets";

interface State {
	name: string;
	email: string;
	phone: string;
	password: string;
	accountCategory: string;
}

export default function RegisterScreen() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isAuth, isData, isLoading, userData, message } = useSelector((state: RootStateOrAny) => state.authentication);

	const [values, setValues] = useState<State>({
		name: '',
		email: '',
		phone: '',
		password: '',
		accountCategory: 'Buyer'
	});

	useEffect(() => {
		const checkAuth = () => {
			if (isAuth && !isData) {
				dispatch(setUserData({
					uid: userData.uid,
					email: values.email,
					accountCategory: values.accountCategory
				}))
			}
		}
		checkAuth()
	}, [isAuth, isData]);

	const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handlePickerChange = (prop: keyof State) => (event: SelectChangeEvent) => {
		setValues({ ...values, [prop]: event.target.value })
	}

	const submitInfo = (e: any) => {
		e.preventDefault()

		dispatch(setAuthLoader({ isLoading: true }))
		dispatch(registerUser(values))
	}

	const handleSnackClose = () => {
		dispatch({
			type: types.SET_SNACK_MESSAGE,
			payload: {
				message: ""
			}
		})
	}

	return (
		<Box
			component="form"
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				minHeight: '100vh',
				'& .MuiTextField-root': { m: 1, width: '25ch' },
				backgroundImage: `url(${login_1})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover"
			}}
			noValidate
			autoComplete="off"
		>
			<SnackBar
				isOpen={message.length ? true : false}
				message={message}
				handleSnackClose={handleSnackClose}
			/>

			{isLoading ?
				<>
					{message}
				</>
				:
				<>
					<Grid
						container
						spacing={0}
						sx={{ minWidth: "300px", height: "80vh", width: "70%", backgroundColor: "rgba( 255, 255, 255, 0.25 )", boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )", backdropFilter: "blur( 3px )", borderRadius: 5, border: "1px solid rgba( 255, 255, 255, 0.18 )", overflow: "auto" }}
					>
						<Grid item md={6} xs={12} display={"flex"} flexDirection="column" justifyContent={"center"} p={3} >
							<div>
								<div style={{ display: 'flex', justifyContent: "space-between" }} >
									<Button
										color="inherit"
										variant="text"
										sx={{ mb: 3 }}
										startIcon={<KeyboardBackspaceOutlined />}
										onClick={() => navigate("/login")}
									>
										Login
									</Button>
									<Button
										color="inherit"
										variant="text"
										sx={{ mb: 3 }}
										startIcon={<HomeRounded />}
										onClick={() => navigate("/")}
									>
										Home
									</Button>

								</div>

								<Typography variant="h2" textAlign={"center"} >
									Register
								</Typography>
							</div>
							<OutlinedInput
								className="inputField"
								id="outlined-name-required"
								type='text'
								value={values.name}
								required
								onChange={handleChange('name')}
								inputProps={{
									className: "inputTextStyle",
									placeholder: "Name"
								}}
								startAdornment={<InputAdornment position="start" ><PersonTwoTone colorInterpolationFilters={"sRGB"} color={"primary"} /></InputAdornment>}
							/>
							<OutlinedInput
								className="inputField"
								id="outlined-email-required"
								type='email'
								value={values.email}
								required
								onChange={handleChange('email')}
								inputProps={{
									className: "inputTextStyle",
									placeholder: "Email"
								}}
								startAdornment={<InputAdornment position="start" ><PersonTwoTone colorInterpolationFilters={"sRGB"} color={"primary"} /></InputAdornment>}
							/>
							<OutlinedInput
								className="inputField"
								id="outlined-phone-required"
								type='phone'
								value={values.phone}
								required
								onChange={handleChange('phone')}
								inputProps={{
									className: "inputTextStyle",
									placeholder: "Phone Number"
								}}
								startAdornment={<InputAdornment position="start" ><PersonTwoTone colorInterpolationFilters={"sRGB"} color={"primary"} /></InputAdornment>}
							/>
							<OutlinedInput
								className="inputField"
								id="outlined-password-required"
								type='password'
								autoComplete="on"
								value={values.password}
								required
								onChange={handleChange('password')}
								inputProps={{
									className: "inputTextStyle",
									placeholder: "Password"
								}}
								startAdornment={<InputAdornment position="start" ><LockTwoTone color="primary" /></InputAdornment>}
							/>
							<FormControl required sx={{ m: 1, minWidth: 120 }}>
								<Select
									className="inputField"
									labelId="demo-simple-select-required-label"
									id="demo-simple-select-required"
									value={values.accountCategory}
									label="User Role *"
									onChange={handlePickerChange('accountCategory')}
									inputProps={{
										className: "inputTextStyle",
										placeholder: "User Role"
									}}
									startAdornment={<InputAdornment position="start" ><TouchAppTwoTone color="primary" /></InputAdornment>}
								>
									<MenuItem value={"Buyer"}>Buyer</MenuItem>
									<MenuItem value={"Seller"}>Seller</MenuItem>
								</Select>
							</FormControl>
							<div className="btnContainer" >
								<Button variant="contained" className="loginBtn" size="medium" onClick={submitInfo} >
									Register
								</Button>
							</div>
						</Grid>
						<Grid item md={6} xs={12} sx={{ backgroundImage: `url(${register_1})`, borderRadius: "0px 20px 20px 0px", backgroundPosition: "left", backgroundRepeat: "no-repeat", backgroundSize: "cover", minHeight: "50vh" }} >
						</Grid>
					</Grid>
				</>
			}
		</Box>
	)
}