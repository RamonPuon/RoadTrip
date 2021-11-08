import React from "react";

import Home from "../components/Home";
import Layout from "../containers/Layout";

const routes = {
    "/": ()=> <Home/>,
    "/Tuxtla": ()=> <Layout/>
}

export default routes;