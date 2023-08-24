import { Nav, DropdownButton, Dropdown, Button } from "react-bootstrap";
import React, { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const Filters = observer(() => {
    const { device } = useContext(Context);
    return (
        <Nav className="p-1 my-3 bg-dark justify-content-end filters_nav">
            <Nav.Item as="li" className="mx-2">
                <DropdownButton id="dropdown-basic-button" title="Тип" variant="dark">
                    {device.types.map((type) => (
                        <Dropdown.Item
                            style={{ cursor: "pointer" }}
                            active={type.id === device.selectedType.id}
                            key={type.id}
                            onClick={() => device.setSelectedType(type)}
                        >
                            {type.name}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
            </Nav.Item>
            <Nav.Item as="li" className="mx-2">
                <DropdownButton id="dropdown-basic-button" title="Бренд" variant="dark">
                    {device.brands.map((brand) => (
                        <Dropdown.Item
                            style={{ cursor: "pointer" }}
                            key={brand.id}
                            onClick={() => device.setSelectedBrand(brand)}
                            active={brand.id === device.selectedBrand.id}
                        >
                            {brand.name}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
            </Nav.Item>
            <Nav.Item as="li" className="mx-2">
                <Button variant="dark">
                    <svg fill="currentColor" viewBox="0 0 16 16" height="1.3em" width="1.3em">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </Button>
            </Nav.Item>
        </Nav>
    );
});

export default Filters;
