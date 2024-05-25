import {action, computed, makeAutoObservable} from "mobx";

class AccountState {
    private _balance: number = 10.35;

    constructor() {
        makeAutoObservable(this)
    }

    @action.bound
    get balance(): number {
        return this._balance;
    }

    @action.bound
    get balanceString(): string {
        return this._balance.toFixed(2).replace('.', ',');
    }

    @computed
    debiting(amount: number) {
        this._balance -= amount;
    }

}

const accountState = new AccountState();

export default accountState;