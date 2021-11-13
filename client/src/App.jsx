import { Routes, Route, Link } from "react-router-dom";

import EditSale from "./pages/EditSale";
import AddSale from "./pages/AddSale";
import ForgotPassword from "./pages/forgotPassword";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductList from "./pages/productos/productList";
import AddProduct from "./pages/productos/addProduct";
import EditProduct from "./pages/productos/editProduct";
import EditUser from "./pages/usuarios/editUser";
import AddUser from "./pages/usuarios/addUser";
import UserList from "./pages/usuarios/userList";
import SalesList from "./pages/salesList";

const App = ()=>{
  return (
    <div>
      
        <Routes>
          
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/users" element={<UserList />} />

          <Route path="/editSale" element={<EditSale />} />
          <Route path="/addSale" element={<AddSale />} />
          <Route path="/listSale" element={<SalesList />} />

          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/products" element={<ProductList />} />

          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/" element={<Login />} />
        </Routes>
      
    </div>
  );
}


export default App;
