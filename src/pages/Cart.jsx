import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { reoveFromCart, updateQuantity } from "../actions/cartActions";
import CartItem from "../components/CartItems";
import { Link } from "react-router-dom";
import { homePath } from "../routes/routes";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const removeFromCart = (id) => {
    const selectedProduct = cartItems?.find(
      (product) => product.item.id === id
    );
    dispatch(reoveFromCart(selectedProduct.item));
  };

  const getTotal = () =>
    cartItems.reduce((acc, obj) => {
      return acc + obj.item.price * obj.quantity;
    }, 0);

  const updateQuantityHandler = (id, type) => {
    let quantity = type === "add" ? 1 : -1;
    const selectedProduct = cartItems?.find(
      (product) => product.item.id === id
    );

    quantity = quantity + selectedProduct.quantity;
    if (quantity >= 1) {
      dispatch(updateQuantity({ ...selectedProduct, quantity }));
    }
  };

  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2">
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h2 className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </h2>
                        <h6 className="mb-0 text-muted">{`${cartItems.length} items`}</h6>
                      </div>
                      <hr className="my-4" />
                      {cartItems.length > 0 ? (
                        cartItems.map((item, key) => (
                          <CartItem
                            key={key}
                            title={item.item.title}
                            imgUrl={item?.item?.thumbnail}
                            price={item.item.price}
                            id={item.item.id}
                            removeFromCart={removeFromCart}
                            updateQuantity={updateQuantityHandler}
                            quantity={item.quantity}
                            brand={item?.item?.brand}
                          />
                        ))
                      ) : (
                        <h4>Your cart is Empty</h4>
                      )}

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <Link to={homePath} className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2"></i>
                            Back to shop
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">items</h5>
                        <h5>{getTotal().toFixed(2)}</h5>
                      </div>

                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>{getTotal().toFixed(2)}</h5>
                      </div>
                      <button
                        type="button"
                        className="btn btn-dark btn-block btn-lg"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
