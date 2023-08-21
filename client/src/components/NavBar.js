import React, { useContext } from "react";
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
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="1.5em"
                                    width="1.5em"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M12 14v8H4a8 8 0 018-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9 4h1v5h-8v-5h1v-1a3 3 0 016 0v1zm-2 0v-1a1 1 0 00-2 0v1h2z" />
                                </svg>
                            </Button>
                            <Button
                                variant={"outline-light"}
                                className="ms-3"
                                onClick={() => navigate(CART_ROUTE)}
                            >
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    height="1.5em"
                                    width="1.5em"
                                >
                                    <path d="M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.49.598l-1 5a.5.5 0 01-.465.401l-9.397.472L4.415 11H13a.5.5 0 010 1H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2z" />
                                </svg>
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
