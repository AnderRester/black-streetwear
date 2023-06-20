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
        <Container className={"my-5 py-5"}>
            <Row>
                <Col md={6}>
                    <Image
                        width={"auto"}
                        height={900}
                        src={process.env.REACT_APP_API_URL + device.img}
                        style={{ objectFit: "cover" }}
                        className="img-fluid"
                    />
                </Col>
                <Col md={6}>
                    <Card className={"d-flex ps-5 py-5"} style={{ border: "none" }}>
                        <Row>
                            <h2 className={"my-3"}>{device.name}</h2>
                        </Row>
                        <Row>
                            <h4 className={"mt-3"}>Available Sizes</h4>
                        </Row>
                        <Row>
                            <h5>X XL XXL</h5>
                        </Row>
                        <Row className="py-3">
                            {device.info.map((info, index) => (
                                <Row key={info.id}>
                                    <h5 style={{ fontWeight: 400 }}>
                                        {info.title}: {info.description}
                                    </h5>
                                </Row>
                            ))}
                        </Row>
                        <h3 className="mt-4 mb-3 text-center">{device.price} MDL</h3>
                        <Button className={"my-3"} variant={"outline-dark"}>
                            Add to Cart
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DevicePage;
