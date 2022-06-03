import { userConstants } from "../constaint";
import { cookiesUtil } from "../utilities";

let logedUser = cookiesUtil.getCurrentUser();
const initialState = logedUser
  ? { loading: false, isLoggedIn: true, logedUser, user: undefined, users: [] }
  : { loading: false, isLoggedIn: false };
// logedUser lưu thông tin user đang đăng nhập, user lưu thông tin user đc get one về
export function userReducer(state = initialState, action) {
  console.log("dispatch from authentication.reducer");
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loading: true,
        error: false,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loading: false,
        isLoggedIn: true,
        logedUser: action.user || logedUser,
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
        isLoading: true,
        error: false,
      };
    case userConstants.GET_ALL_SUCCESS:
      return {
        isLoading: false,
        users: action.users,
        error: false,
      };
    case userConstants.GET_ALL_FAILURE:
      return {
        isLoading: false,
        error: action.error,
      };

    case userConstants.GET_ONE_REQUEST:
      return {
        isLoading: true,
        error: false,
      };
    case userConstants.GET_ONE_SUCCESS:
      return {
        isLoading: false,
        voucher: action.voucher,
        error: false,
      };
    case userConstants.GET_ONE_FAILURE:
      return {
        isLoading: false,
        error: action.error,
      };

    case userConstants.DELETE_MANY_REQUEST:
      return {
        isLoading: true,
        error: false,
      };
    case userConstants.DELETE_MANY_SUCCESS:
      return {
        isLoading: false,
        deleteCount: action.deleteCount,
        error: false,
      };
    case userConstants.DELETE_MANY_FAILURE:
      return {
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
