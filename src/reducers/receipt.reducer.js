import { receiptConstants } from "../constaint";
const initialState = {
  isLoading: false,
  error: false,
  receipts: [],
  receipt: {},
  receiptProduct: [],
  deleteCount: 0,
};
export function receiptReducer(state = initialState, action) {
  switch (action.type) {
    case receiptConstants.GET_ALL_REQUEST:
      return {
        isLoading: true,
        error: false,
      };
    case receiptConstants.GET_ALL_SUCCESS:
      return {
        isLoading: false,
        receipts: action.receipts,
        error: false,
      };
    case receiptConstants.GET_ALL_FAILURE:
      return {
        isLoading: false,
        error: action.error,
      };

    case receiptConstants.GET_ONE_REQUEST:
      return {
        isLoading: true,
        error: false,
      };
    case receiptConstants.GET_ONE_SUCCESS:
      return {
        isLoading: false,
        receipt: action.receipt,
        error: false,
      };
    case receiptConstants.GET_ONE_FAILURE:
      return {
        isLoading: false,
        error: action.error,
      };

    case receiptConstants.DELETE_MANY_REQUEST:
      return {
        isLoading: true,
        error: false,
      };
    case receiptConstants.DELETE_MANY_SUCCESS:
      return {
        isLoading: false,
        deleteCount: action.deleteCount,
        error: false,
      };
    case receiptConstants.DELETE_MANY_FAILURE:
      return {
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
