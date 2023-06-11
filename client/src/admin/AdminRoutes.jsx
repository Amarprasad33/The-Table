import { Route, Routes } from "react-router-dom";
import DetailFoods from "./components/DetailFoods";
import ListFoods from "./components/ListFoods";
import CreateFood from "./components/CreateFood";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="list" element={<ListFoods />} />
            <Route path="detail/:id" element={<DetailFoods />} />
            <Route path="create" element={<CreateFood/>} />
        </Routes>
    );
}

export default AdminRoutes;