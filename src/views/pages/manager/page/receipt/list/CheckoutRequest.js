import React from "react";
import { Box, Modal } from "@mui/material";
import { useDispatch } from "react-redux";
import { receiptActions } from "../../../../../../actions";
import DataTableComponent from "../../../component/DataTableComponent";
import { dateUltils } from "../../../../../../utilities/date.ultil";
import LeadingIconButton from "../../../component/LeadingIconButton";
import { AiOutlineExport } from "react-icons/ai";
import { useState } from "react";

function CheckoutRequestModal({ requests, open, handleClose }) {
  console.log({ requests, open, handleClose });
  const style = {
    position: "absolute",
    top: "50%",
    maxHeight: "90%",
    overflow: "scroll",

    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    padding: "48px",
    bgcolor: "#fff",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };
  const dispatch = useDispatch();

  const columnDocs = [
    // {field: , headerName: , width: }
    { field: "stt", headerName: "STT", width: 50 },
    { field: "id", headerName: "Mã đơn hàng", width: 200 },

    {
      field: "receiver",
      headerName: "Người nhận",
      width: 150,
      valueFormatter: (params) => {
        return params.value.name;
      },
    },

    {
      field: "phone",
      headerName: "Số điện thoại",
      width: 150,
      renderCell: (params) => {
        const { receiver } = params.row;
        return (
          <p
            style={{
              fontSize: "1.4rem",
              fontFamily: "Montserrat",
            }}
          >{`${receiver.phone}`}</p>
        );
      },
    },

    {
      field: "totalPrice",
      headerName: "Tổng cộng",
      width: 125,
      valueFormatter: (params) => {
        return `${params.value.toLocaleString()} VNĐ`;
      },
    },

    {
      field: "payMethod",
      headerName: "Phương thức thanh toán",
      width: 125,
      valueFormatter: (params) => {
        return params.value === 2 ? "Momo" : "Thanh toán qua ngân  hàng";
      },
    },

    {
      field: "createdAt",
      headerName: "Ngày tạo",
      width: 150,
      valueFormatter: (params) => {
        return dateUltils.fortmatToVietNameDay(params.value);
      },
    },
  ];

  const onSubmit = (values) => {
    console.log("Accept modal log: ", values);
  };
  console.log("Receiver modal log: ", handleClose);

  const [filter, setFilter] = useState("");
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="list-manager-wapper">
          <div
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#780000",
              textAlign: "center",
            }}
            className="title"
          >
            Danh sách yêu cầu xác nhận thanh toán
          </div>
          <div className="data-table-container">
            <div className="table-header">
              <div
                style={{
                  flexDirection: "column",
                }}
                className="filter-container"
              >
                <label
                  style={{
                    display: "block",
                    textAlign: "left",
                    marginTop: "24px",
                  }}
                >
                  Nhập bất kỳ để tìm kiếm
                </label>
                <input
                  className="filter-input"
                  type="text"
                  onChange={(e) => setFilter(e)}
                ></input>
              </div>
            </div>
            <DataTableComponent
              autoHeight={true}
              rowHeight={100}
              columnDocs={columnDocs}
              rowDocs={requests}
              filter={filter}
            />
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default CheckoutRequestModal;
