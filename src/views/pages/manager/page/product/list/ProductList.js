import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productActions } from "../../../../../../actions/product.actions";
import LeadingIconButton from "../../../component/LeadingIconButton";
import { GrDocumentExcel } from "react-icons/gr";
import DataTableComponent from "../../../component/DataTableComponent";
const columnDocs = [
  // {field: , headerName: , width: }
  { field: "stt", headerName: "STT", width: 50 },
  { field: "sku", headerName: "Mã SKU", width: 150 },
  { field: "name", headerName: "Tên khóa học", width: 150, flex: 1 },
  { field: "price", headerName: "Giá", width: 150 },
  { field: "quantity", headerName: "Số lượng", width: 150 },
  { field: "producer", headerName: "Nhà sản xuất", width: 150 },
  { field: "experation", headerName: "Hạn sử dụng", width: 150 },
  { field: "createdAt", headerName: "Ngày nhập", width: 150 },
];
function ProductList(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productActions.getAll());
  }, []);
  const rawData = useSelector((state) => {
    console.log({ state });
    return state.productReducer.products;
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
    navigate(`/quan-ly/san-pham/${e.id}`);
  };

  const addProductOnClick = () => {
    navigate("/quan-ly/san-pham/new");
  };
  return (
    <div className="manager-container">
      <span onClick={addProductOnClick} className="lw-btn">
        Thêm sản phẩm
      </span>
      <div className="list-manager-wapper">
        <div className="title">Quản lý sản phẩm</div>
        <div className="data-table-container">
          <div className="table-header">
            <div className="heading">
              <div className="header">Danh sách khóa học</div>
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

export default ProductList;
