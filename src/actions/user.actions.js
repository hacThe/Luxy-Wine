import { userConstants } from "../constaint";
import { usersServices } from "../services";
import { cookiesUtil } from "../utilities";

export const userActions = {
  login,
  logout,
  register,
  getAll,
  getOne,
  delete: _delete,
  update,
  getOne,
  create,
  deleteMany,
};

/// này là hàm login
function login(email, password, callback) {
  return (dispatch) => {
    dispatch(request());
    usersServices.login(email, password).then(
      (user) => {
        console.log("login successfully", user);
        cookiesUtil.setAccessToken(user.token);
        dispatch(success(user.user));
        if (callback) {
          callback();
        }
      },
      (error) => {
        alert(error);
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: userConstants.LOGIN_REQUEST };
  }
  function success(logedUser) {
    return { type: userConstants.LOGIN_SUCCESS, logedUser };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function create(values, callback) {
  return (dispatch) => {
    dispatch(request());

    usersServices.create(values).then(
      (data) => {
        dispatch(success(data["data"]));
        if (callback instanceof Function) {
          callback(data["data"]);
        }
      },
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GET_ONE_REQUEST };
  }
  function success(user) {
    return { type: userConstants.GET_ONE_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.GET_ONE_FAILURE, error };
  }
}

function logout() {
  return (dispatch) => {
    usersServices.logout();
    dispatch(success());
  };
  function success() {
    return { type: userConstants.LOGOUT };
  }
}

function register(user, callback) {
  return (dispatch) => {
    // dispatch(request(user));

    usersServices.register(user).then(
      (data) => {
        // dispatch(success());
        // history.push('/login');
        // dispatch(alertActions.success('Registration successful'));
        alert("Đăng ký thành công");
        if (callback instanceof Function) {
          callback();
        }
      },
      (error) => {
        // dispatch(failure(error.toString()));
        // dispatch(alertActions.error(error.toString()));
        alert("Đăng ký thất bại! " + error);
      }
    );
  };

  /*   function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  } */
}

function getOne(id) {
  return (dispatch) => {
    dispatch(request());

    usersServices.getOne(id).then(
      (data) => dispatch(success(data["data"])),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GET_ONE_REQUEST };
  }
  function success(product) {
    return { type: userConstants.GET_ONE_SUCCESS, product };
  }
  function failure(error) {
    return { type: userConstants.GET_ONE_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    usersServices.getAll().then(
      (users) => dispatch(success(users["data"])),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GET_ALL_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_ALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_ALL_FAILURE, error };
  }
}

function update(values) {
  return (dispatch) => {
    dispatch(request());

    usersServices.update(values).then(
      (data) => dispatch(success(data["data"])),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GET_ONE_REQUEST };
  }
  function success(product) {
    return { type: userConstants.GET_ONE_SUCCESS, product };
  }
  function failure(error) {
    return { type: userConstants.GET_ONE_FAILURE, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    usersServices.delete(id).then(
      () => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error };
  }
}

function deleteMany(values) {
  return (dispatch) => {
    dispatch(request(values));

    usersServices.deleteMany(values).then(
      (data) => dispatch(success(data["data"])),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request(id) {
    return { type: userConstants.DELETE_MANY_REQUEST, id };
  }
  function success(deleteCount) {
    return { type: userConstants.DELETE_MANY_SUCCESS, deleteCount };
  }
  function failure(error) {
    return { type: userConstants.DELETE_MANY_FAILURE, error };
  }
}
