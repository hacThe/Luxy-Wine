import { Box, Modal } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import { CartItem } from "../../../../cart/component/CartItem";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberUtils } from "../../../../../../utilities";
import { receiptActions } from "../../../../../../actions";
import { useNavigate, useParams } from "react-router-dom";

function CartModal({ cart, open, handleClose, receiverInfo }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "80%",
    padding: "48px",
    bgcolor: "#fff",
    borderRadius: "10px",
    boxShadow: 24,
    overflow: "auto",
    p: 4,
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateReceipt = (receiverInfo, cart) => {
    const totalPrice = cart.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
    const totalOriginPrice = cart.reduce((acc, item) => {
      return acc + item.product.originPrice * item.quantity;
    }, 0);

    const profit = totalOriginPrice - totalPrice;
    dispatch(
      receiptActions.create(
        {
          receiver: receiverInfo,
          cart,
          totalPrice,
          profit,
          creater: "628aaef0fd1023522e9c1375",
          status: 3,
          payMethod: isPayed ? 1 : 0,
        },
        () => {
          navigate("/quan-ly/hoa-don");
        }
      )
    );
  };

  const [isPayed, setIsPayed] = useState(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="modal-container-fe">
          <div className="cart-header">
            <h1>Giỏ hàng của bạn</h1>
            <p>
              (Có <b>{cart.length}</b> sản phẩm trong giỏ hàng)
            </p>
          </div>

          <Row className="cart-body">
            <Col xs={12} xl={9} className="list-product">
              {cart.map((item, index) => {
                return (
                  <CartItem product={item.product} quantity={item.quantity} />
                );
              })}
            </Col>

            <Col xs={12} xl={3} className="receipt-briefing">
              <div>
                <h1>TÓM TẮT ĐƠN HÀNG</h1>
                <p>Chưa bao gồm phí vận chuyển</p>
                <div className="total-price">
                  <p>Tổng tiền: </p>
                  <p>
                    {numberUtils.numberWithThousandSeperator(
                      cart.reduce((acc, item) => {
                        return acc + item.product.price * item.quantity;
                      }, 0)
                    )}{" "}
                    đ
                  </p>
                </div>
                <hr></hr>

                <label
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginRight: "12px",
                    fontWeight: "400",
                  }}
                >
                  <input
                    type="checkbox"
                    value={isPayed}
                    onChange={(e) => setIsPayed(e.target.value)}
                    name="isNewProduct"
                  />
                  Đã thanh toán
                </label>

                <div className="button-group">
                  <button
                    onClick={() => handleCreateReceipt(receiverInfo, cart)}
                    className="btn-buy"
                  >
                    Tạo đơn hàng
                  </button>
                  <button onClick={handleClose} className="btn-to-store">
                    Chọn thêm sản phẩm
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Box>
    </Modal>
  );
}

export default CartModal;
