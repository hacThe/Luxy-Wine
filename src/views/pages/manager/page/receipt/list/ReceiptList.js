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
  { field: "title", headerName: "Tên bài viết", width: 300 },
  { field: "description", headerName: "Mô tả", width: 150, flex: 1 },

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
