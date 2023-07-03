import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import logo from "../assets/favicon.ico";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();
    console.log(navigate);
    return (
        <Col
            md={3}
            className={"mt-3 mx-3"}
            onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
            <Card style={{ cursor: "pointer" }} c>
                <Image
                    className={"align-self-center card-img-top"}
                    width={200}
                    height={"auto"}
                    src={process.env.REACT_APP_API_URL + device.img}
                />
                <div
                    className={"d-flex align-items-center justify-content-center text-center mt-3"}
                    style={{ height: "100%" }}>
                    {device.name}
                </div>
                <div
                    className={"text-black-50 d-flex justify-content-around align-items-end mb-3"}
                    style={{ height: "100%" }}>
                    <div style={{ fontWeight: "bold", color: "darkslategray" }}>
                        {device.price} MDL
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
