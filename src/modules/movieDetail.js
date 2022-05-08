import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";

const GET_DETAIL = "movieDetail/GET_DETAIL";
const GET_DETAIL_SUCCESS = "movieDetail/GET_DETAIL_SUCCESS";

export const getDetail = createAction(GET_DETAIL, (id) => id);
const getDetailSaga = createRequestSaga(GET_DETAIL, api.getDetail);

export function* movieDetailSaga() {
  yield takeLatest(GET_DETAIL, getDetailSaga);
}

const initialState = {
  detail: null,
};

const movieDetail = handleActions(
  {
    [GET_DETAIL_SUCCESS]: (state, action) => ({
      ...state,
      detail: action.payload,
    }),
  },
  initialState
);

export default movieDetail;
