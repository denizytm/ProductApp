
// Kütüphaneler
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ConfigProvider } from "antd"

// Bileşenler
import User  from "./modules/users/User";
import Product from "./modules/products/Product";
import { UserList } from "./modules/users/components/UserList";
import { ProductList } from "./modules/products/components/ProductList";
import { AddProductForm } from "./modules/products/components/AddProductForm";
import { EditProductForm } from "./modules/products/components/EditProductForm";
import { DeleteProductForm } from "./modules/products/components/DeleteProductForm";

// Sayfalar
import { Admin } from "./pages/Admin";

// Dizayn
import { customToken } from "./style/AppDesignConfig";
import { ProductDetails } from "./modules/products/components/ProductDetails";

const App = () => {

  return (
    <ConfigProvider theme={{
      token : customToken
    }} >
      <BrowserRouter> {/* react-router-dom yapısını ekledim ki girilen path'e göre kullanıcıyı yönlendirebileyim */}
        <Routes  >
          <Route path="/admin" element={<Admin />}>  {/* Admin için oluşturulmuş Route */}
            <Route path="users" element={<User />} > {/* kullanıcıları yönetmek için oluşturulmuş Route */}
              <Route path="" element={<UserList />} /> {/* kullanıcıları yönetmek için oluşturulmuş Route */}
              <Route path="add" element={<UserList />} /> {/* kullanıcıları yönetmek için oluşturulmuş Route */}
              <Route path="edit" element={<UserList />} /> {/* kullanıcıları yönetmek için oluşturulmuş Route */}
              <Route path="delete" element={<UserList />} /> {/* kullanıcıları yönetmek için oluşturulmuş Route */}
            </Route>
            <Route path="products" element={<Product />} > {/* ürünleri yönetmek için oluşturulmuş Route */}
              <Route path="" element={<ProductList />} /> {/* kullanıcıları yönetmek için oluşturulmuş Route */}
              <Route path="add" element={<AddProductForm />} /> {/* kullanıcıları yönetmek için oluşturulmuş Route */}
              <Route path=":id" element={<ProductDetails />} /> {/* kullanıcıları yönetmek için oluşturulmuş Route */}
              <Route path="edit/:id" element={<EditProductForm />} /> {/* kullanıcıları yönetmek için oluşturulmuş Route */}
              <Route path="delete/:id" element={<DeleteProductForm />} /> {/* kullanıcıları yönetmek için oluşturulmuş Route */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
