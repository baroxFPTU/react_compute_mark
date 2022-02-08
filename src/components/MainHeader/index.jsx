import { ActionIcon, Box, Burger, Button, Center, createStyles, Group, Header, MediaQuery, ThemeIcon, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React, { useEffect } from 'react';
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

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
  const { width } = useViewportSize();
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const {opened, toggleOpened} = props;

  useEffect(() => {
    if (width >= theme.breakpoints.sm) {
      toggleOpened(false);
    }
  }, [width]);

  return (
     <Header height={60} fixed={opened}>
       <Group position="apart" spacing="xl" className={classes.groupHeader}>
        <Box className={classes.groupLeft}>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => toggleOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
          </MediaQuery>
          <Center inline>
          <h3>
          Compute Mark
          </h3>
          </Center>
        </Box>
            <ActionIcon color={colorScheme === "light" ? "cyan" :  "yellow"} size="lg" radius="md" onClick={() => toggleColorScheme()}>
                {colorScheme === 'light' ? <BsFillMoonStarsFill/> : <BsSunFill/>} 
            </ActionIcon>
       </Group>
    </Header>
  )
}

export default MainHeader;