import React, { useState } from "react";
import SelectReceiptProduct from "./SelectReceiptProduct";
import SingleReceiverForm from "./SingleReceiverForm";

function SingleReceiptForm() {
  const [step, setStep] = useState(1);
  const [receiverInfo, setReceiverInfo] = useState({ name: undefined });
  return (
    <div>
      {step === 1 && (
        <>
          <h2 style={{ fontSize: "1.8rem", margin: "18px 0" }}>
            Bước 1: Điền thông tin khách hàng
          </h2>
          <SingleReceiverForm
            onSubmit={(e) => {
              setReceiverInfo(e);
              setStep(2);
            }}
            receiverInfo={{}}
          />
        </>
      )}

      {step === 2 && (
        <>
          <h2 style={{ fontSize: "1.8rem", marginBottom: 0 }}>
            Bước 2: Chọn sản phẩm
          </h2>
          <SelectReceiptProduct
            receiverInfo={receiverInfo}
            onAddProduct={(value) => alert(JSON.stringify(value, null, 2))}
          />
        </>
      )}
    </div>
  );
}

export default SingleReceiptForm;
