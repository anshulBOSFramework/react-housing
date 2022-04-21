import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { OutlinedInput, InputAdornment, Button, Box } from '@mui/material';
import { PersonTwoTone, Home, Fingerprint } from '@mui/icons-material'

// Store
import { updateUserData } from 'Store/actions';

const BuyerProfile = () => {
	const dispatch = useDispatch();
	const { userData, userRole } = useSelector((state: RootStateOrAny) => state.authentication);

	const [values, setValues] = useState<any>();
	const [editable, setEditable] = useState<boolean>(false);

	useEffect(() => {
		const setInformation = () => {
			const { name, email, phone, accountCategory } = userData;
			setValues({
				name,
				phone,
				email,
				accountCategory
			})
		}
		setInformation();
	}, [userData]);

	const handleChange = (prop: keyof any) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const submitProfile = (e: any) => {
		e.preventDefault()

		let checkInfo = true;

		if (checkInfo) {
			dispatch(updateUserData({ userData: { ...userData, ...values } }))
		} else {
			alert("PLEASE FILL INFO")
		}
	}

	return (
		<div>
			{values ?
				<Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center' }} >
					<div>
						<OutlinedInput
							className="inputField"
							id="outlined-required"
							value={values.name}
							required
							onChange={handleChange('name')}
							inputProps={{
								className: "inputTextStyle",
								placeholder: "Full Name"
							}}
							startAdornment={<InputAdornment position="start" ><PersonTwoTone colorInterpolationFilters={"sRGB"} color={"primary"} /></InputAdornment>}
						/>
					</div>
					<div>
						<OutlinedInput
							className="inputField"
							id="outlined-required"
							value={values.email}
							required
							onChange={handleChange('email')}
							inputProps={{
								className: "inputTextStyle",
								placeholder: "Email"
							}}
							startAdornment={<InputAdornment position="start" style={{ verticalAlign: "top" }} ><Fingerprint colorInterpolationFilters={"sRGB"} color={"primary"} /></InputAdornment>}
						/>
					</div>
					<div>
						<OutlinedInput
							className="inputField"
							id="outlined-required"
							value={values.phone}
							required
							onChange={handleChange('phone')}
							inputProps={{
								className: "inputTextStyle",
								placeholder: "Phone Number"
							}}
							startAdornment={<InputAdornment position="start" style={{ verticalAlign: "top" }} ><Fingerprint colorInterpolationFilters={"sRGB"} color={"primary"} /></InputAdornment>}
						/>
					</div>
					<div>
						<OutlinedInput
							className="inputField"
							id="outlined-required"
							value={values.accountCategory}
							inputProps={{
								className: "inputTextStyle",
								placeholder: "Account Category"
							}}
							startAdornment={<InputAdornment position="start" ><Home colorInterpolationFilters={"sRGB"} color={"primary"} /></InputAdornment>}
						/>
					</div>
					<div>
						<Button variant="contained" className="loginBtn" size="medium" onClick={submitProfile} >
							Save
						</Button>
					</div>
				</Box>
				: null
			}
		</div>
	)
}

export default BuyerProfile;