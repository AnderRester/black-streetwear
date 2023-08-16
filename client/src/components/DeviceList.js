import React, { useContext, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const { device } = useContext(Context);

    return (
        <Row className={"d-flex flex-row"}>
            {device.devices.map((device) => (
                <DeviceItem key={device.id} device={device}></DeviceItem>
            ))}
        </Row>
    );
});

export default DeviceList;
