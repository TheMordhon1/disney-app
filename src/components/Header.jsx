import React from "react";
import styled from "styled-components";

const Header = () => {
  const NavItem = [
    { href: "#", icon: "/images/home-icon.svg", name: "home" },
    { href: "#", icon: "/images/search-icon.svg", name: "search" },
    { href: "#", icon: "/images/watchlist-icon.svg", name: "watchlist" },
    { href: "#", icon: "/images/original-icon.svg", name: "original" },
    { href: "#", icon: "/images/movie-icon.svg", name: "movie" },
    { href: "#", icon: "/images/series-icon.svg", name: "series" },
  ];
  return (
    <Nav>
      <Logo>
        <img src="/images/disney-hotstar-logo-dark.svg" alt="logo" />
      </Logo>
      <NavMenu>
        {NavItem.map((item) => (
          <a key={item.name} href={item.href}>
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </a>
        ))}
      </NavMenu>
      <Login>Login</Login>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 120px;
  margin-top: 4px;
  max-height: 110px;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: index auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      text-transform: uppercase;

      &:before {
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0px 4px;
        bottom: -6px;
        left: 0;
        height: 2px;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #ffffff;
    color: #000;
  }
`;

export default Header;
