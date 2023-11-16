import { RouterProvider } from "react-router-dom";
import "./App.css";
import Carts from "./Carts";
import { useGlobalContext } from "./context";
import router from "./components/CB";
import { About, Service } from './pages';

function App() {
  const { amount, clearCart, total } = useGlobalContext();

  return (
    <>
      <h2>helllo</h2>
      <h2>{amount}</h2>

      <Carts />
      <RouterProvider router={router} />
      <p className="total">Total price {total}</p>
      <button className="clear" onClick={() => clearCart()}>
        CLEAR
      </button>
    </>
  );
}

export default App;
