import { Routes, Route, Link } from "react-router-dom";

import EditSale from "./pages/EditSale";
import AddSale from "./pages/AddSale";
import ForgotPassword from "./pages/forgotPassword";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductList from "./pages/productList";
import AddProduct from "./pages/addProduct";
import EditProduct from "./pages/editProduct";
import EditUser from "./pages/editUser";
import AddUser from "./pages/addUser";
import UserList from "./pages/userList";
import SalesList from "./pages/salesList";

const App = ()=>{
  return (
    <div>
      
        <Routes>
          
          <Route path="/editUser" element={<EditUser />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/userList" element={<UserList />} />

          <Route path="/editSale" element={<EditSale />} />
          <Route path="/addSale" element={<AddSale />} />
          <Route path="/listSale" element={<SalesList />} />

          <Route path="/editProduct/:id" element={<EditProduct />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/listProduct" element={<ProductList />} />

          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/" element={<Login />} />
        </Routes>
      
    </div>
  );
}


export default App;
