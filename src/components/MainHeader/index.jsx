import { Box, Center, Group, Header, useMantineColorScheme, createStyles } from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme) => {
  return {
    groupHeader: {
      paddingLeft: '20px',
      paddingRight: '20px',
      height: '100%'
    }
  }
})

function MainHeader(props) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  return (
     <Header height={60}>
       <Group position="apart" spacing="xl" className={classes.groupHeader}>
        <Box>
          <Center inline>
          <h3>
          Compute Mark
          </h3>
          </Center>
        </Box>
          <button onClick={() => toggleColorScheme()}>Click me</button>
       </Group>
    </Header>
  )
}

export default MainHeader;