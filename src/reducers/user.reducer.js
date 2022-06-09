import { userConstants } from "../constaint";
import { cookiesUtil } from "../utilities";

let user = cookiesUtil.getCurrentUser();
const initialState = user
  ? { loading: false, isLoggedIn: true, logedUser: user, user: undefined }
  : { loading: false, isLoggedIn: false };
// logedUser lưu thông tin user đang đăng nhập, user lưu thông tin user đc get one về
export function userReducer(state = initialState, action) {
  console.log("dispatch from authentication.reducer");
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        logedUser: action.logedUser,
        error: false,
      };
    case userConstants.LOGOUT:
      window.location.reload(true);
      return {};
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Unregconize username or password",
      };

    case userConstants.GET_ALL_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case userConstants.GET_ALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.users,
        error: false,
      };
    case userConstants.GET_ALL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case userConstants.GET_ONE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case userConstants.GET_ONE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        voucher: action.voucher,
        error: false,
      };
    case userConstants.GET_ONE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case userConstants.DELETE_MANY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case userConstants.DELETE_MANY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        deleteCount: action.deleteCount,
        error: false,
      };
    case userConstants.DELETE_MANY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
