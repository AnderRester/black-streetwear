import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import { Button } from "react-bootstrap";

const CurrencyConverter = observer(() => {
    const { currency } = useContext(Context);
    // currency._currency.map((...item) => console.log(item));
    console.log(currency.currency);
    return (
        <div className="d-flex justify-content-start align-items-center">
            {currency.currency.map((item) => (
                <Button variant="dark">{item.name}</Button>
            ))}
        </div>
    );
});
export default CurrencyConverter;
