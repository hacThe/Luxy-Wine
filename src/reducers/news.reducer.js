import { newsConstants } from "../constaint";
const initialState = {
  isLoading: false,
  error: false,
  newsList: [],
  news: {},
  deleteCount: 0,
};
export function newsReducer(state = initialState, action) {
  switch (action.type) {
    case newsConstants.GET_ALL_REQUEST:
      return {
        isLoading: true,
        error: false,
      };
    case newsConstants.GET_ALL_SUCCESS:
      return {
        isLoading: false,
        newsList: action.newsList,
        error: false,
      };
    case newsConstants.GET_ALL_FAILURE:
      return {
        isLoading: false,
        error: action.error,
      };

    case newsConstants.GET_ONE_REQUEST:
      return {
        isLoading: true,
        error: false,
      };
    case newsConstants.GET_ONE_SUCCESS:
      return {
        isLoading: false,
        news: action.news,
        error: false,
      };
    case newsConstants.GET_ONE_FAILURE:
      return {
        isLoading: false,
        error: action.error,
      };

    case newsConstants.DELETE_MANY_REQUEST:
      return {
        isLoading: true,
        error: false,
      };
    case newsConstants.DELETE_MANY_SUCCESS:
      return {
        isLoading: false,
        deleteCount: action.deleteCount,
        error: false,
      };
    case newsConstants.DELETE_MANY_FAILURE:
      return {
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
