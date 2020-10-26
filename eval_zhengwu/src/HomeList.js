import React from "react";

const HomeList = ({ homeList = [] }) => {
  return (
    <>
      {homeList.map((data, index) => {
        if (data) {
          //console.log(data[1]);
          return (
            <div key={data[1]}>
              <h1>{data.login}</h1>
              <img src={data.avatar_url} alt={data.artworkUrl60} width="200" />
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default HomeList;
