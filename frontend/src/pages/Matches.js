import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMatches } from "../api/api";
import MatchList from "../components/MatchList";

const Matches = () => {
  const { username } = useParams();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const res = await getMatches(username);
      setMatches(res);
    };
    fetchMatches();
  }, [username]);

  return (
    <div className="container">
      <h2>Matches for {username}</h2>
      <MatchList matches={matches} currentUser={username} />
    </div>
  );
};

export default Matches;