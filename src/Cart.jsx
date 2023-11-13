/* eslint-disable react/prop-types */

import { useGlobalContext } from "./context"


export default function Cart({ img, title, price, amount }) {
    const { add } = useGlobalContext();

  return (
      <div>
          <img src={img} alt="" />
          <h2>{title}</h2>
          <p>{ price}</p>
          <p>{amount}</p>
          <button onClick={() => add()}>add</button>
          <button>dec</button>
          <button>rem</button>

    </div>
  )
}
