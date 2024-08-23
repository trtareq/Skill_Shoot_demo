import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Error_handle from "../pages/Error_Handle/Error_handle";

 

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        error: <Error_handle></Error_handle>,
        children: [
            {
                path: '/',
                element: <Home></Home>, 
                // loader: () => fetch('/residential.json')
            }, 
            {
                // path: '/house/:id', 
                //  element: <PrivateRoute><House></House></PrivateRoute>,
                //  loader: () => fetch('/residential.json')
            }
        ]
    }    
]);

export default router;