import { Route, Routes } from "react-router-dom";
import CustomAppShell from "./components/CustomAppShell";
import NotFound from "./components/NotFound";
import GraduatedCalc from "./features/Calculation/pages/GraduatedCalc";

function App() {
  return (
    <CustomAppShell>
      <Routes>
        <Route path="/" element={<GraduatedCalc />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CustomAppShell>
  );
}
export default App;
