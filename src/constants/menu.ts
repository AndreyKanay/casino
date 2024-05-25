import AppState from "../state/AppState";
import {IMenuItem} from "../interfaces/IMenuItem";

export const MENU: IMenuItem[] = [
    {
        label: "History",
        action: () => AppState.setIsShowHistoryModal(true)
    },
    {
        label: "Referrals",
        action: () => AppState.setIsShowReferralsModal(true)
    },
    {
        label: "Top users",
        action: () => AppState.setIsShowTopUsersModal(true)
    }
];