import React from 'react';
import {RouterProvider} from "react-router";
import router from "./router";
import Menu from "./components/Menu/Menu";
import FAQModal from "./modals/FAQModal";

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <Menu />
            <FAQModal />
        </>
    );
}

export default App;
