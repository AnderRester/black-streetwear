import { makeAutoObservable } from "mobx";
export default class CurrencyStore {
    constructor() {
        this._currency = [
            { id: 1, value: "€" },
            { id: 2, value: "$" },
            { id: 3, value: "RON" },
            { id: 4, value: "MDL" },
        ];
        makeAutoObservable(this);
    }

    setBaskets(currency) {
        this._currency = currency;
    }

    get currency() {
        return this._currency;
    }
}
