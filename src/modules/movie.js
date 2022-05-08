import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";

// 액션 타입
const GET_LATEST = "movie/GET_LATEST";
const GET_LATEST_SUCCESS = "movie/GET_LATEST_SUCCESS";

const GET_UPCOMING = "movie/GET_UPCOMING";
const GET_UPCOMING_SUCCESS = "movie/GET_UPCOMING_SUCCESS";

const GET_NOWPLAYING = "movie/GET_NOWPLAYING";
const GET_NOWPLAYING_SUCCESS = "movie/GET_NOWPLAYING_SUCCESS";

// const GET_DETAIL = "movie/GET_DETAIL";
// const GET_DETAIL_SUCCESS = "movie/GET_DETAIL_SUCCESS";

//액션 생성 함수
export const getLatest = createAction(GET_LATEST);
export const getUpcoming = createAction(GET_UPCOMING);
export const getNowPlaying = createAction(GET_NOWPLAYING);
// export const getDetail = createAction(GET_DETAIL, (id) => id);

//saga함수
const getLatestSaga = createRequestSaga(GET_LATEST, api.getlatest);
const getUpcomingSaga = createRequestSaga(GET_UPCOMING, api.getUpcoming);
const getNowPlayingSaga = createRequestSaga(GET_NOWPLAYING, api.getNowPlaying);
// const getDetailSaga = createRequestSaga(GET_DETAIL, api.getDetail);

export function* movieSaga() {
  yield takeLatest(GET_LATEST, getLatestSaga);
  yield takeLatest(GET_UPCOMING, getUpcomingSaga);
  yield takeLatest(GET_NOWPLAYING, getNowPlayingSaga);
  // yield takeLatest(GET_DETAIL, getDetailSaga);
}

const initialState = {
  latest: null,
  upcoming: null,
  nowPlaying: null,
  // detail: null,
};

const movie = handleActions(
  {
    [GET_LATEST_SUCCESS]: (state, action) => ({
      ...state,
      latest: action.payload,
    }),
    [GET_UPCOMING_SUCCESS]: (state, action) => ({
      ...state,
      upcoming: action.payload,
    }),
    [GET_NOWPLAYING_SUCCESS]: (state, action) => ({
      ...state,
      nowPlaying: action.payload,
    }),
    // [GET_DETAIL_SUCCESS]: (state, action) => ({
    //   ...state,
    //   detail: action.payload,
    // }),
  },
  initialState
);

export default movie;
