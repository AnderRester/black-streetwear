import { makeAutoObservable } from "mobx";
export default class CurrencyStore {
    constructor() {
        this._currency = [
            { id: 1, name: "€", value: 19 },
            { id: 2, name: "$", value: 18 },
            { id: 3, name: "RON", value: 4 },
            { id: 4, name: "MDL", value: 1 },
        ];
        this._selectedCurrency = {};
        this._page = 1;
        makeAutoObservable(this);
    }

    setCurrency(currency) {
        this._currency = currency;
    }

    setSelectedCurrency(currency) {
        this.setPage(1);
        this._selectedCurrency = currency;
    }

    setPage(page) {
        this._page = page;
    }

    get selectedCurrency() {
        return this._selectedCurrency;
    }

    get currency() {
        return this._currency;
    }

    get page() {
        return this._page;
    }
}
