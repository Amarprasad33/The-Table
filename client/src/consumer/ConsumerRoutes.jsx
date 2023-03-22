import { Route, Routes } from "react-router-dom";
import ListFood from "./components/ListFood";
import DetailFood from "./components/DetailFood";

const ConsumerRoutes = () => {
    return (
        <Routes>
            <Route path="list" element={<ListFood />} />
            <Route path="detail/:id" element={<DetailFood />} />
        </Routes>
    );
}

export default ConsumerRoutes;