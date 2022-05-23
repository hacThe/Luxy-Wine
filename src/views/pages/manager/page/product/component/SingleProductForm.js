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
  aboutProduct: Yub.string().required("Đây là trường bắt buộc")
});

  
  

function SingleProductForm(props) {
  return <div></div>;
}

export default SingleProductForm;
