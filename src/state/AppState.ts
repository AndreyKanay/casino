import {action, computed, makeAutoObservable} from "mobx";

class AppState {
    private _isShowFAQModal: boolean = false;
    private _isShowReferralsModal: boolean = false;
    private _isShowHistoryModal: boolean = false;
    private _isShowTopUsersModal: boolean = false;
    private _isShowMenu: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    @action.bound
    get isShowFAQModal(): boolean {
        return this._isShowFAQModal;
    }

    @action.bound
    get isShowReferralsModal(): boolean {
        return this._isShowReferralsModal;
    }

    @action.bound
    get isShowHistoryModal(): boolean {
        return this._isShowHistoryModal;
    }

    @action.bound
    get isShowTopUsersModal(): boolean {
        return this._isShowTopUsersModal;
    }

    @action.bound
    get isShowMenu(): boolean {
        return this._isShowMenu;
    }

    @computed
    setIsShowFAQModal(value: boolean) {
        this._isShowFAQModal = value;
    }

    @computed
    setIsShowReferralsModal(value: boolean) {
        this._isShowReferralsModal = value;
    }

    @computed
    setIsShowHistoryModal(value: boolean) {
        this._isShowHistoryModal = value;
    }

    @computed
    setIsShowTopUsersModal(value: boolean) {
        this._isShowTopUsersModal = value;
    }

    @computed
    setIsShowMenu(value: boolean) {
        this._isShowMenu = value;
    }
}

const appState = new AppState()

export default appState