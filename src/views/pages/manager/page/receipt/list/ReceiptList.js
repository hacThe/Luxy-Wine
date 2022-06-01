import React from "react";
import { ManagerProductComponent } from "../../../component/product-component/ManagerProductComponent";
const products = [
  {
    _id: "1",
    name: "Wine Castellari Bergaglio, Salluvii Gavi, 2017",
    avtURL:
      "https://res.cloudinary.com/tanthanh0805/image/upload/v1645587735/LuxyWine/Rectangle10_tmk53m.png",
    imgURLs: [
      "https://res.cloudinary.com/tanthanh0805/image/upload/v1645587735/LuxyWine/Rectangle10_tmk53m.png",
      "https://res.cloudinary.com/tanthanh0805/image/upload/v1645587735/LuxyWine/Rectangle10_tmk53m.png",
    ],
    quantity: 7,
    importPrice: 600000, // Giá nhập
    sellPrice: 750000, // Giá bán gốc
    discountPrice: 70000, // Giá bán đã sale
    temperature: { minimum: 10, maximun: 40 }, // Nhiệt độ sử dụng
    color: ["White", "Blue"],
    food: ["Bò khô"],
    origin: "Italy", // Xuất xứ
    producer: "DOCG", //Nhà sản xuất
    concentrationPercent: 40, //  nồng độ cồn ( tính theo %)
    capacity: 750, // Dung tích (ml)
    vintage: 2017, // Năm sản xuất
    aboutProduct: "about product", // Một đoạn ngắn mô tả thông tin sản phẩm
    suger: 10, // Hàm lượng đường
    experation: "Date", //Date
    productType: "wine", // wine/combo/accessory
    isSpecial: true,
    isNew: true,
  },
];
function ReceiptList(props) {
  return (
    <div>
      Receipt List
      <ManagerProductComponent product={products[0]} />
    </div>
  );
}

export default ReceiptList;
