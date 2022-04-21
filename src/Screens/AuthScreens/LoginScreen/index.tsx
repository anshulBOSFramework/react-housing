import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Box, OutlinedInput, InputAdornment, Button, Grid, Typography, IconButton } from '@mui/material';
import { PersonTwoTone, LockTwoTone, HomeRounded, Visibility, VisibilityOff } from '@mui/icons-material'

// Components
import { SnackBar } from "Components";

// Actions
import * as types from '../../../Store/action-types';
import { loginUser, fetchUserData } from "../../../Store/actions";

// Assets & Styles
import { login_1, login_2 } from 'Assets';
import './index.css';

interface State {
	email: string;
	password: string;
}

export default function LoginScreen() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isAuth, isLoading, userData, message } = useSelector((state: RootStateOrAny) => state.authentication);

	const [values, setValues] = useState<State>({
		email: '',
		password: '',
	});
	const [showPassword, setShowPassword] = useState<boolean>(false);

	// useEffect(() => {
	// 	const checkAuth = () => {
	// 		if (isAuth && !isData) {
	// 			dispatch(fetchUserData({ uid: userData.uid }))
	// 		}
	// 	}
	// 	checkAuth()
	// }, [isAuth, isData]);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword)
	}

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const submitLogin = (e: any) => {
		e.preventDefault();
		dispatch(loginUser({ email: values.email, password: values.password }))
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
				</>
				:
				<Grid
					container
					spacing={0}
					sx={{ minWidth: "300px", height: "80vh", width: "70%", backgroundColor: "rgba( 255, 255, 255, 0.25 )", boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )", backdropFilter: "blur( 3px )", borderRadius: 5, border: "1px solid rgba( 255, 255, 255, 0.18 )", overflow: "auto" }}
				>
					<Grid item md={6} xs={12} sx={{ backgroundImage: `url(${login_2})`, borderRadius: "20px 0px 0px 20px", backgroundPosition: "left", backgroundRepeat: "no-repeat", backgroundSize: "cover", minHeight: "50vh" }} >
					</Grid>
					<Grid item md={6} xs={12} display={"flex"} flexDirection="column" justifyContent={"center"} p={3} >

						<div>
							<Button
								color="inherit"
								variant="text"
								sx={{ mb: 3 }}
								startIcon={<HomeRounded />}
								onClick={() => navigate("/")}
							>
								Home
							</Button>

							<Typography variant="h2" textAlign={"center"} >
								Login
							</Typography>
						</div>

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
							id="outlined-password-required"
							type={showPassword ? 'text' : 'password'}
							value={values.password}
							autoComplete="on"
							required
							onChange={handleChange('password')}
							inputProps={{
								className: "inputTextStyle",
								placeholder: "Password"
							}}
							startAdornment={<InputAdornment position="start"  ><LockTwoTone color="primary" /></InputAdornment>}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
						/>

						<Button sx={{ my: 3, width: "250px", alignSelf: 'center' }} variant="contained" className="registerBtn" onClick={() => navigate(`/forgot-password`)} >
							Forgot Password
						</Button>

						<div className="btnContainer" >
							<Button size="medium" className="registerBtn" onClick={() => navigate(`/register`)}>Register</Button>
							<Button variant="contained" className="loginBtn" size="medium" onClick={submitLogin} >
								Login
							</Button>
						</div>

					</Grid>
				</Grid>
			}
		</Box>
	)
};