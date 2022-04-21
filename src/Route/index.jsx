import { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'

// Private
import { PrivateRoute } from './PrivateRoutes';

// Screens
import HomeScreen from '../Screens/HomeScreen';

// Authentication
import { LoginScreen, RegisterScreen, ForgotPassword, NotFoundScreen } from '../Screens/AuthScreens';

// Buyer
import { BuyerNavigation, BuyerListing, BuyerListingSearch, BuyerProfile, BuyerSaved } from '../Screens/BuyerScreens';

// Seller
import { NewListing, SellerNavigation, SellerDashboard, SellerListings, SellerAddBuyProperty, SellerAddRentProperty, SellerAddPGProperty, SellerPreview, SellerProfile } from '../Screens/SellerScreens';

// Components
import Header from './Header';
import Footer from './Footer';

const Wrapper = ({ children }) => {
	const location = useLocation();

	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0);
	}, [location.pathname]);

	return children
}

function RootNavigation() {
	const authState = useSelector(state => state.authentication);

	return (
		<Wrapper>
			<div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} >
				<Header />
				<Routes>
					{/* Home Page */}
					<Route path="/" element={<HomeScreen />} />

					{/* About Us Page */}
					{/* <Route path="about-us" element={<AboutUs />} /> */}

					{/* Authentication */}
					<Route
						path="login"
						element={<PrivateRoute role={""} authRequired={false} component={LoginScreen} state={authState} />}
					/>
					<Route
						path="register"
						element={<PrivateRoute role={""} authRequired={false} component={RegisterScreen} state={authState} />}
					/>
					<Route
						path="forgot-password"
						element={<PrivateRoute role={""} authRequired={false} component={ForgotPassword} state={authState} />}
					/>

					{/* Buyers */}
					<Route
						path="user"
						element={<PrivateRoute role={"Buyer"} authRequired={true} component={BuyerNavigation} state={authState} />}
					>
						<Route
							path="profile"
							element={<PrivateRoute role={"Buyer"} authRequired={true} component={BuyerProfile} state={authState} />}
						/>
						<Route
							path="search"
							element={<PrivateRoute role={"Buyer"} authRequired={true} component={BuyerListingSearch} state={authState} />}
						>
							<Route
								path=":id"
								element={<PrivateRoute role={"Buyer"} authRequired={true} component={BuyerListing} state={authState} />}
							/>
						</Route>
						<Route
							path="saved"
							element={<PrivateRoute role={"Buyer"} authRequired={true} component={BuyerSaved} state={authState} />}
						/>
					</Route>

					{/* seller */}
					<Route
						path="seller"
						element={<PrivateRoute role={"Seller"} authRequired={true} component={SellerNavigation} state={authState} />}
					>
						<Route
							path="dashboard"
							element={<PrivateRoute role={"Seller"} authRequired={true} component={SellerDashboard} state={authState} />}
						/>
						<Route
							path="profile"
							element={<PrivateRoute role={"Seller"} authRequired={true} component={SellerProfile} state={authState} />}
						/>
						<Route path="my-listings" >
							<Route 
								index
								element={<PrivateRoute role={"Seller"} authRequired={true} component={SellerListings} state={authState} />}
							/>
							<Route 
								path="edit/:propertyCategory/:propertyService/:id"
								element={<PrivateRoute role={"Seller"} authRequired={true} component={SellerListings} state={authState} />}
							/>
							<Route
								path="new"
								element={<PrivateRoute role={"Seller"} authRequired={true} component={NewListing} state={authState} />}
							>
								<Route
									index
									path="buy"
									element={<PrivateRoute role={"Seller"} authRequired={true} component={SellerAddBuyProperty} state={authState} />}
								/>
								<Route
									path="rent"
									element={<PrivateRoute role={"Seller"} authRequired={true} component={SellerAddRentProperty} state={authState} />}
								/>
								<Route
									path="pg-coliving"
									element={<PrivateRoute role={"Seller"} authRequired={true} component={SellerAddPGProperty} state={authState} />}
								/>
							</Route>
							<Route
								path=":id"
								element={<PrivateRoute role={"Seller"} authRequired={true} component={SellerPreview} state={authState} />}
							/>
						</Route>
					</Route>

					{/* Not Found */}
					<Route path="*" element={<NotFoundScreen />} />

				</Routes>
				<Footer />
			</div>
		</Wrapper>
	)
}

export default RootNavigation;