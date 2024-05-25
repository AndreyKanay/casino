import React from 'react';
import {RouterProvider} from "react-router";
import router from "./router";
import Modal from "./components/Modal/Modal";

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <Modal title="faq" isShow={true} closeButtonText="Играть" onClose={() => {
            }}>
                <p>
                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                    aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur
                    neque.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
                    efficitur neque.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                    velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
                    efficitur neque.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                    velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos.
                </p>
            </Modal>
        </>
    );
}

export default App;
