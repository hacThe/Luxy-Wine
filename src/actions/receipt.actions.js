import { receiptConstants } from '../constaint';
import { receiptServices } from '../services';


export const receiptActions = {
  getAll,
  create,
  update,
  getOne,
  deleteOne,
  deleteMany
}; 


function getAll(params) {
  return dispatch => {
    dispatch(request());

    receiptServices.getAll(params)
      .then(
        data => dispatch(success(data['data'])),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: receiptConstants.GET_ALL_REQUEST };
  }
  function success(receipts) {
    return { type: receiptConstants.GET_ALL_SUCCESS, receipts };
  }
  function failure(error) {
    return { type: receiptConstants.GET_ALL_FAILURE, error };
  }
}



function getOne(id) {
  return dispatch => {
    dispatch(request());

    receiptServices.getOne(id)
      .then(
        data => dispatch(success(data['data'])),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: receiptConstants.GET_ONE_REQUEST };
  }
  function success(receipt) {
    return { type: receiptConstants.GET_ONE_SUCCESS, receipt };
  }
  function failure(error) {
    return { type: receiptConstants.GET_ONE_FAILURE, error };
  }
}


function create(values) {
  return dispatch => {
    dispatch(request());

    receiptServices.create(values)
      .then(
        data => dispatch(success(data['data'])),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: receiptConstants.GET_ONE_REQUEST };
  }
  function success(receipt) {
    return { type: receiptConstants.GET_ONE_SUCCESS, receipt };
  }
  function failure(error) {
    return { type: receiptConstants.GET_ONE_FAILURE, error };
  }
}


function update(values) {
  return dispatch => {
    dispatch(request());

    receiptServices.update(values)
      .then(
        data => dispatch(success(data['data'])),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: receiptConstants.GET_ONE_REQUEST };
  }
  function success(receipt) {
    return { type: receiptConstants.GET_ONE_SUCCESS, receipt };
  }
  function failure(error) {
    return { type: receiptConstants.GET_ONE_FAILURE, error };
  }
}




// prefixed function name with underscore because delete is a reserved word in javascript
function deleteOne(id) {
  return dispatch => {
    dispatch(request(id));

    receiptServices.deleteOne(id)
      .then(
        () => dispatch(success(id)),
        error => dispatch(failure(id, error.toString()))
      );
  };


  function request(id) {
    return { type: receiptConstants.DELETE_ONE_REQUEST, id };
  }
  function success(id) {
    return { type: receiptConstants.DELETE_ONE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: receiptConstants.DELETE_ONE_FAILURE, id, error };
  }
}




// prefixed function name with underscore because delete is a reserved word in javascript
function deleteMany(values) {
  return dispatch => {
    dispatch(request(values));

    receiptServices.deleteMany(values)
      .then(
        (data) => dispatch(success(data["data"])),
        error => dispatch(failure(error.toString()))
      );
  };


  function request(id) {
    return { type: receiptConstants.DELETE_MANY_REQUEST, id };
  }
  function success(deleteCount) {
    return { type: receiptConstants.DELETE_MANY_SUCCESS, deleteCount };
  }
  function failure(error) {
    return { type: receiptConstants.DELETE_MANY_FAILURE, error };
  }
}
