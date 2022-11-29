import React from "react";
import { Container, Form, NavBtns } from "./style";
import Moon from "../../assets/Navbar-icons/moon.svg";
import Add from "../../assets/Navbar-icons/add.svg";
import Ring from "../../assets/Navbar-icons/ring.svg";
import { ReactComponent as Search } from "../../assets/Navbar-icons/search.svg";
const Navbar = () => {
  return (
    <Container>
      <h2>Salom User</h2>
      <NavBtns>
        <img src={Moon} alt="moon" />
        <img src={Add} alt="moon" />
        <img src={Ring} alt="moon" />
        <Form>
          <Search />
          <input type="text" />
        </Form>
      </NavBtns>
    </Container>
  );
};

export default Navbar;
