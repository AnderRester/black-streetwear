import { makeAutoObservable } from "mobx";
export default class CurrencyStore {
    constructor() {
        this._currency = [
            { id: 1, value: "€" },
            { id: 2, value: "$" },
            { id: 3, value: "RON" },
            { id: 4, value: "MDL" },
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
