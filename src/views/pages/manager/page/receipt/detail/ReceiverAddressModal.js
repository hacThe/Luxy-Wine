import React from "react";
import SingleReceiverForm from "../component/SingleReceiverForm";

function ReceiverAddressModal(receiver, open, handleClose) {
  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    padding: "48px",
    bgcolor: "#fff",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  const onSubmit = (values) => {
    console.log("Receiver modal log: ", values);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div>
          <h1>Chỉnh sửa địa chỉ người nhận</h1>
          <SingleReceiverForm receiverInfo={receiver} onSubmit={onSubmit} />
        </div>
      </Box>
    </Modal>
  );
}

export default ReceiverAddressModal;
