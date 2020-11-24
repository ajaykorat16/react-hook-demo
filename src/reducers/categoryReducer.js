export const categoryReducer = (state = { category: [] }, action) => {
    switch (action.type) {
      case "CATEGORY_LIST_REQUEST":
        return { loading: true, category: [] }
      case "CATEGORY_LIST_SUCCESS":
        return { loading: false, products: action.payload }
      case "CATEGORY_LIST_ERROR":
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }