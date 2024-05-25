import {FC} from "react";
import Modal from "../components/Modal/Modal";
import AppState from "../state/AppState";
import {observer} from "mobx-react-lite";
import History from "../components/History/History";

const HistoryModal:FC = () => {
    const onCloseHandler = () => {
        AppState.setIsShowHistoryModal(false)
    }

    return <Modal
        title="History"
        isShow={AppState.isShowHistoryModal}
        closeButtonText="Играть" onClose={onCloseHandler}>
        <History />
    </Modal>
}

export default observer(HistoryModal);