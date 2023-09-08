import React from "react";
import Team from "./Team";

function TeamList({ teams }) {
  return (
    <div>
      {teams.map((team, index) => (
        <Team key={index} team={team} />
      ))}
    </div>
  );
}

export default TeamList;
