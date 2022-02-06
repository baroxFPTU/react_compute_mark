import { AppShell, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import MainNavbar from "./components/MainNavbar";
import NotFound from "./components/NotFound";
import GraduatedCalc from "./features/Calculation/pages/GraduatedCalc";

function App() {
  const [colorScheme, setColorScheme] = useState("light");
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
          navbar={<MainNavbar />}
          header={<MainHeader />}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Routes>
            <Route path="/" element={<GraduatedCalc />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
export default App;
