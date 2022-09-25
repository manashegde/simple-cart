import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
export default function CartItem(props) {
  const {
    title,
    imgUrl,
    price,
    id,
    updateQuantity,
    removeFromCart,
    quantity,
    brand,
  } = props;
  return (
    <>
      <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img src={imgUrl} className="img-fluid rounded-3" alt={title} />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-muted">{brand}</h6>
          <h6 className="text-black mb-0">{title}</h6>
          {/* <h6 className="text-   mt-5">{"2 items left"}</h6> */}
        </div>
        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
          <button
            className="btn btn-link px-2"
            onClick={() => updateQuantity(id, "remove")}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>

          <input
            id="form1"
            min="1"
            name="quantity"
            value={quantity}
            type="number"
            className="form-control form-control-sm"
          />

          <button
            className="btn btn-link px-2"
            onClick={() => updateQuantity(id, "add")}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 className="mb-0">{`Rs. ${price * quantity}`}</h6>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          <a href="#!" className="text-muted">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => removeFromCart(id)}
            />
          </a>
        </div>
      </div>
      <hr />
    </>
  );
}
