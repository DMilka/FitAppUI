import {createBrowserRouter} from "react-router-dom";
import HomePage from "../../pages/Home/HomePage";
import Dashboard from "../../pages/Dashboard/Dashboard";
import {checkUserLogged, checkUserNotLogged, loginAction,registerAction} from "../auth/AuthenticatorHelper";
import LoginPage from "../../pages/Home/Form/LoginForm/LoginPage";
import RegisterPage from "../../pages/Home/Form/RegisterForm/RegisterPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        loader: checkUserLogged,
        children: [
            {index: true, element: <LoginPage/>, action: loginAction},
            {path: 'register', element: <RegisterPage/>, action: registerAction}
        ],
    },
    {
        path: 'dashboard',
        element: <Dashboard/>,
        loader: checkUserNotLogged,
        children: []
    }
])

export default router;