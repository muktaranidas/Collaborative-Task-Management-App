import React from "react";

function Team({ team }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4">
      <h2 className="text-xl font-semibold">Team: {team.name}</h2>
      <h3 className="text-lg font-semibold mt-2">Members</h3>
      <ul className="list-disc ml-6">
        {team.members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
}

export default Team;
