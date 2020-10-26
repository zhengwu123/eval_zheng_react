import React, { useState, useEffect } from "react";
import SearchBar from "./searchBar";
import HomeList from "./HomeList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import FollowingList from "./FollowingList";

const SearchPage = (props) => {
  const [aristName, setArtistName] = useState("");
  const [userName, setUsername] = useState("");
  const [input, setInput] = useState("");
  const [userNameInput, setuserNameInput] = useState("");
  //const [countryListDefault, setCountryListDefault] = useState();
  const [returnedUser, setReturnedUser] = useState([]);
  const [followingLists, setFollowingLists] = useState([]);
  const [songList, setSongList] = useState([]);
  const fetchData = async (username) => {
    var url = "https://api.github.com/users/" + username;
    //console.log(url);

    return await axios
      .get(url, {
        auth: {
          username: "username",
          password: "pass"
        }
      })
      .then(function (response) {
        //console.log(response);
        setReturnedUser([...[], response.data]);
      });
  };

  const fetchFollowingData = async (username) => {
    let url =
      "https://api.github.com/users/" +
      username +
      "/following?page=0&per_page=10";
    //console.log(url);
    return await axios
      .get(url, {
        auth: {
          username: "username",
          password: "pass"
        }
      })
      .then(function (response) {
        console.log("reponsedata:",response.data )
       // console.log(response.data);
        setFollowingLists([...[], response.data]);
        console.log("--------");
      });
  };
  const updateUsername = async (userName) => {
    setArtistName(aristName);
    setuserNameInput(userName);
  };

  useEffect(() => {
    fetchData("zhengwu123");
  }, []);

  useEffect(() => {
    console.log("input username changed");
    fetchData(userNameInput);
    fetchFollowingData(userNameInput);
  }, [userNameInput]);

  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li> ----|----</li>
            <li>
              <Link to="/following"> following </Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/following">
              <Following />
            </Route>
          </Switch>
        </div>
      </Router>
      <p></p>
      <SearchBar
        input={userNameInput}
        //onChange={updateInput}
        onChange={updateUsername}
        placeholder="search github username here!"
      />
    </>
  );
  function Home() {
    return (
      <div>
        <h2>Home</h2>
        <HomeList homeList={returnedUser} />
      </div>
    );
  }

  function Following() {
    return (
      <div>
        <h2>Following</h2>
        <FollowingList followingList={followingLists} />
      </div>
    );
  }
};

export default SearchPage;
