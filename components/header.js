import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import Link from "next/link";
import useAuth from "../auth/context";
import { useRouter } from "next/router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const { logout, user, isAuthenticated } = useAuth();
  const router = useRouter();

  return (
    <MDBNavbar color="default-color-dark" expand="md" dark>
      <MDBNavbarToggler onClick={handleToggle} />
      <MDBCollapse id="navbarCollapse" navbar isOpen={isOpen}>
        <MDBNavbarNav left>
          <MDBNavItem active={router.pathname === "/"}>
            <Link href="/" passHref>
              <div className="nav-link">
                <MDBIcon icon="home" className="mr-1" />
                Home
              </div>
            </Link>
          </MDBNavItem>
          <Link href="/properties" passHref>
            <MDBNavItem>
              <div className="nav-link">Available properties</div>
            </MDBNavItem>
          </Link>
          {isAuthenticated && user.role === "admin" && (
            <MDBNavItem>
              <Link href="/admin">
                <a className="nav-link">Dashboard</a>
              </Link>
            </MDBNavItem>
          )}
        </MDBNavbarNav>

        <MDBNavbarNav right>
          <MDBNavItem active={router.pathname === "/contact"}>
            <Link href="/contact">
              <a className="nav-link">
                <MDBIcon icon="address-book" className="mr-1" />
                Contact
              </a>
            </Link>
          </MDBNavItem>
          {!isAuthenticated && (
            <MDBNavItem active={router.pathname === "/login"}>
              <Link href="/login">
                <a className="nav-link">
                  <MDBIcon icon="user-alt" className="mr-1" />
                  Sign in
                </a>
              </Link>
            </MDBNavItem>
          )}

          {isAuthenticated && (
            <>
              <MDBNavItem>
                <div className="nav-link">
                  <MDBIcon icon="user-alt" className="mr-1" />
                  Hey {user.username}
                </div>
              </MDBNavItem>

              <MDBNavItem>
                <div className="nav-link" onClick={logout}>
                  <MDBIcon icon="power-off" className="mr-1" />
                  Sign out
                </div>
              </MDBNavItem>
            </>
          )}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Header;
