import {FC} from "react";
import Modal from "../components/Modal/Modal";
import AppState from "../state/AppState";
import {observer} from "mobx-react-lite";
import ModalText from "../components/Modal/ModalText";

const FAQModal: FC = () => {
    const onCloseHandler = () => {
        AppState.setIsShowFAQModal(false);
    }

    return (
        <Modal
            title="FAQ"
            isShow={AppState.isShowFAQModal}
            closeButtonText="Играть" onClose={onCloseHandler}>
            <ModalText>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.Norem ipsum
                dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
                mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.Norem ipsum dolor sit
                amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
                tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.Norem ipsum dolor sit amet,
                consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </ModalText>
        </Modal>
    )
}

export default observer(FAQModal);