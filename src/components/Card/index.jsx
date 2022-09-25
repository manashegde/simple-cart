import React from "react";
import "./index.css";

export default function Card(props) {
  const {
    id,
    imgUrl,
    title,
    description,
    onBtnClick,
    isAddedToCart,
    onRemoveBtnClick,
    onCardClick,
  } = props;
  return (
    <div className="card">
      <img
        src={imgUrl}
        className=" img-fluid rounded-3 card-img-top product-card"
        alt={title}
        onClick={() => onCardClick()}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className=" ellipsis-text">{description}</p>
        {isAddedToCart ? (
          <button
            className="btn btn-outline-danger"
            onClick={() => onRemoveBtnClick(id)}
          >
            Remove from cart
          </button>
        ) : (
          <button
            className="btn btn-outline-success"
            onClick={() => onBtnClick(id)}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
