import React from 'react';
import {RouterProvider} from "react-router";
import router from "./router";
import Menu from "./components/Menu/Menu";

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <Menu />
        </>
    );
}

export default App;
