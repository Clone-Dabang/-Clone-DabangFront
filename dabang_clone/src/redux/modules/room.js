import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import moment from "moment";
import axios from "axios";

// initial state
const initialState = {
  list: [
    {
      sale_info: { room_type: "원룸" },
      address_info: {
        road: "가가로 14",
        original: "상예동 4576",
      },
      trade_info: {
        monthly_deposit: 10,
        yearly_deposit: 100,
        monthly_pay: 30,
        is_monthly: true,
        is_yearly: true,
      },
      basic_info: {
        building_area: 13.562, // 제곱미터로 넣기
        floor: 13,
        moving_date: "yyyy-MM-dd",
      },
      additional_info: {
        management_fee: 5,
        is_parking_space: true,
        has_pet: true,
        has_elevator: true,
        has_balcony: true,
        has_built_in: true,
        inner_type: "복층",
        loan_possibility: true,
      },
      appliance: {
        has_induction: false,
        has_microwave: false,
        has_air_conditioner: false,
        has_washer: false,
        has_tv: false,
        has_closet: false,
        has_bed: false,
        has_desk: false,
        has_shoe_closet: false,
        has_bidet: false,
        has_gas_range: false,
        has_refrigerator: false,
        has_door_lock: false,
      },
      detail_info: {
        title: "제목",
        contents: "상세 설명",
      },
      image_upload: {
        url: [],
      },
    },
  ],
  main_list: [],
};

// actions
const SET_POST = "room/SET_POST";
const CREATE_SALE_INFO = "room/CREATE_SALE_INFO";
const CREATE_ADDRESS_INFO = "room/CREATE_ADDRESS_INFO";
const CREATE_TRADE_INFO = "room/CREATE_TRADE_INFO";
const CREATE_BASIC_INFO = "room/CREATE_BASIC_INFO";
const CREATE_ADDITIONAL_INFO = "room/CREATE_ADDITIONAL_INFO";
const CREATE_APPLIANCE = "room/CREATE_APPLIANCE";
const CREATE_DETAIL_INFO = "room/CREATE_DETAIL_INFO";
const CREATE_IMAGE_UPLOAD = "room/CREATE_IMAGE_UPLOAD";
const GET_MAIN_POSTS = "room/GET_MAIN_POSTS";

// action creators
const setPost = createAction(SET_POST, (post) => ({ post }));
const createSaleInfo = createAction(CREATE_SALE_INFO, (room_type) => ({
  room_type,
}));
const createAddressInfo = createAction(CREATE_ADDRESS_INFO, (address_info) => ({
  address_info,
}));
const createTradeInfo = createAction(CREATE_TRADE_INFO, (trade_info) => ({
  trade_info,
}));
const createBasicInfo = createAction(CREATE_BASIC_INFO, (basic_info) => ({
  basic_info,
}));
const createAdditionalInfo = createAction(
  CREATE_ADDITIONAL_INFO,
  (additional_info) => ({
    additional_info,
  })
);
const createAppliance = createAction(CREATE_APPLIANCE, (appliance) => ({
  appliance,
}));
const createDetailInfo = createAction(CREATE_DETAIL_INFO, (detail_info) => ({
  detail_info,
}));
const createImageUpload = createAction(CREATE_IMAGE_UPLOAD, (image_upload) => ({
  image_upload,
}));
const getMainPosts = createAction(GET_MAIN_POSTS, (posts) => ({
  posts,
}));

// middleware actions
const getOnePostServer = (id = null) => {
  return function (dispatch, getState, { history }) {
    axios
      .get(`http://3.34.140.51:8088/api/posts/${id}`)
      .then(function (response) {
        console.log(response, "getOnePostServer");
        dispatch(setPost(response.data));
      })
      .catch(function (err) {
        console.log(err, "getOnePostError");
      });
  };
};
const createPostServer = () => {
  return function (dispatch, getState, { history }) {
    axios
      .post(`http://3.34.140.51:8088/api/roomposts`, getState().room.list[0])
      .then(function (response) {
        alert("등록이 완료됐습니다");
        history.replace("/");
      })
      .catch(function (err) {
        console.log("post error", err);
      });
  };
};
const getPostsServer = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get(`http://3.34.140.51:8088/api/posts`)
      .then(function (response) {
        console.log(response);
        dispatch(getMainPosts(response.data.shortInfo));
      })
      .catch(function (err) {
        console.log(err, "getPostsError");
      });
  };
};

// reducer using handle actions, immer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.post);
      }),
    [CREATE_SALE_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.list[0].sale_info.room_type = action.payload.room_type;
      }),
    [CREATE_ADDRESS_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.list[0].address_info = action.payload.address_info;
      }),
    [CREATE_TRADE_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.list[0].trade_info = action.payload.trade_info;
      }),
    [CREATE_BASIC_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.list[0].basic_info = action.payload.basic_info;
      }),
    [CREATE_ADDITIONAL_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.list[0].additional_info = action.payload.additional_info;
      }),
    [CREATE_APPLIANCE]: (state, action) =>
      produce(state, (draft) => {
        draft.list[0].appliance = action.payload.appliance;
      }),
    [CREATE_DETAIL_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.list[0].detail_info = action.payload.detail_info;
      }),
    [CREATE_IMAGE_UPLOAD]: (state, action) =>
      produce(state, (draft) => {
        draft.list[0].image_upload.url.push(action.payload.image_upload);
      }),
    [GET_MAIN_POSTS]: (state, action) =>
      produce(state, (draft) => {
        draft.main_list = action.payload.posts;
      }),
  },
  initialState
);

export {
  getOnePostServer,
  createPostServer,
  createSaleInfo,
  createAddressInfo,
  createTradeInfo,
  createBasicInfo,
  createAdditionalInfo,
  createAppliance,
  createDetailInfo,
  createImageUpload,
  getPostsServer,
};
