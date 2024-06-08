import React from "react";

// Component
import {
  Container,
  Box,
  Avatar,
  Switch,
  InputGroup,
  Input,
  InputRightAddon,
} from "@chakra-ui/react";

// Assets
const logo = require("../../assets/logo.png");

const Header = () => {
  return (
    <Box
      padding="4"
      bg="red"
      // color="green"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap="50"
    >
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="10"
      >
        <img
          src={logo}
          alt="logo"
          style={{
            height: "10%",
            width: "10%",
          }}
        />

        <InputGroup size="sm" flex="1" width="100%">
          <Input placeholder="mysite" width="100%" />
          <InputRightAddon>Search</InputRightAddon>
        </InputGroup>
      </Container>

      <Container
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        gap="10"
        flex="1"
      >
        <Switch size="md" />
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </Container>
    </Box>
  );
};

export default Header;
