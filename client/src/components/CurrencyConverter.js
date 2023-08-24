import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";

const CurrencyConverter = observer(() => {
    const { currency } = useContext(Context);
    // currency._currency.map((...item) => console.log(item));
    console.log(currency.currency);
    return (
        <div>
            {currency.currency.map((item) => (
                <div>{item.value}</div>
            ))}
        </div>
    );
});
export default CurrencyConverter;
