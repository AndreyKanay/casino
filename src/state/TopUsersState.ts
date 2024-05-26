import {action, makeAutoObservable} from "mobx";

class TopUsersState {
    private _top = {
        "all": [
            {
                avatar: `https://i.pravatar.cc/60?u=${String(+Date.now() + Math.random())}`,
                bet: 1,
                totalBet: 4,
                coefficient: 25,
            },
            {
                avatar: `https://i.pravatar.cc/60?u=${String(+Date.now() + Math.random())}`,
                bet: 1,
                totalBet: 4,
                coefficient: 25,
            },
            {
                avatar: `https://i.pravatar.cc/60?u=${String(+Date.now() + Math.random())}`,
                bet: 1,
                totalBet: 4,
                coefficient: 25,
            },
            {
                avatar: `https://i.pravatar.cc/60?u=${String(+Date.now() + Math.random())}`,
                bet: 1,
                totalBet: 4,
                coefficient: 25,
            },
            {
                avatar: `https://i.pravatar.cc/60?u=${String(+Date.now() + Math.random())}`,
                bet: 1,
                totalBet: 4,
                coefficient: 25,
            },
            {
                avatar: `https://i.pravatar.cc/60?u=${String(+Date.now() + Math.random())}`,
                bet: 1,
                totalBet: 4,
                coefficient: 25,
            },
            {
                avatar: `https://i.pravatar.cc/60?u=${String(+Date.now() + Math.random())}`,
                bet: 1,
                totalBet: 4,
                coefficient: 25,
            }
        ],
        "my": [
            {
                avatar: `https://i.pravatar.cc/60?u=${String(+Date.now() + Math.random())}`,
                bet: 1,
                totalBet: 4,
                coefficient: 25,
            },
            {
                avatar: `https://i.pravatar.cc/60?u=${String(+Date.now() + Math.random())}`,
                bet: 1,
                totalBet: 4,
                coefficient: 25,
            },
            {
                avatar: `https://i.pravatar.cc/60?u=${String(+Date.now() + Math.random())}`,
                bet: 1,
                totalBet: 4,
                coefficient: 25,
            }
        ],
        "top": [
            {
                avatar: `https://i.pravatar.cc/60?u=${String(+Date.now() + Math.random())}`,
                bet: 1,
                totalBet: 4,
                coefficient: 25,
            },
            {
                avatar: `https://i.pravatar.cc/60?u=${String(+Date.now() + Math.random())}`,
                bet: 1,
                totalBet: 4,
                coefficient: 25,
            },
            {
                avatar: `https://i.pravatar.cc/60?u=${String(+Date.now() + Math.random())}`,
                bet: 1,
                totalBet: 4,
                coefficient: 25,
            }
        ]
    };
    constructor() {
        makeAutoObservable(this)
    }

    @action.bound
    get top() {
        return this._top;
    }

}

const topUsersState = new TopUsersState()

export default topUsersState;