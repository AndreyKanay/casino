import {action, computed, makeAutoObservable} from "mobx";
import {IParticipant, IParticipantForList} from "../interfaces/IParticipant";
import {getRandomAvatar} from "../helpers/getRandomAvatar";
import {getGradient} from "../helpers/getGradient";
import {PieChartItem} from "../components/Spinner/Spinner";

class RouletteState {
    _isBet: boolean = false;
    _totalBet: number = 100;
    _participants: IParticipant[] = [
        {
            avatar: getRandomAvatar(),
            bet: 10,
        },
        {
            avatar: getRandomAvatar(),
            bet: 0.4,
        },
        {
            avatar: getRandomAvatar(),
            bet: 7,
        },
        {
            avatar: getRandomAvatar(),
            bet: 1.5,
        },
        {
            avatar: getRandomAvatar(),
            bet: 1.03,
        },
        {
            avatar: getRandomAvatar(),
            bet: 12,
        },
        {
            avatar: getRandomAvatar(),
            bet: 7,
        },
        {
            avatar: getRandomAvatar(),
            bet: 4,
        },
        {
            avatar: getRandomAvatar(),
            bet: 10,
        },
        {
            avatar: getRandomAvatar(),
            bet: 0.4,
        },
        {
            avatar: getRandomAvatar(),
            bet: 7,
        },
        {
            avatar: getRandomAvatar(),
            bet: 1.5,
        },
        {
            avatar: getRandomAvatar(),
            bet: 1.03,
        },
        {
            avatar: getRandomAvatar(),
            bet: 12,
        },
        {
            avatar: getRandomAvatar(),
            bet: 4,
        },
        {
            avatar: getRandomAvatar(),
            bet: 7,
        },
        {
            avatar: getRandomAvatar(),
            bet: 4,
        }
    ];

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

    @action.bound
    get totalBet(): number {
        let amount = 0;
        for (let i = 0; i < this._participants.length; i++) {
            amount += this._participants[i].bet
        }
        return amount;
    }

    @action.bound
    get participantsForSpinner() {
        const result: PieChartItem[] = [];
        let count = 0
        this._participants.map((item) => {
            if (count > 10) {
                count = 0;
            }
            result.push({
                bet: item.bet,
                color: getGradient(count),
            })
            count++;
        })

        return result;
    }

    @action.bound
    get participantsForList() {
        const result: IParticipantForList[] = [];
        this._participants.map((item) => {
            result.push({
                bet: item.bet,
                avatar: item.avatar,
                percentage: this.totalBet / 100 * item.bet
            });
        })
        return result;
    }
}

const rouletteState = new RouletteState();

export default rouletteState;