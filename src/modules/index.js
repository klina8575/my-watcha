import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import movie, { movieSaga } from "./movie";
import loading from "./loading";

const rootReducer = combineReducers({
  movie,
  loading,
});

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐주는 역할을 합니다.
  yield all([movieSaga()]);
}

export default rootReducer;
