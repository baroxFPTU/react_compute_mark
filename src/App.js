import { Navigate, Route, Routes } from "react-router-dom";
import CustomAppShell from "./components/CustomAppShell";
import NotFound from "./components/NotFound";
import GraduatedCalc from "./features/Calculation/pages/GraduatedCalc";
import SemesterCalc from "./features/Calculation/pages/SemesterCalc";
import SubjectCalc from "./features/Calculation/pages/SubjectCalc";

function App() {
  return (
    <CustomAppShell>
      <Routes>
        <Route path="/tinh-diem-tot-nghiep" element={<GraduatedCalc />} />
        <Route path="/tinh-diem-hoc-ki" element={<SemesterCalc />} />
        <Route path="/tinh-diem-mon-hoc" element={<SubjectCalc />} />
        <Route path="/" element={<Navigate to="/tinh-diem-tot-nghiep" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CustomAppShell>
  );
}
export default App;
