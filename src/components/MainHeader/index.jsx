import { Box, Center, Group, Header, useMantineColorScheme, createStyles, MediaQuery, Burger } from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme) => {
  return {
    groupHeader: {
      paddingLeft: '20px',
      paddingRight: '20px',
      height: '100%'
    },
    groupLeft: {
      display:'flex', alignItems: 'center'
    }
  }
})

function MainHeader(props) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  return (
     <Header height={60}>
       <Group position="apart" spacing="xl" className={classes.groupHeader}>
        <Box className={classes.groupLeft}>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                // opened={opened}
                // onClick={() => setOpened((o) => !o)}
                size="sm"
                // color={theme.colors.gray[6]}
                mr="xl"
              />
          </MediaQuery>
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