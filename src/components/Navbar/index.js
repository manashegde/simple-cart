import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { cartPath, homePath, loginPath } from "../../routes/routes";
import "./index.css";
export default function Navbar() {
  const [cartItems, userInfo] = useSelector((state) => [
    state.cart.items,
    state.auth.userInfo,
  ]);
  const navigate = useNavigate();
  const goToCart = () => {
    navigate(cartPath);
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to={homePath} className="navbar-brand">
        Simple Cart
      </Link>
      <div className="d-flex">
        {userInfo && (
          <h5 className="mr-5">{`Howdy! ${userInfo?.firstName}, ${userInfo?.lastName}`}</h5>
        )}

        <FontAwesomeIcon
          icon={faCartShopping}
          size="2x"
          className={"cart"}
          onClick={goToCart}
        />
        {cartItems.length > 0 ? (
          <span className="badge badge-warning ml-5" id="lblCartCount">
            {cartItems.length}
          </span>
        ) : null}
        {
          <Link className="ml-5 h4" style={{ marginLeft: 5 }} to={loginPath}>
            Logout
          </Link>
        }
      </div>
    </nav>
  );
}
