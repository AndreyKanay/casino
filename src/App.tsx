import React from 'react';
import {RouterProvider} from "react-router";
import router from "./router";
import Menu from "./components/Menu/Menu";
import FAQModal from "./modals/FAQModal";
import ReferralsModal from "./modals/ReferralsModal";
import HistoryModal from "./modals/HistoryModal";

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <Menu />
            <FAQModal />
            <ReferralsModal />
            <HistoryModal />
        </>
    );
}

export default App;
