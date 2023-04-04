import {createBrowserRouter} from "react-router-dom";
import HomePage from "../../pages/Home/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        children: [],
    }
])

export default router;