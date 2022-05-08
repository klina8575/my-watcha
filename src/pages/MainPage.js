import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";

import LatestMovieContainer from "../containers/LatestMovieContainer";
import UpcomingMovieContainer from "../containers/UpcomingMovieContainer";
import NowPlayingMovieContainer from "../containers/NowPlayingMovieContainer";

// import LatestMovie from "../components/LatestMovie";
// import UpcomingMovieSection from "../features/movie/upcoming";
// import NowPlayingSection from "../features/movie/nowPlaying";
// import PopularMovieSection from "../features/movie/popular";
// import TopRateMovieSection from "../features/movie/topRate";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const Mainpage = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <LatestMovieContainer />
          <UpcomingMovieContainer />
          <NowPlayingMovieContainer />
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default Mainpage;
