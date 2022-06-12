import { Container } from 'react-bootstrap'
import { useState } from 'react'
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { appActions, receiptActions } from '../../../actions';

import { ShipmentDetail } from './component/ShipmentDetail'
import { ReceiptBrefing } from './component/ReceiptBrefing'
import './Payment.scss'
import { useDispatch, useSelector } from 'react-redux';
import { cookiesUtil } from '../../../utilities';

function Payment() {
    const dispatch = useDispatch();
    const isLogedIn = useSelector(state => state.userReducer.isLogedIn);

    const [province, setProvince] = useState({});
    const [district, setDistrict] = useState({});
    const [ward, setWard] = useState({});
    const [addressError, setAddressError] = useState('');

    const [payMethod, setPayMethod] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const address = {
        province: province,
        setProvince: setProvince,
        district: district,
        setDistrict: setDistrict,
        ward: ward,
        setWard: setWard,
        addressError: addressError,
        setAddressError: setAddressError
    }
    const afterPayment = () => {
        alert("Đặt hàng thành công!!")
        if(!isLogedIn){
            cookiesUtil.removeProductCart();
        }
    }

    const handleSubmit = (values) => {
        var cart = [];
        if (!isLogedIn) {
            cart = cookiesUtil.getProductCart();
        } else {

        }
        if (!province.code || !district.code || !ward.code) {
            setAddressError("Invalid transfer address");
            return;
        }

        const receipt = {
            creater: null, // ID người tạo, nullable
            receiver: {
                name: values.fullname,
                phoneNumber: values.phone, // required
                province: province,
                district: district,
                ward: ward,
                description: "",
                note: values.note,
            }, // Tên và địa chỉ người nhận hàng.
            voucher: null, // Object id của voucher.
            cart: cart,
            totalPrice: totalPrice,
            status: 1, //0: bị hủy, 1: chờ xác nhận, 2: đã xác nhận, 3: đang giao. 4: đã nhận hàng, 6: boom hàng
            payMethod: payMethod,
        }
        console.log("receipt: ", receipt);
        dispatch(receiptActions.create(receipt, afterPayment()))
    }

    const paymentSchema =
        Yup.object().shape({
            fullname: Yup.string().required("Enter your name"),
            phone: Yup.string().required("Enter your phone number").matches(
                /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                "Invalid phone number"
            )
        })

    return (
        <Container className='payment-wrapper' >
            <Container>
                <h1 className='payment-title'>Đơn hàng của bạn</h1>
            </Container>

            <Formik
                initialValues={{
                    fullname: "",
                    phone: "",
                    note: "",
                }}
                validationSchema={paymentSchema}
                onSubmit={values => {
                    dispatch(appActions.openConfirmDialog("Xác nhận thanh toán", () => handleSubmit(values)));
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <ShipmentDetail address={address} payMethod={payMethod} setPayMethod={setPayMethod} errors={errors} touched={touched} />
                        <hr />
                        <ReceiptBrefing totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                    </Form>
                )}
            </Formik>
        </Container >
    )
}
export default Payment;