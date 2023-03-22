import { Container } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./admin/AdminRoutes";
import ConsumerRoutes from "./consumer/ConsumerRoutes";

function App() {
  return (
    <Container>
    <Routes>
      <Route path="admin/*" element={<AdminRoutes />} />
      <Route path="consumer/*" element={<ConsumerRoutes />} />
    </Routes>
    </Container>
  );
}

export default App;
