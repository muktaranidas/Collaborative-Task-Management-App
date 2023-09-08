import React, { useState } from "react";
import TeamList from "./TeamList";
import InviteForm from "./InviteForm";

function CreateTeam() {
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [inviteEmail, setInviteEmail] = useState("");

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  const createTeam = () => {
    if (teamName.trim() === "") return;
    const newTeam = {
      name: teamName,
      members: [],
    };
    setTeams([...teams, newTeam]);
    setTeamName("");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Team Collaboration App</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Create a Team</h2>
        <input
          type="text"
          placeholder="Team Name"
          value={teamName}
          onChange={handleTeamNameChange}
          className="border border-gray-300 p-2 rounded-md w-64 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={createTeam}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create Team
        </button>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Teams</h2>
        <TeamList teams={teams} />
      </div>
      <div>
        <h2 className="text-xl font-semibold">Invite Others</h2>
        <InviteForm teams={teams} setTeams={setTeams} />
      </div>
    </div>
  );
}

export default CreateTeam;
