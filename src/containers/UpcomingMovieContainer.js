import React, { useEffect } from "react";
import { connect } from "react-redux";
import UpComingMovie from "../components/UpComingMovie";
import { getUpcoming } from "../modules/movie";

const UpcomingMovieContainer = ({ getUpcoming, upcoming, loading }) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getUpcoming();
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getUpcoming]);
  return <UpComingMovie upcoming={upcoming} loading={loading} />;
};

export default connect(
  ({ movie, loading }) => ({
    upcoming: movie.upcoming,
    loading: loading["movie/GET_LATEST"],
  }),
  {
    getUpcoming,
  }
)(UpcomingMovieContainer);
