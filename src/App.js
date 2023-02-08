import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import ContactData from "./containers/Checkout/ContactData/ContactData";
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
        <Layout>
          <Routes>
            <Route path="/checkout"  element={<Checkout/>}></Route>
            <Route path="/orders" exact element={<Orders/>}></Route>
            <Route path="/" exact element={<BurgerBuilder/>}></Route>
             <Route path={"/checkout/contact-data"} element={<ContactData/>}></Route> 
         </Routes>
        </Layout>
      </div>
  );
}

export default App;
