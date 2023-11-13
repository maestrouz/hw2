
import './App.css'
import Carts from './Carts';
import { useGlobalContext } from './context'

function App() {

  const { amount, clearCart } = useGlobalContext();

  return (
    <>
      <h2>helllo</h2>
      <h2>{amount}</h2>
      
      <Carts />

      <button onClick={() => clearCart()}>clealAll</button>
        
    </>
  )
}

export default App
