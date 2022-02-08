import { Navbar, useMantineTheme } from "@mantine/core";
import React, {useState} from 'react';
import { MAIN_HEADER_HEIGHT } from "../../constants/global";
import MainLinks from "../MainLinks";
import { useViewportSize } from '@mantine/hooks';

function MainNavbar(props) {
  const {opened} = props;

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
      fixed={opened}
      position={{top: opened && MAIN_HEADER_HEIGHT, left: 0}}
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