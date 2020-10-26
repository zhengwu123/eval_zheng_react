import React from "react";

const FollowingList = ({ followingList = [] }) => {
  return (
    <>
      {followingList.map((data, index) => {
        if (data) {
          //console.log(data);
          return (
            <div key={data.id}>
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

export default FollowingList;
