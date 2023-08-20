import React, { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { Card } from "react-bootstrap";

const BrandBar = observer(() => {
    const { device } = useContext(Context);
    return (
        <div className={"d-flex flex-row"}>
            {device.brands.map((brand) => (
                <Card
                    style={{ cursor: "pointer" }}
                    key={brand.id}
                    className={"p-2 mb-1 ms-1 me-1"}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? "dark" : "light"}
                >
                    {brand.name}
                </Card>
            ))}
        </div>
    );
});

export default BrandBar;
