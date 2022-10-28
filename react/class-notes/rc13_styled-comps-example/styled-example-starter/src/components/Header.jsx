import React from "react";
import StyleHeader, { Image, Logo, Nav } from "./styles/Header.styled";
import Button from "./styles/Button.styled";
import Flex from "./styles/Flex.styled";

const Header = () => {
  return (
    <StyleHeader>
      <Nav>
        <Logo src="./images/logo.png" />
        <div>
          <Button color="#A62440">Apply Courses</Button>
          <Button bg="#A62440">Talk to Adviser</Button>
        </div>
      </Nav>

      <Flex>
        <div>
          <h1>The IT Career of Your Dreams Starts Here!</h1>
          <p>
            Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.
          </p>
          <Button bg="#A62440">Start Your New Career</Button>
        </div>
        <Image src="./images/hero.jpg" />
      </Flex>
    </StyleHeader>
  );
};

export default Header;
