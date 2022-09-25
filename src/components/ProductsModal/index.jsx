import React, { useEffect, useState } from "react";
import { addToCart, reoveFromCart } from "../../actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

export default function ProductsModal(props) {
  const { modalRef, hideModal, data = {} } = props;
  const [img, setImg] = useState();
  const [selectedProduct, cartItems] = useSelector((state) => [
    state.products.selectedProduct,
    state.cart.items,
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    setImg(data?.thumbnail);
  }, [data]);

  const chooseImg = (img) => {
    setImg(img);
  };
  const isAddedToCart = () => {
    return cartItems?.find((product) => product?.item?.id === data?.id)
      ? true
      : false;
  };

  return (
    <div
      ref={modalRef}
      className="modal fade modal-lg"
      id="productDetailsModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="container mt-5 mb-5">
              <div className="row d-flex justify-content-center">
                <div className="col-md-10">
                  <div className="card">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="images p-3">
                          <div className="text-center p-4">
                            <img
                              id="main-image"
                              src={img}
                              width="250"
                              alt={data?.title}
                            />
                          </div>
                          <div className="thumbnail text-center">
                            {data?.images?.map((img, key) => (
                              <img
                                key={key}
                                className={"p-2"}
                                onClick={() => chooseImg(img)}
                                src={img}
                                width="70"
                                style={{ cursor: "pointer" }}
                                alt={data?.title}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="product col-md-6">
                        <div className=" p-4">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <i className="fa fa-long-arrow-left"></i>
                              <FontAwesomeIcon
                                icon={faArrowLeftLong}
                                size="2x"
                                className={"cart"}
                                onClick={hideModal}
                              />
                            </div>
                            <ReactStars
                              count={5}
                              value={2.5}
                              edit={false}
                              size={24}
                              activeColor="#ffd700"
                            />
                          </div>
                          <div className="mt-4 mb-3">
                            <span className="text-uppercase text-muted brand">
                              {data?.brand}
                            </span>
                            <h5 className="text-uppercase">{data?.title}</h5>
                            <div className="price d-flex flex-row align-items-center">
                              <span className="act-price">{`${data?.price} Rs`}</span>
                              <div className="ml-2">
                                {/* <small className="dis-price">$59</small> */}
                                <span>{`  (${data?.discountPercentage}% OFF)`}</span>
                              </div>
                            </div>
                          </div>
                          <p className="about">{data?.description}</p>

                          <div className="cart mt-4 align-items-center">
                            {isAddedToCart() ? (
                              <button
                                className="btn btn-outline-danger text-uppercase mr-2 px-4"
                                onClick={() =>
                                  dispatch(reoveFromCart(selectedProduct))
                                }
                              >
                                Remove from cart
                              </button>
                            ) : (
                              <button
                                className="btn btn-outline-success text-uppercase mr-2 px-4"
                                onClick={() =>
                                  dispatch(addToCart(selectedProduct))
                                }
                              >
                                Add to cart
                              </button>
                            )}
                            <i className="fa fa-heart text-muted"></i>
                            <i className="fa fa-share-alt text-muted"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
