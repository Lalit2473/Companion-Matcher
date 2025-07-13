import React from "react";
import MatchCard from "./MatchCard";
import "./MatchList.css";

const MatchList = ({ matches, currentUser }) => {
  return (
    <div className="match-list">
      {matches.length > 0 ? (
        matches.map((match, index) => (
          <MatchCard key={index} match={match} currentUser={currentUser} />
        ))
      ) : (
        <p>No matches found.</p>
      )}
    </div>
  );
};

export default MatchList;