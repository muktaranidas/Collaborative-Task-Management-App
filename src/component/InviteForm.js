import React, { useState } from "react";

function InviteForm({ teams, setTeams }) {
  const [selectedTeam, setSelectedTeam] = useState(teams[0] || {});
  const [inviteEmail, setInviteEmail] = useState("");

  const handleInviteEmailChange = (e) => {
    setInviteEmail(e.target.value);
  };

  const inviteUser = () => {
    if (inviteEmail.trim() === "") return;
    const updatedTeams = teams.map((team) => {
      if (team === selectedTeam) {
        return {
          ...team,
          members: [...team.members, inviteEmail],
        };
      }
      return team;
    });
    setSelectedTeam(
      updatedTeams.find((t) => t.name === selectedTeam.name) || {}
    );
    setTeams(updatedTeams);
    setInviteEmail("");
  };

  return (
    <div>
      <select
        onChange={(e) =>
          setSelectedTeam(teams.find((t) => t.name === e.target.value) || {})
        }
        className="border p-2 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {teams.map((team, index) => (
          <option key={index} value={team.name}>
            {team.name}
          </option>
        ))}
      </select>
      <input
        type="email"
        placeholder="Email Address"
        value={inviteEmail}
        onChange={handleInviteEmailChange}
        className="border p-2 rounded-md w-64 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={inviteUser}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Invite
      </button>
    </div>
  );
}

export default InviteForm;
