import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { appActions, receiptActions } from "../../../../../../actions";
import { Grid } from "@mui/material";
import BackToPageButton from "../../../component/BackToPageButton";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { numberUtils } from "../../../../../../utilities";
import DataTableComponent from "../../../component/DataTableComponent";
import "./ReceiptDetail.scss";
import LeadingIconButton from "../../../component/LeadingIconButton";
function ReceiptDetail(props) {
  const statusList = [
    { color: "#f00", title: "Đã hủy" },
    { color: "#f00", title: "Chờ xác nhận" },
    { color: "#f00", title: "Đã xác nhận" },
    { color: "#f00", title: "Đang giao hàng" },
    { color: "#f00", title: "Đã nhận hàng" },
    { color: "#f00", title: "Không nhận hàng" },
  ];
  const columnDocs = [
    // {field: , headerName: , width: }
    { field: "stt", headerName: "STT", width: 50 },
    {
      field: "name",
      headerName: "Tên sản phẩm",
      width: 300,
      flex: 1,
      renderCell: (params) => {
        const { avtURL, name, price } = params.row;
        return (
          <div className="product-info-cell display-flex">
            <img src={avtURL} height="50px" alt="" />
            <div
              style={{ marginLeft: "12px", textAlign: "left" }}
              className="price-wrapper"
            >
              <p
                style={{
                  fontFamily: "Montserrat",
                  whiteSpace: "break-spaces",
                  maxWidth: "350px",
                  fontSize: "1.4rem",
                }}
              >
                {name}
              </p>
            </div>
          </div>
        );
      },
    },
    { field: "sku", headerName: "Mã SKU", width: 150 },
    { field: "quantity", headerName: "Số lượng", width: 150 },
    {
      field: "price",
      headerName: "Đơn giá",
      width: 150,
      valueFormatter: (params) => params.value.toLocaleString() + " VNĐ",
    },
    {
      field: "total",
      headerName: "Thành tiền",
      minWidth: 150,
      renderCell: (params) => {
        const { price, quantity } = params.row;
        return (
          <div className=" display-flex">
            <p
              style={{
                fontFamily: "Montserrat",
                color: "red",
                fontWeight: "600",
                fontSize: "1.3rem",
              }}
            >
              {numberUtils.numberWithThousandSeperator(price * quantity || 0) +
                " VNĐ"}
            </p>
          </div>
        );
      },
    },
  ];
  const receipt = useSelector((state) => state.receiptReducer.receipt) || {};
  const [receiptStatus, setReceiptStatus] = useState(receipt.status);

  const cartItems = receipt.cart?.map((item, index) => {
    const temp = {};
    temp.id = item.product._id;
    temp.stt = index + 1;
    temp.name = item.product.name;
    temp.sku = item.product.sku;
    temp.quantity = item.quantity;
    temp.price = item.product.price;
    temp.total = item.product.price * item.quantity;
    temp.avtURL = item.product.avtURL;
    return temp;
  });
  console.log({ cartItems });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleEditOnClick = () => {
    navigate(`/quan-ly/hoa-don/edit/${id}`);
  };
  useEffect(() => {
    dispatch(receiptActions.getOne(id));
  }, []);
  const handleDeleteOnClick = () => {
    dispatch(
      appActions.openConfirmDialog(
        "Bạn có thực sự muốn xóa sản phẩm này khỏi trang web?",
        () => {
          dispatch(
            receiptActions.deleteOne(id, () => {
              navigate("/quan-ly/hoa-don");
            })
          );
        }
      )
    );
  };

  console.log(receipt);
  return (
    <div className="receipt-detail-wrapper">
      <div className="display-flex justify-content-between">
        <BackToPageButton content={"Xem danh sách hóa đơn"} />
        <LeadingIconButton
          style={{
            backgroundColor: "rgb(143, 0, 0)",
            color: "white",
          }}
          icon={<AiOutlineDelete size={18} />}
          content="Xóa hóa đơn"
        />
      </div>
      <h1>ID ĐƠN HÀNG: {receipt._id}</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="infomation-wrapper">
            <h2 className="information-field">Người tạo đơn hàng</h2>
            <p className="infomation-content">{receipt.receiver?.name}</p>
          </div>

          <div className="infomation-wrapper">
            <div className="display-flex">
              <h2 className="information-field">Địa chỉ nhận hàng</h2>
              <span className="icon-button">
                <AiOutlineEdit size={18} />
              </span>
            </div>
            <p className="infomation-content">
              <strong>{`${receipt.receiver?.name}`}</strong>
              {`(${receipt?.receiver?.phone}) \n ${receipt.receiver?.description} ${receipt.receiver?.ward.name} ${receipt.receiver?.district.name} ${receipt.receiver?.province.name}`}
            </p>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="infomation-wrapper">
            <h2 style={{ marginBottom: 12 }} className="information-field">
              Trạng thái đơn hàng
            </h2>
            <div className="display-flex">
              <select
                name="status"
                value={receiptStatus}
                onChange={(e) => setReceiptStatus(e.target.value)}
              >
                {statusList.map((item, index) => {
                  return (
                    <option key={index} value={index}>
                      {item.title}
                    </option>
                  );
                })}
              </select>
              <span style={{ marginLeft: 12 }} className="lw-btn">
                Cập nhật
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="infomation-wrapper">
        <div className="display-flex">
          <h2 className="information-field">Thông tin giỏ hàng</h2>
          <span className="icon-button">
            <AiOutlineEdit size={18} />
          </span>
        </div>
        <DataTableComponent
          rowHeight={100}
          // onRowClick={editCourseHandleOnClick}
          columnDocs={columnDocs}
          rowDocs={cartItems || []}
          autoHeight={true}
          // filter={filter}
        />
      </div>

      <div
        style={{ maxWidth: "600px" }}
        className="infomation-wrapper receipt-brief-wrapper"
      >
        <div className="display-flex justify-content-between">
          <span className="receipt-brief">Tổng giá trị đơn hàng</span>
          <span className="money-formatter">
            {cartItems &&
              cartItems
                .reduce((accumulate, crr) => {
                  return crr.total + accumulate;
                }, 0)
                .toLocaleString() + "VNĐ"}
          </span>
        </div>

        <div className="display-flex justify-content-between">
          <span className="receipt-brief">
            Voucher khuyến mãi {receipt.voucher && `(${receipt.voucher.code})`}
          </span>
          <span className="money-formatter">30.000 VNĐ</span>
        </div>

        <div className="display-flex justify-content-between">
          <span className="receipt-brief">Phí giao hàng</span>
          <span className="money-formatter">30.000 VNĐ</span>
        </div>

        <div className="display-flex justify-content-between">
          <span style={{ fontWeight: "bold" }} className="receipt-brief">
            Tổng cộng
          </span>
          <span style={{ fontWeight: "bold" }} className="money-formatter">
            30.000 VNĐ
          </span>
        </div>
      </div>

      <div className="infomation-wrapper">
        <div className="display-flex">
          <h2 className="information-field">Trạng thái giao hàng</h2>
          <span className="icon-button">
            <AiOutlineEdit size={18} />
          </span>
        </div>
        <p className="infomation-content">
          <strong>Đơn vị vận chuyển: </strong>
          {`${receipt.shippingUnit}`}
        </p>

        <p className="infomation-content">
          <strong>Mã vận đơn: </strong>
          {`${receipt.shippingCode}`}
        </p>
      </div>
    </div>
  );
}

export default ReceiptDetail;
