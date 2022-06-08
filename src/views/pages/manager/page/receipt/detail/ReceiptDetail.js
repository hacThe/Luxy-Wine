import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { appActions, receiptActions } from "../../../../../../actions";
import { Grid } from "@mui/material";

function ReceiptDetail(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleEditOnClick = () => {
    navigate(`/quan-ly/hoa-don/edit/${id}`);
  };
  const receipt = useSelector((state) => state.receiptReducer.receipt) || {};
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
    <>
      <div style={{ marginTop: "80px", position: "relative" }}>
        <div className="top-right-fixed display-flex">
          <span onClick={handleEditOnClick} className="lw-btn">
            Chỉnh sửa
          </span>
          <span
            onClick={handleDeleteOnClick}
            style={{ backgroundColor: "#FF0000" }}
            className="lw-btn"
          >
            Xóa
          </span>
        </div>
        <div className="bill-infomation"></div>
        <div className="invoice-information">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <p>
                Người tạo:{" "}
                {receipt.creater
                  ? receipt.creater.name
                  : receipt.receiver?.name}
              </p>
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default ReceiptDetail;
