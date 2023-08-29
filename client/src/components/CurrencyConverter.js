import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";

const CurrencyConverter = observer(() => {
    const { currency } = useContext(Context);
    // currency._currency.map((...item) => console.log(item));
    console.log(currency.currency);
    return (
        <div className='d-flex justify-content-start flex-column align-items-center currency_bar'>
            <span className='ms-3 my-3'>Валюта</span>
            <ListGroup className='ms-3'>
                <ListGroupItem className='d-flex flex-row'>
                    {currency.currency.map((item) => (
                        <Button
                            variant='outline-dark'
                            style={{ fontSize: 12, borderWidth: 1 }}
                            className='mx-1'>
                            {item.name}
                        </Button>
                    ))}
                </ListGroupItem>
            </ListGroup>
        </div>
    );
});
export default CurrencyConverter;
