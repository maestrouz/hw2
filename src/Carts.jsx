
import { useGlobalContext } from './context'
import Cart from './Cart'

export default function Carts() {

    const {cart} = useGlobalContext()
  return (
    <div> {cart.map((item) => <Cart key={item.id} {...item} />)} </div>
  )
}
