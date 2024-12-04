import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
const GameWatchlist = () => {
  const { user } = useContext(AuthContext);
  const [myWatchlist, setMyWatchlist] = useState([]);
  console.log(user.email);

  useEffect(() => {
    fetch(`http://localhost:5000/myWatchlist?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyWatchlist(data))
      .catch((err) => console.log(err));
  }, [user]);
  console.log(myWatchlist);
    if (!myWatchlist || myWatchlist.length === 0) {
      return <p>No Reviews found.</p>;
    }
  return <div></div>;
};
export default GameWatchlist;
