
// Packages
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ConfigProvider } from "antd"
import { createStoreHook } from "react-redux";

// Components
import User  from "./modules/users/User";
import Product from "./modules/products/Product";
import { ProductList } from "./modules/products/components/ProductList";
import { AddProductForm } from "./modules/products/components/AddProductForm";
import { ProductDetails } from "./modules/products/components/ProductDetails";
import { EditProductForm } from "./modules/products/components/EditProductForm";
import { UserList } from "./modules/users/components/UserList";
import { AddUserForm } from "./modules/users/components/AddUserForm";
import { UserDetails } from "./modules/users/components/UserDetails";
import { EditUserForm } from "./modules/users/components/EditUserForm";

// Page
import { Admin } from "./pages/Admin";

// Design
import { customToken } from "./style/AppDesignConfig";
import "./App.css";

import { Hello } from "./shared/components/Hello";
import Hello2 from "./shared/components/Hello2";


const App = () => {

  return (
    <ConfigProvider theme={{
      token : customToken // tema tokenimizi ant Design'ın tokeni olarak provider'e veriyoruz
    }} >
      <BrowserRouter> {/* react-router-dom yapısını ekledim ki girilen path'e göre kullanıcıyı yönlendirebileyim */}
        <Routes  >

          <Route path="/admin" element={<Admin />}>  {/* Admin için oluşturulmuş Route */}

            <Route path="users" element={<User />} > {/* kullanıcıları yönetmek için oluşturulmuş Route */}
              <Route path="" element={<UserList />} /> {/* kullanıcıları liste halinde döndüren route */}
              <Route path="add" element={<AddUserForm />} /> {/* yeni bir kullanıcı ekleten route */}
              <Route path=":id" element={<UserDetails />} /> {/* id'si girilen kullanıcının detaylarını gösteren route */}
              <Route path="edit/:id" element={<EditUserForm />} /> {/* varolan bir kullanıcının bilgilerini güncelleyen route */}
              <Route path="delete" element={<UserList />} /> {/* kullanıcıyı sistemden kaldıran route */}
            </Route>

            <Route path="products" element={<Product />} > {/* ürünleri yönetmek için oluşturulmuş Route */}
              <Route path="" element={<ProductList />} /> {/* ürünlerin listesini dönen route */}
              <Route path="add" element={<AddProductForm />} /> {/* yeni ürün ekleten route */}
              <Route path=":id" element={<ProductDetails />} /> {/* id'si girilen ürünün detaylarını gösteren route */}
              <Route path="edit/:id" element={<EditProductForm />} /> {/* varolan ürünü güncelleyen route */}
            </Route>
          </Route>

          <Route path="/1" element={<Hello />} />
          <Route path="/2" element={<Hello2 />} />

        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
