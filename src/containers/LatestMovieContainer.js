import React, { useEffect } from "react";
import { connect } from "react-redux";
import LatestMovie from "../components/LatestMovie";
import { getLatest } from "../modules/movie";

const LatestmovieContainer = ({
  getLatest,
  latest,
  loadingPost,
  loadingUsers,
}) => {
  // 클래스 형태 컴포넌트였더라면, componentDidMount
  useEffect(() => {
    // useEffect 에 파라미터로 넣는 함수는 async 로 할 수 없기 때문에
    // 그 내부에서 async 함수를 선언하고 호출해줍니다.
    const fn = async () => {
      try {
        await getLatest();
      } catch (e) {
        console.log(e); // 에러 조회
      }
    };
    fn();
  }, [getLatest]);
  return (
    <LatestMovie
      latest={latest}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ movie, loading }) => ({
    latest: movie.latest,
    // loadingPost: loading["sample/GET_POST"],
    loadingUsers: loading["movie/GET_LATEST"],
  }),
  {
    getLatest,
  }
)(LatestmovieContainer);
