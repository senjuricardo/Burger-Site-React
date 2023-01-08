import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
function App() {
  return (
    <div >
      <Layout>
        <BurgerBuilder/>
        <Checkout></Checkout>
      </Layout>
      
    </div>
  );
}

export default App;
