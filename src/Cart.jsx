/* eslint-disable react/prop-types */

import { useGlobalContext } from "./context"
import './cart.css'


export default function Cart({id, img, title, price, amount }) {
    const { add, dec, rem } = useGlobalContext();

  return (
    <div className="namee">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{price} $</h4>
      <p>{amount}</p>
      <div className="btns">
        <button onClick={() => add(id)}>+</button>
        <button onClick={amount <= 1 ? () => rem(id) : () => dec(id)}>
          -
        </button>
        <button onClick={() => rem(id)}>Delete</button>
      </div>
    </div>
  );
}
