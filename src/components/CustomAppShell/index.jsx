import { AppShell, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useState } from "react";
import MainHeader from "../MainHeader";
import MainNavbar from "../MainNavbar";

function CustomAppShell({children}) {
  const [colorScheme, setColorScheme] = useState("light");
  const [opened, setOpened] = useState(false);

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
        <AppShell
          navbarOffsetBreakpoint="sm"
          padding="md"
          height={"100%"}
          navbar={<MainNavbar opened={opened} />}
          header={<MainHeader opened={opened} toggleOpened={setOpened} />}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
         {children}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default CustomAppShell;