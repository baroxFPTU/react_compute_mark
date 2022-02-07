import { Navbar } from "@mantine/core";
import React, {useState} from 'react';
import MainLinks from "../MainLinks";

function MainNavbar(props) {
  const [opened,  setOpened] = useState(false);
  
  
  const widthConfig = {
     lg: 400,
     sm: 300
  }

  return (
    <Navbar
      width={{...widthConfig}}
      padding="xs"
      hidden={!opened}
      hiddenBreakpoint="sm"
    >
      <Navbar.Section>
      </Navbar.Section>
      <Navbar.Section grow>
        <MainLinks/>
      </Navbar.Section>
      <Navbar.Section>
        <span>@Barox</span>
      </Navbar.Section>
    </Navbar>
  );
}

export default MainNavbar;