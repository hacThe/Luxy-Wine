import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productActions } from "../../../../../../actions/product.actions";
import { Col, Container, Row } from "react-bootstrap";
import { PaginationCustom } from "../../../../../component/PaginationCustom";
import "./index.scss";
import { ManagerProductComponent } from "../../../component/product-component/ManagerProductComponent";
import { Grid } from "@mui/material";
import { Breadcrumb } from "../../../../../component/Breadcrumb";
import { CartItem } from "../../../../cart/component/CartItem";
import { Badge } from "@mui/material";
import CartModal from "./CartModal";
function SelectProductList({ receiverInfo }) {
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    console.log("current page: ", currentPage);
  }, [currentPage]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productActions.getAll());
  }, []);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, quantity) => {
    let isExist = false;
    const temp = cart.map((item) => {
      if (item.product._id === product._id) {
        item.quantity = item.quantity + quantity;
        isExist = true;
      }
      return item;
    });
    if (!isExist) {
      temp.push({ product, quantity });
    }
    setCart(temp);
    console.log(cart);
  };

  const products = useSelector((state) => state.productReducer.products);

  const navigate = useNavigate();
  var [filter, setFilter] = useState("");
  var changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="manager-container">
      <CartModal
        receiverInfo={receiverInfo}
        cart={cart}
        open={openModal}
        handleClose={() => setOpenModal(false)}
      />
      <span className="watch-cart-trigger-wrapper">
        {" "}
        <span
          onClick={() => {
            setOpenModal(true);
          }}
          className={
            cart.length === 0
              ? "watch-cart-trigger"
              : "watch-cart-trigger animateOpen "
          }
          style={
            cart.length === 0
              ? {}
              : { backgroundColor: "red", animation: "shaking" }
          }
        >
          {" "}
          Xem giỏ hàng ({cart.length})
        </span>
      </span>
      <div className="list-manager-wapper">
        <div className="data-table-container">
          <div className="table-header">
            <div className="heading">
              <div className="header">Danh sách sản phẩm</div>
            </div>
            <div className="filter-container">
              <p className="filter-label">Nhập bất kỳ để tìm kiếm</p>
              <input
                className="filter-input"
                type="text"
                onChange={(e) => changeFilter(e)}
              ></input>
            </div>
          </div>

          <Container className="product-list">
            {products
              ?.filter((product) => {
                const infoSearch = product.name + product.sku + product.price;
                return infoSearch.includes(filter);
              })
              .map((product, idx) => {
                return (
                  <div key={idx} className="py-3 px-3">
                    <ManagerProductComponent
                      addToCart={handleAddToCart}
                      product={product}
                    />
                  </div>
                );
              })}

            <div className="product-list-footer">
              <PaginationCustom
                numberOfElement={products.length}
                elementPerPage={10}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default SelectProductList;
