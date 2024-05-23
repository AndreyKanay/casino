import {action, computed, makeAutoObservable} from "mobx";

class RouletteState {
    _isBet: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    @computed
    setIsBet(value: boolean) {
        this._isBet = value;
    }

    @action.bound
    get isBet(): boolean {
        return this._isBet;
    }
}

const rouletteState = new RouletteState();

export default rouletteState;