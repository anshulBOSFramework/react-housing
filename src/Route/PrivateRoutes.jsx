import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: RouteComponent, authRequired, role, state }) => {
	const userHasRequiredRole = state.userRole === role ? true : false;
	
	if(authRequired) {
		if(state.isAuth && userHasRequiredRole) {
			return <RouteComponent />
		}
		return Navigate({
			to: "/",
			replace: true
		})

	} else {
		if (userHasRequiredRole) {
			return <RouteComponent />
		} 
		return Navigate({
			to: "/",
			replace: true
		})
	}
}