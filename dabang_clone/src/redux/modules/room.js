import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import moment from "moment";
import axios from "axios";


// initial state
const initialState = {
    list: [],
};

// actions
const SET_POST = "SET_POST";

// action creators
const setPost = createAction(SET_POST, (post) => ({ post }));

// middleware actions
const getOnePostServer = (id) => {
    return function(dispatch, getState, {history}){
      axios.get(`http://localhost:4000/posts/${id}`)
      .then(function (response) {
        console.log(response,"getOnePostServer");
        dispatch(setPost(response.mock_api));
      })
      .catch(function(err){
        console.log(err,"getOnePostError");
      });
    }
      
  };

// reducer using handle actions, immer
export default handleActions({
    [SET_POST]: (state, action) =>
    produce(state, (draft) => {
      draft.list.push(...action.payload.post);
    })
}, initialState);

export { getOnePostServer }
