import axios from 'axios'

export const productsList = () => async (dispatch) => {
    try {
      dispatch({ type: "CATEGORY_LIST_REQUEST" })

      const { data } = await axios.get('https://stream-restaurant-menu-svc.herokuapp.com/category')
      
      dispatch({ type: "CATEGORY_LIST_SUCCESS", payload: data })
    } catch (error) {
        console.log(error)
      dispatch({
        type: "CATEGORY_LIST_ERROR",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }