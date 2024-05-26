import {FC} from "react";
import Modal from "../components/Modal/Modal";
import AppState from "../state/AppState";
import {observer} from "mobx-react-lite";
import TopUsers from "../components/TopUsers/TopUsers";

const TopUsersModal: FC = () => {
    const onCloseHandler = () => {
        AppState.setIsShowTopUsersModal(false)
    }

    return (
        <Modal title="Top Users"
               isShow={AppState.isShowTopUsersModal}
               closeButtonText="Играть"
               onClose={onCloseHandler}>
            <TopUsers/>
        </Modal>
    )
}

export default observer(TopUsersModal);