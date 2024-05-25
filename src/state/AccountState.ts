import {action, computed, makeAutoObservable} from "mobx";

class AccountState {
    private _balance: number = 10.35;
    private _referrals = [
        {key: "all", profit: 18.53, friends: 18},
        {key: "yesterday", profit: 2.43, friends: 2},
        {key: "week", profit: 3.43, friends: 3},
        {key: "month", profit: 5.43, friends: 5},
    ]

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

    @action.bound
    getReferral(key: string) {
        return this._referrals.filter(item => item.key === key)[0]
    }

    @computed
    debiting(amount: number) {
        this._balance -= amount;
    }

}

const accountState = new AccountState();

export default accountState;