import { Route, Routes } from "react-router-dom";
import DetailFoods from "./components/DetailFoods";
import ListFoods from "./components/ListFoods";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="list" element={<ListFoods />} />
            <Route path="detail/:id" element={<DetailFoods />} />
        </Routes>
    );
}

export default AdminRoutes;