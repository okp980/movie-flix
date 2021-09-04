import "./App.css";
import Header from "./components/header/Header";
import ModalManager from "./components/modalManager/ModalManager";
import Home from "./page/home/Home";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Profile from "./page/profile/Profile";
import ProtectedRoute from "./util/protectedRoute/ProtectedRoute";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ErrorPage from "./page/errorPage/ErrorPage";
import Unathorized from "./page/unauthorized/Unathorized";

function App() {
	const modalState = useSelector((state) => state.modal);

	return (
		<>
			<ToastContainer />
			{modalState && <ModalManager />}
			<Header />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/unauthorized">
					<Unathorized />
				</Route>
				<ProtectedRoute path="/profile">
					<Profile />
				</ProtectedRoute>
				<Route path="*">
					<ErrorPage />
				</Route>
			</Switch>
		</>
	);
}

export default App;
