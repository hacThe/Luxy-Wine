import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { receiptActions } from "../../../../../../actions/receipt.actions";
import LeadingIconButton from "../../../component/LeadingIconButton";
import { GrDocumentExcel } from "react-icons/gr";
import DataTableComponent from "../../../component/DataTableComponent";
const columnDocs = [
  // {field: , headerName: , width: }
  { field: "stt", headerName: "STT", width: 50 },
  // {
  //   field: "creater",
  //   headerName: "Người tạo đơn hàng",
  //   width: 300,
  //   renderCell: (params) => {
  //     const { creater, receiver } = params.row;
  //     return (
  //       <p
  //         style={{
  //           fontSize: "1.4rem",
  //           fontFamily: "Montserrat",
  //         }}
  //       >{`${creater.name ? creater.name : receiver.name}`}</p>
  //     );
  //   },
  // },
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
    field: "address",
    headerName: "Địa chỉ người nhận",
    width: 350,
    renderCell: (params) => {
      const { receiver } = params.row;
      return (
        <p
          style={{
            whiteSpace: "break-spaces",
            textAlign: "left",
            fontSize: "1.2rem",
            fontFamily: "Montserrat",
          }}
        >{`${receiver.description}, ${receiver.ward.name}, ${receiver.district.name}, ${receiver.province.name}`}</p>
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
    field: "cart",
    headerName: "Số sản phẩm",
    width: 125,
    valueFormatter: (params) => {
      return `${params.value.length}`;
    },
  },

  {
    field: "status",
    headerName: "Trạng thái",
    width: 200,
    renderCell: (params) => {
      const { status } = params.row;
      const statusList = [
        { color: "#f00", title: "Đã hủy" },
        { color: "#f00", title: "Chờ xác nhận" },
        { color: "#f00", title: "Đã xác nhận" },
        { color: "#f00", title: "Đang giao hàng" },
        { color: "#f00", title: "Đã nhận hàng" },
        { color: "#f00", title: "Không nhận hàng" },
      ];

      //0: bị hủy, 1: chờ xác nhận, 2: đã xác nhận, 3: đang giao. 4: đã giao, 5: hoàn thành, 6: Giao không thành công
      return (
        <p
          style={{
            color: "white",
            borderRadius: "5px",
            fontWeight: "bold",
            lineHeight: "40px",
            padding: "0px 12px",
            backgroundColor: `${statusList[status].color}`,
            fontSize: "1.4rem",
            fontFamily: "Montserrat",
          }}
        >{`${status + 1}. ${statusList[status].title}`}</p>
      );
    },
  },

  { field: "createdAt", headerName: "Ngày tạo", width: 150 },
];
function ReceiptList(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(receiptActions.getAll());
  }, []);
  const rawData = useSelector((state) => {
    console.log({ state });
    return state.receiptReducer.receipts || [];
  });
  console.log({ rawData });

  const rowDocs = rawData.map((item, index) => {
    item.id = item._id;
    item.stt = index + 1;
    return item;
  });

  const navigate = useNavigate();
  var [filter, setFilter] = useState("");
  var changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const editCourseHandleOnClick = (e) => {
    navigate(`/quan-ly/hoa-don/${e.id}`);
  };

  const addReceiptOnClick = () => {
    navigate("/quan-ly/hoa-don/new");
  };
  return (
    <div className="manager-container">
      <span onClick={addReceiptOnClick} className="lw-btn">
        Tạo đơn hàng
      </span>
      <div className="list-manager-wapper">
        <div className="title">Quản lý đơn hàng</div>
        <div className="data-table-container">
          <div className="table-header">
            <div className="heading">
              <div className="header">Danh sách đơn hàng</div>
              <LeadingIconButton
                icon={<GrDocumentExcel size={24} />}
                content={"Xuất Excel"}
              />
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
          <DataTableComponent
            rowHeight={100}
            onRowClick={editCourseHandleOnClick}
            columnDocs={columnDocs}
            rowDocs={rowDocs}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
}

export default ReceiptList;
