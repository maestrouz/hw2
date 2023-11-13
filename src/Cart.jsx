/* eslint-disable react/prop-types */

import { useGlobalContext } from "./context"


export default function Cart({id, img, title, price, amount }) {
    const { add, dec, rem } = useGlobalContext();

  return (
      <div>
          <img src={img} alt="" />
          <h2>{title}</h2>
          <p>{ price}</p>
          <p>{amount}</p>
          <button onClick={() => add(id)}>add</button>
          <button onClick={amount <=  1 ? () => rem(id) : () => dec(id)}>
              dec
          </button>
          <button onClick={() => rem(id)}>rem</button>
          {/* <button>rem</button> */}

    </div>
  )
}
