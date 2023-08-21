import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();
    return (
        <Card
            style={{ cursor: "pointer" }}
            className="my-1 mx-1 col-md-3 col-5"
            onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
        >
            <Image
                className={"align-self-center card-img-top"}
                width={200}
                height={"auto"}
                src={process.env.REACT_APP_API_URL + device.img}
            />
            <div
                className={"text-black-50 d-flex justify-content-around align-items-end mb-3"}
                style={{ height: "100%" }}
            >
                <div style={{ color: "darkslategray" }} className="text-center d-flex flex-column">
                    {device.name}
                    <span style={{ fontWeight: "bold", color: "darkslategray" }}>
                        {device.price} MDL
                    </span>
                </div>
            </div>
        </Card>
    );
};

export default DeviceItem;
