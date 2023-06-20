import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import logo from "../assets/favicon.ico";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();
    console.log(navigate);
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
            <Card style={{ width: 220, height: 300, cursor: "pointer" }}>
                <Image
                    className={"align-self-center"}
                    width={"auto"}
                    height={200}
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
                    {/* <div className={"d-flex"}>
                        <div className={"d-flex align-items-center"}>
                            {device.price}
                            <Image className={"ms-1"} width={18} height={18} src={logo} />
                        </div>
                    </div> */}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
