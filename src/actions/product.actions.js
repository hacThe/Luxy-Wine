import { productConstants, userConstants } from '../constaint';
import { productServices } from '../services';


export const userActions = {
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

    productServices.getAll(params)
      .then(
        data => dispatch(success(data['data'])),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: productConstants.GET_ALL_REQUEST };
  }
  function success(products) {
    return { type: productConstants.GET_ALL_SUCCESS, products };
  }
  function failure(error) {
    return { type: productConstants.GET_ALL_FAILURE, error };
  }
}



function getOne(id) {
  return dispatch => {
    dispatch(request());

    productServices.getOne(id)
      .then(
        data => dispatch(success(data['data'])),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: productConstants.GET_ONE_REQUEST };
  }
  function success(product) {
    return { type: productConstants.GET_ONE_SUCCESS, product };
  }
  function failure(error) {
    return { type: productConstants.GET_ONE_FAILURE, error };
  }
}


function create(values) {
  return dispatch => {
    dispatch(request());

    productServices.create(values)
      .then(
        data => dispatch(success(data['data'])),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: productConstants.GET_ONE_REQUEST };
  }
  function success(product) {
    return { type: productConstants.GET_ONE_SUCCESS, product };
  }
  function failure(error) {
    return { type: productConstants.GET_ONE_FAILURE, error };
  }
}


function update(values) {
  return dispatch => {
    dispatch(request());

    productServices.update(values)
      .then(
        data => dispatch(success(data['data'])),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: productConstants.GET_ONE_REQUEST };
  }
  function success(product) {
    return { type: productConstants.GET_ONE_SUCCESS, product };
  }
  function failure(error) {
    return { type: productConstants.GET_ONE_FAILURE, error };
  }
}




// prefixed function name with underscore because delete is a reserved word in javascript
function deleteOne(id) {
  return dispatch => {
    dispatch(request(id));

    productServices.deleteOne(id)
      .then(
        () => dispatch(success(id)),
        error => dispatch(failure(id, error.toString()))
      );
  };


  function request(id) {
    return { type: productConstants.DELETE_ONE_REQUEST, id };
  }
  function success(id) {
    return { type: productConstants.DELETE_ONE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: productConstants.DELETE_ONE_FAILURE, id, error };
  }
}




// prefixed function name with underscore because delete is a reserved word in javascript
function deleteMany(values) {
  return dispatch => {
    dispatch(request(values));

    productServices.deleteMany(values)
      .then(
        (data) => dispatch(success(data["data"])),
        error => dispatch(failure(id, error.toString()))
      );
  };


  function request(id) {
    return { type: productConstants.DELETE_MANY_REQUEST, id };
  }
  function success(deleteCount) {
    return { type: productConstants.DELETE_MANY_SUCCESS, deleteCount };
  }
  function failure(id, error) {
    return { type: productConstants.DELETE_MANY_FAILURE, id, error };
  }
}