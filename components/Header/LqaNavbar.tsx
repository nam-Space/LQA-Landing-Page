import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Image } from "react-bootstrap";
import Logo from "../../assets/img/Logos.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import japanImg from "../../assets/img/japan.png";
import { GiHamburgerMenu } from "react-icons/gi";

const LotusNavbar = () => {
    return (
        <Navbar
            bg="white"
            expand="lg"
            fixed="top"
            // sticky="top"
            className="h-full p-0 flex justify-between"
        >
            <Navbar.Brand href="#home" className="p-0">
                <Image src={Logo.src} alt="" className="h-[141px]" />
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="w-[100px] flex items-center justify-center"
            >
                <GiHamburgerMenu />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className="bg-white z-5">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className="ml-[20px]">
                        <Button variant="primary">Home</Button>
                    </Nav.Link>
                    <Nav.Link href="#link" className="ml-[20px]">
                        About Us
                    </Nav.Link>
                    <Nav.Link href="#link" className="ml-[20px]">
                        News
                    </Nav.Link>
                    <Nav.Link href="#link" className="ml-[20px]">
                        Ours services
                    </Nav.Link>
                    <Nav.Link href="#link" className="ml-[20px]">
                        Blogs
                    </Nav.Link>
                    <Nav.Link href="#link" className="ml-[20px]">
                        Careers
                    </Nav.Link>
                    <Nav.Link href="#link" className="ml-[20px]">
                        Contact
                    </Nav.Link>
                    <Nav.Link href="#link" className="ml-[20px]">
                        <Image
                            src={japanImg.src}
                            alt="japan"
                            className="mr-0 mb-[20px] lg:mr-[40px] lg:mb-0"
                        />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default LotusNavbar;
