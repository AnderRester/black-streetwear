import React, { useContext } from "react";
import { Context } from "../index";
import { Button, Container, Nav, Navbar, Image } from "react-bootstrap";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate, NavLink } from "react-router-dom";
import logo from "../assets/black_logo.png";
// import Basket from "../pages/Basket";
// import BasketPreview from "./BasketPreview";

const NavBar = observer(() => {
    const navigate = useNavigate();
    const { user } = useContext(Context);

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem("token");
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <NavLink className="ms-3" to={SHOP_ROUTE}>
                    <Image width={140} height={60} src={logo} style={{ filter: "invert(1)" }} />
                </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="ml-auto">
                    {user.isAuth ? (
                        <Nav
                            className="ms-auto"
                            style={{
                                maxHeight: "140px",
                                color: "white",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Button
                                variant={"outline-light"}
                                className="ms-3"
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >
                                Admin Pannel
                            </Button>
                            {/*<Button variant={"outline-light"} className="ms-3 mt-2" onClick={BasketPreview}>Cart</Button>*/}

                            <Button
                                variant={"outline-light"}
                                className="ms-3"
                                onClick={() => logOut()}
                            >
                                Log out
                            </Button>
                            <Button className="ms-3" variant={"outline-light"}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-bag-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                                </svg>
                            </Button>
                        </Nav>
                    ) : (
                        <Nav className="ms-auto" style={{ maxHeight: "150px", color: "white" }}>
                            <Button
                                variant={"outline-light"}
                                className={"mt-2"}
                                onClick={() => navigate(LOGIN_ROUTE)}
                            >
                                Sign in
                            </Button>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;
