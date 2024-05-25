import {action, computed, makeAutoObservable} from "mobx";

class BetState {
    private _bet: number = 1;
    private _maxBet: number = 0;
    private _lastAmount: number = 1;

    constructor() {
        makeAutoObservable(this)
    }

    @computed
    setMaxBet(amount: number) {
        this._maxBet = amount;
        this._bet = 1;
    }

    @computed
    setLastAmount(bet: number) {
        this._maxBet = bet
    }

    @computed
    addedBet(amount: number) {
        this._lastAmount = amount;
        if (this._bet + amount >= this._maxBet) {
            this._bet = this._maxBet;
            return
        }

        this._bet += amount;
    }

    @computed
    removedBet(amount: number) {
        if (this._bet <= this._lastAmount) {
            return
        }

        this._bet -= amount;
    }

    @action.bound
    get bet(): number {
        return this._bet;
    }

    @action.bound
    get betString() {
        return this._bet.toFixed(2).replace('.', ',');
    }

    @action.bound
    get lastAmount(): number {
        return this._lastAmount;
    }


}

const betState = new BetState();

export default betState;