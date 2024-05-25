import {FC} from "react";
import {observer} from "mobx-react-lite";
import Modal from "../components/Modal/Modal";
import AppState from "../state/AppState";
import Referral from "../components/Referral/Referral";

const ReferralsModal:FC = () => {
    const onCloseHandler = () => {
        AppState.setIsShowReferralsModal(false)
    }

    return <Modal
        title="Referral"
        isShow={AppState.isShowReferralsModal}
        closeButtonText="Играть"
        onClose={onCloseHandler}>
        <Referral />
    </Modal>
}

export default observer(ReferralsModal);