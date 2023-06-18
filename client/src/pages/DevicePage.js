import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] });
    const { id } = useParams();
    useEffect(() => {
        fetchOneDevice(id).then((data) => setDevice(data));
    }, []);
    return (
        <Container className={"mt-4 justify-content-around"}>
            <Row>
                <Col md={6}>
                    <Image
                        width={"auto"}
                        height={400}
                        src={process.env.REACT_APP_API_URL + device.img}
                    />
                </Col>
                <Col md={6}>
                    <Card
                        className={"d-flex justify-content-between align-items-center"}
                        style={{ height: "100%", border: "none" }}
                    >
                        <Row>
                            <h2 className={"mb-2 mt-5 text-center"}>{device.name}</h2>
                        </Row>
                        <Row>
                            <h3 className={"mb-2 text-center"}>Available Sizes</h3>
                        </Row>
                        <Row>
                            <h3 className={"text-center"}>X XL XXL</h3>
                        </Row>
                        <h3>{device.price} MDL</h3>
                        <Button className={"mb-2"} variant={"outline-dark"}>
                            Add to Cart
                        </Button>
                    </Card>
                </Col>
            </Row>
            {/* <Row className={"d-flex flex-column m-3"} style={{ width: "100%", fontSize: 18 }}>
                <h1>Parameters</h1>
                {device.info.map((info, index) => (
                    <Row
                        key={info.id}
                        style={{
                            background: index % 2 === 0 ? "lightgray" : "transparent",
                            padding: 10,
                        }}
                    >
                        {info.title}: {info.description}
                    </Row>
                ))}
            </Row> */}
        </Container>
    );
};

export default DevicePage;
