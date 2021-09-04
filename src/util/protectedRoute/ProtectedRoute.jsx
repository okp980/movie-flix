import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export default function ProtectedRoute({ children, ...props }) {

    const isAuthenticated = useSelector(state => state.auth.authenticated)
    return (
        <Route
            path="/profile"
            render={({ location }) => {
                if (!isAuthenticated) {
                    return <Redirect
                        to={{
                            pathname: "/unauthorized",
                            state: { from: location },
                        }}
                        {...props}
                    />;
                }
                return children;
            }}
        />
    )
}