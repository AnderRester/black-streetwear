import React, { useContext, useEffect } from "react";
import { Context } from "../index";
import { Button, Container, Nav, Navbar, Image } from "react-bootstrap";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, CART_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate, NavLink } from "react-router-dom";
import logo from "../assets/black_logo.png";

const NavBar = observer(({ removeFromCart }) => {
    const navigate = useNavigate();
    const { user } = useContext(Context);

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <NavLink className="m-auto" style={{ paddingLeft: 72 }} to={SHOP_ROUTE}>
                    <Image width={140} height={60} src={logo} style={{ filter: "invert(1)" }} />
                </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="justify-content-center align-items-center">
                    {user.isAuth ? (
                        <Nav
                            className="ms-auto"
                            style={{
                                maxHeight: "240px",
                                color: "white",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Button
                                variant={"outline-light"}
                                className="ms-3 my-4"
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >
                                Администрирование
                            </Button>
                            <Button
                                variant={"outline-light"}
                                className="ms-3"
                                onClick={() => navigate(CART_ROUTE)}
                            >
                                Корзина
                            </Button>
                            <Button
                                variant={"outline-light"}
                                className="ms-3 my-4"
                                onClick={() => logOut()}
                            >
                                Выход
                            </Button>
                        </Nav>
                    ) : (
                        <Nav className="ms-auto" style={{ maxHeight: "150px", color: "white" }}>
                            <Button
                                variant={"outline-light"}
                                className={"mt-2"}
                                onClick={() => navigate(LOGIN_ROUTE)}
                            >
                                Войти
                            </Button>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;
