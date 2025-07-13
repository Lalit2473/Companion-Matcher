import React, { useState } from "react";
import { shortlistUser } from "../api/api";

const MatchCard = ({ match, currentUser }) => {
  const [shortlisted, setShortlisted] = useState(false);

  const handleShortlist = async () => {
    await shortlistUser(currentUser, match.name);
    setShortlisted(true);
  };

  return (
    <div className="match-card">
      <h3>{match.name}</h3>
      <p>Interests: {match.interests.join(", ")}</p>
      <button onClick={handleShortlist} disabled={shortlisted}>
        {shortlisted ? "Shortlisted" : "Shortlist"}
      </button>
    </div>
  );
};

export default MatchCard;