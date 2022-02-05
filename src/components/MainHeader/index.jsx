import { Header, useMantineColorScheme } from '@mantine/core';
import React from 'react';

function MainHeader(props) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
     <Header height={60} padding="xs">
        <button onClick={() => toggleColorScheme()}>Click me</button>
    </Header>
  )
}

export default MainHeader;