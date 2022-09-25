import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, reoveFromCart } from "../actions/cartActions";
import {
  getProducts,
  setCurrentPage,
  setSelectedProduct,
} from "../actions/products";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import ProductsModal from "../components/ProductsModal";
import { pageSize } from "../utils/constants";
import { Modal } from "bootstrap";

export default function Home() {
  const [products, cartItems, currentPage, selectedProduct] = useSelector(
    (state) => [
      state.products.products,
      state.cart.items,
      state.products.currentPage,
      state.products.selectedProduct,
    ]
  );
  const modalRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(getPaginationObj()));
  }, [currentPage]);

  const addToCartHandler = (id) => {
    const selectedProduct = products?.products?.find(
      (product) => product.id === id
    );
    dispatch(addToCart(selectedProduct));
  };
  const showModal = (product) => {
    dispatch(setSelectedProduct(product));
    const modalEle = modalRef.current;
    const bsModal = new Modal(modalEle, {
      backdrop: "static",
      keyboard: false,
    });
    bsModal.show();
  };
  const hideModal = () => {
    const modalEle = modalRef.current;
    const bsModal = Modal.getInstance(modalEle);
    bsModal.hide();
  };
  const removeFromCartHandler = (id) => {
    const selectedProduct = products?.products?.find(
      (product) => product.id === id
    );
    dispatch(reoveFromCart(selectedProduct));
  };

  const isItemAddedToCart = (id) => {
    return cartItems?.find((product) => product.item.id === id) ? true : false;
  };

  const onPageNumberClick = (pageNum) => {
    dispatch(setCurrentPage(pageNum));
  };

  const getPaginationObj = () => {
    const skiptCount = (currentPage - 1) * pageSize;
    return {
      skip: skiptCount,
      limit: pageSize,
    };
  };

  return (
    <div className="container">
      <div className="row">
        {products &&
          products?.products?.map((product, key) => (
            <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12 mt-5">
              <Card
                key={key}
                id={product.id}
                title={product.title}
                description={product.description}
                imgUrl={product.thumbnail}
                onBtnClick={addToCartHandler}
                isAddedToCart={isItemAddedToCart(product.id)}
                onRemoveBtnClick={removeFromCartHandler}
                onCardClick={() => showModal(product)}
              />
            </div>
          ))}
      </div>

      <div className="row offset-4 mt-5">
        <Pagination
          currentPage={currentPage}
          onPageNumberClick={onPageNumberClick}
          totalCount={products?.total}
        />
      </div>
      <ProductsModal
        modalRef={modalRef}
        hideModal={hideModal}
        data={selectedProduct}
      />
    </div>
  );
}
