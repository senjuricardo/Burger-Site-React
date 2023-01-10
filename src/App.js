import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
        <Layout>
          <Routes>
            <Route path="/checkout"  element={<Checkout/>}></Route>
            <Route path="/" exact element={<BurgerBuilder/>}></Route>
         </Routes>
        </Layout>
      </div>
  );
}

export default App;
