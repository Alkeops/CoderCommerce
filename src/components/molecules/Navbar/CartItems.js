import React, { useState } from "react";
import classNames from "classnames";

import { CartButton } from "components/atoms";

const prefix = "m-cart-items";
//Va a cambiar despues
const CartItems = () => {
  const [active, setActive] = useState(false);
  const classForComponent = classNames(prefix, { "is-open": active });
  return (
    <div className={classForComponent}>
      <CartButton onClick={() => setActive(!active)} />
      <div className={`${prefix}__content`}>
        <div className={`${prefix}__content-list`}>
          {" "}
          Aqui van a ir la lista de los items
        </div>
      </div>
    </div>
  );
};

export default CartItems;
