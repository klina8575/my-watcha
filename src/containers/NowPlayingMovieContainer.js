import React, { useEffect } from "react";
import { connect } from "react-redux";
import NowPlayingMovie from "../components/NowPlayingMovie";
import { getNowPlaying } from "../modules/movie";

const NowPlayingMovieContainer = ({ getNowPlaying, nowPlaying, loading }) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getNowPlaying();
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getNowPlaying]);
  return <NowPlayingMovie nowPlaying={nowPlaying} loading={loading} />;
};

export default connect(
  ({ movie, loading }) => ({
    nowPlaying: movie.nowPlaying,
    loading: loading["movie/GET_NOWPLAYING"],
  }),
  {
    getNowPlaying,
  }
)(NowPlayingMovieContainer);
