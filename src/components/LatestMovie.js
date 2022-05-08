import React from "react";
import styled from "styled-components";
import Card from "./card/Card";

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const LatestMovie = ({ latest, loading }) => {
  const getYear = (release_date) => release_date.split("-")[0] || "";
  return (
    <Base>
      <Title>최근 개봉작</Title>
      {loading ? (
        <div>Loading...</div>
      ) : (
        latest && (
          <Card
            key={latest.id}
            linkUrl={`/movie/${latest.id}`}
            title={latest.title}
            posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${latest.poster_path}`}
            voteAverage={latest.vote_average}
            year={getYear(latest.release_date)}
          />
        )
      )}
    </Base>
  );
};

export default LatestMovie;
