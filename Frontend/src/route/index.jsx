import { createBrowserRouter } from "react-router-dom";
import App from '../App' ;
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
        path : "/" ,
        Element : <App /> ,
        children  : {
            path : "" ,
            element : <HomePage />
        }
    }

])
export default router ;

