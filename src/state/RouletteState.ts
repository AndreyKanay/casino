import {action, computed, makeAutoObservable} from "mobx";
import {Participant} from "../interfaces/Participant";

class RouletteState {
    _isBet: boolean = false;
    _totalBet: number = 100;
    _participants: Participant[] = [];

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