import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";

// 액션 타입들을 선언합니다.
const GET_LATEST = "movie/GET_LATEST";
const GET_LATEST_SUCCESS = "movie/GET_LATEST_SUCCESS";
// const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

// const GET_USERS = "sample/GET_USERS";
// const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
// const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

//액션 생성 함수 만들기
// export const getPost = createAction(GET_POST, (id) => id);
// export const getUsers = createAction(GET_USERS);
export const getLatest = createAction(GET_LATEST);

const getPostSaga = createRequestSaga(GET_LATEST, api.getlatest);
// const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* movieSaga() {
  yield takeLatest(GET_LATEST, getPostSaga);
  // yield takeLatest(GET_USERS, getUsersSaga);
}

// 초기 상태를 선언합니다.
// 요청의 로딩중 상태는 loading 이라는 객체에서 관리합니다.

const initialState = {
  // post: null,
  latest: null,
};

const movie = handleActions(
  {
    [GET_LATEST_SUCCESS]: (state, action) => ({
      ...state,
      latest: action.payload,
    }),
    // [GET_USERS_SUCCESS]: (state, action) => ({
    //   ...state,
    //   users: action.payload
    // })
  },
  initialState
);

export default movie;
