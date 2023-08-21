import { Nav, DropdownButton, Dropdown } from "react-bootstrap";
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
        </Nav>
    );
});

export default Filters;
