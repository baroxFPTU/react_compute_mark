import { AppShell } from "@mantine/core";
import MainNavbar from "./components/MainNavbar";
import MainHeader from "./components/MainHeader";

function App() {
  return (
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
    ></AppShell>
  );
}
export default App;
