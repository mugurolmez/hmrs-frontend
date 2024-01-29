import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import Denemek from "../pages/Denemek";

const AppRoutes = ()=>{
return(
<Routes>
<Route path="/home" element={<Home/>}/>
<Route path="/denemek" element={<Denemek/>}/>


</Routes>
)
}
export default AppRoutes;