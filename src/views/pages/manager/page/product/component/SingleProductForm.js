import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Đây là trường bắt buộc"),
  avtURL: Yup.string().required("Đây là trường bắt buộc"),
  quantity: Yup.number().min(0).required("Đây là trường bắt buộc"),
  importPrice: Yup.number().min(0).required("Đây là trường bắt buộc"),
  sellPrice: Yup.number().min(0).required("Đây là trường bắt buộc"),
  discountPrice: Yup.number().min(0).required("Đây là trường bắt buộc"),
  aboutProduct: Yub.string().required("Đây là trường bắt buộc"),
});

function SingleProductForm({products}) {
  return (
    <div>
      <Formik
        initialValues={{
            name: "",
            avtURL: "",
            imgURLs: [],
            quantity: 0,
            importPrice: 0, // Giá nhập
            sellPrice: 0, // Giá bán gốc
            discountPrice: 0, // Giá bán đã sale
            temperature: { minimum: 0, maximun: 100 }, // Nhiệt độ sử dụng
            color: "",
            food: [],
            origin: "", // Xuất xứ
            producer: "", //Nhà sản xuất
            concentrationPercent: 0, //  nồng độ cồn ( tính theo %)
            capacity: 0, // Dung tích (ml)
            vintage: "", // Năm sản xuất
            aboutProduct: "", // Một đoạn ngắn mô tả thông tin sản phẩm
            suger: 0, // Hàm lượng đường
            experation: "",//Date
            productType: "", // wine/combo/accessory
            isSpecial: false,
            isNew: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SingleProductForm;
