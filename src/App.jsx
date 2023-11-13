
import './App.css'
import Carts from './Carts';
import { useGlobalContext } from './context'

function App() {

  const { amount, clearCart, total } = useGlobalContext();

  return (
    <>
      <h2>helllo</h2>
      <h2>{amount}</h2>
      
      <Carts />

      <button onClick={() => clearCart()}>clealAll</button>

      <p>total price { total}</p>
        
    </>
  )
}

export default App
